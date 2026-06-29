window.addEventListener("load", function(){
if(typeof supabase === "undefined"){ document.body.innerHTML="<p style='padding:2rem;color:red'>Failed to load Supabase library. Check your internet connection.</p>"; return; }
});
const SUPABASE_URL = 'https://zxserlkhwkfoqiepurdr.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4c2VybGtod2tmb3FpZXB1cmRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0NDM1NDIsImV4cCI6MjA5NjAxOTU0Mn0.cA9LJSn5t4sIbIemdQGQsdwtQFwb-6Q9xIZi48UYq34';
let sb;
document.addEventListener('DOMContentLoaded', function(){
  if(typeof supabase === 'undefined'){
    document.body.innerHTML='<p style="padding:2rem;font-family:sans-serif;color:red">Supabase library failed to load. Check internet connection and try again.</p>';
    return;
  }
  sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
  // Wire up event listeners
  document.getElementById('loginBtnTrigger')?.addEventListener('click', doLogin);
  document.getElementById('loginPassInput')?.addEventListener('keydown', function(e){ if(e.key==='Enter') doLogin(); });
  document.getElementById('signOutBtn')?.addEventListener('click', doSignOut);
  // Init auth listener
  sb.auth.onAuthStateChange(async (event, session) => {
    if(session?.user && !currentUser) await loadApp(session.user);
  });
});

let currentUser = null;
let currentProfile = null;
let currentTrack = 'newhire';
let speechRate = 0.92;
let speechPlaying = false;
let speechUtterance = null;
let completedModules = new Set();
let currentModule = null;
let currentSection = 0;
let quizAnswered = false;
let authToken = ''; // stores JWT after login

// ── EMAILJS CONFIG ──
const EMAILJS_SERVICE_ID = 'service_wnhqs7e';
const EMAILJS_TEMPLATE_ID = 'template_gq1z2x6';
const EMAILJS_PUBLIC_KEY = 'kc6pC-rqwD0xph-A0';
const TOOL_URL = 'https://metromobilehc-beep.github.io/selko-comply';

// Modules loaded from selko-comply-modules.js

// ── AUTH ──
function showStatus(msg){ 
  const e = document.getElementById('loginErr'); 
  e.style.background='var(--teal-lt)';
  e.style.color='var(--teal)';
  e.style.border='0.5px solid var(--teal-md)';
  e.textContent = msg; 
  e.style.display = 'block'; 
}
async function doLogin(){
  console.log('doLogin called');
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPassInput').value;
  const btn = document.getElementById('loginBtnTrigger');
  const err = document.getElementById('loginErr');
  err.style.display = 'none';
  if(!email || !pass){ showErr('Enter your email and password.'); return; }
  btn.disabled = true; btn.textContent = 'Signing in…';
  const { data, error } = await sb.auth.signInWithPassword({ email, password: pass });
  if(error){ showErr(error.message); btn.disabled = false; btn.textContent = 'Sign in'; return; }
  // Pass session token directly so loadApp doesn't need to call getSession
  authToken = data.session?.access_token || '';
  console.log('Auth token stored:', authToken ? 'YES' : 'NO');
  await loadApp(data.user);
}

function showErr(msg){ const e = document.getElementById('loginErr'); e.textContent = msg; e.style.display = 'block'; }

async function doSignOut(){
  await sb.auth.signOut();
  document.getElementById('app').style.display = 'none';
  document.getElementById('loginWrap').style.display = 'flex';
  document.getElementById('loginPass').value = '';
  currentUser = null; currentProfile = null;
}

// ── LOAD APP ──
async function loadApp(user){
  currentUser = user;
  showStatus('Loading your profile...');
  console.log('loadApp called for:', user.email, 'id:', user.id);

  try {
    // Use anon key directly — RLS is off on profiles, so this works
    console.log('Fetching profile via REST...');
    const profRes = await fetch(
      SUPABASE_URL + '/rest/v1/profiles?id=eq.' + user.id + '&select=*',
      { headers:{ 
        'apikey': SUPABASE_ANON,
        'Authorization': 'Bearer ' + (authToken || SUPABASE_ANON)
      }}
    );
    const profArr = await profRes.json();
    console.log('Profile REST response:', profRes.status, profArr);
    const data = profArr?.[0];

    if(!data){
      showErr('No profile found. Status: ' + profRes.status);
      return;
    }

    // Get company separately
    const coRes = await fetch(
      SUPABASE_URL + '/rest/v1/companies?id=eq.' + data.company_id + '&select=name,slug',
      { headers:{ 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + (authToken || SUPABASE_ANON) }}
    );
    const coArr = await coRes.json();
    data.companies = (Array.isArray(coArr) && coArr.length) ? coArr[0] : { name: 'Metro Mobile Health Care', slug: 'metro' };
    console.log('Company:', data.companies);

    currentProfile = data;

    // Update UI
    document.getElementById('loginWrap').style.display = 'none';
    document.getElementById('app').style.display = 'block';
    const initials = (data.full_name || '?').split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase();
    document.getElementById('topAvatar').textContent = initials;
    document.getElementById('topName').textContent = data.full_name;
    document.getElementById('topCompany').textContent = data.companies?.name || '';
    document.getElementById('welcomeName').textContent = 'Welcome, ' + (data.full_name.split(' ')[0]);
    document.getElementById('welcomeSub').textContent = (data.companies?.name || '') + ' · Compliance training';

    console.log('Role check:', data.role, '| Is admin:', data.role === 'admin');
    if(data.role === 'admin'){
      document.getElementById('adminTab').style.display = 'block';
      document.getElementById('manageTab').style.display = 'block';
      console.log('Admin tab shown');
    }

    await loadCompletions();
    renderModuleGrid();
    renderWelcomeStats();
    if(data.role === 'admin'){
      console.log('Calling renderAdminTable...');
      renderAdminTable();
    }

  } catch(e) {
    showErr('Unexpected error: ' + e.message);
    console.error(e);
  }
}


// ── LOAD COMPLETIONS ──
async function loadCompletions(){
  try {
    const res = await fetch(
      SUPABASE_URL + '/rest/v1/compliance_completions?staff_id=eq.' + currentUser.id + '&select=module_id',
      { headers:{ 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + (authToken || SUPABASE_ANON) }}
    );
    const data = await res.json();
    completedModules = new Set((data || []).map(r => r.module_id));
    console.log('Completed modules:', [...completedModules]);
  } catch(e) {
    console.log('loadCompletions error:', e);
    completedModules = new Set();
  }
}

// ── TRACK ──
function setTrack(track, btn){
  currentTrack = track;
  document.querySelectorAll('#trackNew,#trackAnnual').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderModuleGrid();
  renderWelcomeStats();
}

// ── RENDER MODULES ──
function renderModuleGrid(){
  const grid = document.getElementById('moduleGrid');
  if(!grid) return;
  if(typeof MODULES === 'undefined' || !MODULES || !MODULES.length){
    grid.innerHTML = '<p style="color:var(--muted);font-size:13px;padding:1rem">Training modules loading...</p>';
    return;
  }
  const mods = MODULES.filter(m => m && m.track && m.track.includes(currentTrack));
  grid.innerHTML = mods.map(m => {
    const done = completedModules.has(m.id);
    return `<div class="module-card${done?' completed':''}" onclick="openModule('${m.id}')">
      <div class="module-status ${done?'done':'required'}">${done?'✓ Complete':'Required'}</div>
      <div class="module-icon">${m.icon||'📋'}</div>
      <div class="module-name">${m.title||m.name||'Module'}</div>
      <div class="module-desc">${m.desc||m.description||''}</div>
      <div class="module-meta">
        <span class="module-tag clinical">${m.track.includes('annual')?'Annual required':'New hire'}</span>
        <span class="module-tag mins">~${m.mins||15} min</span>
        ${done?'<span class="module-tag clinical" style="background:var(--green-lt);color:var(--green);border-color:#86efac">✓ Done</span>':''}
      </div>
    </div>`;
  }).join('');
}

function renderWelcomeStats(){
  if(typeof MODULES === 'undefined' || !MODULES) return;
  const mods = MODULES.filter(m => m && m.track && m.track.includes(currentTrack));
  const total = mods.length;
  const done = mods.filter(m => completedModules.has(m.id)).length;
  const pct = total ? Math.round((done/total)*100) : 0;
  document.getElementById('welcomeStats').innerHTML = `
    <div class="welcome-stat"><div class="welcome-stat-num">${done}/${total}</div><div class="welcome-stat-label">Completed</div></div>
    <div class="welcome-stat"><div class="welcome-stat-num">${pct}%</div><div class="welcome-stat-label">Progress</div></div>
  `;
}

// ── TRAINING VIEWER ──
function openModule(id){
  currentModule = MODULES.find(m => m.id === id);
  if(!currentModule) return;
  currentSection = 0;
  quizAnswered = false;
  if(window.speechSynthesis) window.speechSynthesis.cancel();
  speechPlaying = false;
  document.getElementById('moduleGrid').style.display = 'none';
  document.getElementById('trainingViewer').style.display = 'block';
  document.getElementById('viewerTitle').textContent = currentModule.title;
  renderSection();
}

function closeTraining(){
  document.getElementById('trainingViewer').style.display = 'none';
  document.getElementById('moduleGrid').style.display = 'grid';
}

function renderSection(){
  const total = currentModule.slides.length + 1; // +1 for quiz slide
  const pct = Math.round((currentSection / (total)) * 100);
  document.getElementById('progressBar').style.width = pct + '%';

  if(currentSection < currentModule.slides.length){
    const s = currentModule.slides[currentSection];
    document.getElementById('trainingContent').innerHTML = `
      <div class="listen-bar">
        <button class="listen-btn" id="listenBtn" onclick="toggleListen()">🔊 Listen</button>
        <button class="speed-btn" onclick="adjustSpeed(-0.1)">🐢</button>
        <span class="speed-label" id="speedLabel">1×</span>
        <button class="speed-btn" onclick="adjustSpeed(0.1)">🐇</button>
        <span style="font-size:12px;color:var(--teal);flex:1" id="listenLabel">Tap to hear this slide read aloud</span>
      </div>
      <div class="section-card">
        <div class="section-eyebrow" style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--teal);margin-bottom:.5rem">Slide ${currentSection+1} of ${currentModule.slides.length}</div>
        <div class="section-title" style="font-size:17px;font-weight:600;color:var(--navy);margin-bottom:.75rem">${s.title}</div>
        <div class="section-body">${s.content}</div>
      </div>`;
    document.getElementById('navActions').innerHTML = `
      <button class="btn" onclick="prevSection()" ${currentSection===0?'disabled':''}>← Previous</button>
      <button class="btn primary" onclick="nextSection()">Next →</button>`;
  } else {
    renderQuizSlide();
  }
}

function renderQuizSlide(){
  if(completedModules.has(currentModule.id)){
    document.getElementById('trainingContent').innerHTML = `<div class="section-card" style="text-align:center;padding:2rem"><div style="font-size:48px;margin-bottom:1rem">✅</div><div style="font-size:17px;font-weight:600;color:var(--navy);margin-bottom:.5rem">Module already complete</div><p style="color:var(--muted);font-size:13px">You have already completed this module. Click back to return to your dashboard.</p></div>`;
    document.getElementById('navActions').innerHTML = `<button class="btn" onclick="closeTraining()">← Back to training</button>`;
    return;
  }
  const qs = currentModule.quiz;
  document.getElementById('trainingContent').innerHTML = `
    <div class="section-card">
      <div class="section-eyebrow" style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--gold);margin-bottom:.5rem">Knowledge check — ${qs.length} questions</div>
      <div class="section-title" style="font-size:17px;font-weight:600;color:var(--navy);margin-bottom:1rem">Answer all questions to complete this module</div>
      ${qs.map((q,qi)=>`
        <div class="quiz-card" style="margin-bottom:1rem" id="qq${qi}">
          <div class="qa-q" style="font-size:14px;font-weight:500;color:var(--navy);margin-bottom:.75rem">${qi+1}. ${q.q}</div>
          ${q.options.map((o,oi)=>`<button class="quiz-opt" id="opt_${qi}_${oi}" onclick="selectOpt(${qi},${oi})">${o}</button>`).join('')}
          <div class="quiz-feedback" id="qf${qi}" style="display:none;margin-top:.5rem;padding:8px 12px;border-radius:var(--radius);font-size:12px;line-height:1.5"></div>
        </div>`).join('')}
    </div>`;
  document.getElementById('navActions').innerHTML = `
    <button class="btn" onclick="prevSection()">← Review slides</button>
    <button class="btn primary" id="submitBtn" onclick="submitQuiz()" disabled>Submit quiz →</button>`;
}

let quizSelections = {};

function selectOpt(qi, oi){
  quizSelections[qi] = oi;
  // Update button styles for this question
  currentModule.quiz[qi].options.forEach((_,i)=>{
    const btn = document.getElementById('opt_'+qi+'_'+i);
    if(btn){ btn.style.background=''; btn.style.borderColor=''; btn.style.color=''; }
  });
  const sel = document.getElementById('opt_'+qi+'_'+oi);
  if(sel){ sel.style.background='var(--teal-lt)'; sel.style.borderColor='var(--teal)'; sel.style.color='var(--teal)'; }
  // Enable submit if all answered
  const allDone = currentModule.quiz.every((_,i) => quizSelections[i] !== undefined);
  const btn = document.getElementById('submitBtn');
  if(btn) btn.disabled = !allDone;
}

function submitQuiz(){
  let correct = 0;
  const qs = currentModule.quiz;
  qs.forEach((q,qi)=>{
    const chosen = quizSelections[qi];
    const right = chosen === q.answer;
    if(right) correct++;
    qs[qi].options.forEach((_,oi)=>{
      const btn = document.getElementById('opt_'+qi+'_'+oi);
      if(!btn) return;
      btn.disabled = true;
      if(oi === q.answer){ btn.style.background='var(--green-lt)'; btn.style.borderColor='#86efac'; btn.style.color='var(--green)'; }
      else if(oi === chosen && !right){ btn.style.background='var(--red-lt)'; btn.style.borderColor='#fca5a5'; btn.style.color='var(--red)'; }
    });
    const fb = document.getElementById('qf'+qi);
    if(fb){ fb.style.display='block'; fb.textContent=q.explanation; fb.style.background=right?'var(--green-lt)':'var(--red-lt)'; fb.style.color=right?'var(--green)':'var(--red)'; }
  });
  const score = Math.round((correct/qs.length)*100);
  const passed = score >= (currentModule.passScore || 80);
  document.getElementById('submitBtn').style.display='none';
  
  // Add result + attestation
  document.getElementById('trainingContent').innerHTML += `
    <div class="section-card" style="margin-top:1rem;background:${passed?'var(--teal-lt)':'var(--red-lt)'};border-color:${passed?'var(--teal-md)':'#fca5a5'}">
      <div style="font-size:32px;font-weight:700;color:${passed?'var(--teal)':'var(--red)'}">${score}%</div>
      <div style="font-size:14px;font-weight:500;color:${passed?'#0a6b58':'var(--red)'};">${correct} of ${qs.length} correct · ${passed?'Passed ✓':'Did not pass — please retake'}</div>
      ${passed ? `
        <div class="attest-card" style="margin-top:1.25rem;background:var(--navy);border-radius:10px;padding:1.25rem">
          <div style="font-size:14px;font-weight:600;color:#fff;margin-bottom:.5rem">Training attestation</div>
          <div style="font-size:12px;color:rgba(255,255,255,.65);margin-bottom:1rem;line-height:1.6">By signing below, I confirm that I have reviewed all content in this module and understand my responsibilities.</div>
          <label style="display:flex;align-items:flex-start;gap:8px;cursor:pointer;margin-bottom:.75rem">
            <input type="checkbox" id="attestCheck" onchange="toggleComplete()" style="accent-color:var(--teal);margin-top:2px">
            <span style="font-size:12px;color:rgba(255,255,255,.8)">I have completed <strong>${currentModule.title}</strong> and understand my responsibilities. (${new Date().getFullYear()})</span>
          </label>
          <button class="complete-btn" id="completeBtn" onclick="completeModule(${score})" disabled>Mark complete ✓</button>
        </div>` : `
        <div style="margin-top:1rem"><button class="btn" onclick="openModule('${currentModule.id}')">↺ Retake module</button></div>`}
    </div>`;
}

function toggleComplete(){
  const btn = document.getElementById('completeBtn');
  if(btn) btn.disabled = !document.getElementById('attestCheck').checked;
}

async function completeModule(score){
  const btn = document.getElementById('completeBtn');
  btn.disabled = true; btn.textContent = 'Saving…';
  const payload = {
    staff_id: currentUser.id,
    company_id: currentProfile.company_id,
    module_id: currentModule.id,
    module_name: currentModule.name,
    completed_at: new Date().toISOString(),
    year: new Date().getFullYear()
  };
  const res = await fetch(
    SUPABASE_URL + '/rest/v1/compliance_completions',
    { method: 'POST',
      headers:{ 
        'apikey': SUPABASE_ANON,
        'Authorization': 'Bearer ' + (authToken || SUPABASE_ANON),
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates'
      },
      body: JSON.stringify(payload)
    }
  );
  if(!res.ok){ btn.disabled = false; btn.textContent = 'Error — try again'; return; }
  completedModules.add(currentModule.id);
  btn.textContent = '✓ Completed!';
  btn.style.background = 'var(--green)';
  setTimeout(() => { closeTraining(); renderModuleGrid(); renderWelcomeStats(); }, 1200);
}

function prevSection(){ 
  if(window.speechSynthesis) window.speechSynthesis.cancel(); speechPlaying = false;
  if(currentSection > 0){ currentSection--; quizSelections={}; renderSection(); } 
}
function nextSection(){ 
  if(window.speechSynthesis) window.speechSynthesis.cancel(); speechPlaying = false;
  currentSection++; quizSelections={}; renderSection(); 
}

// ── TABS ──
function showTab(tab){
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  event.currentTarget.classList.add('active');
  document.getElementById('trainingTab').style.display = tab==='training'?'block':'none';
  document.getElementById('adminTab2').style.display = tab==='admin'?'block':'none';
  const mt2 = document.getElementById('manageTab2');
  if(mt2) mt2.style.display = tab==='manage'?'block':'none';
  else if(tab==='manage') console.error('manageTab2 div not found in HTML');
  if(tab==='manage') loadStaffTable();
  if(tab==='admin') renderAdminTable();
}

// ── ADMIN TABLE ──
async function renderAdminTable(){
  console.log('renderAdminTable called, company_id:', currentProfile.company_id);
  const staffRes = await fetch(
    SUPABASE_URL + '/rest/v1/compliance_staff?company_id=eq.' + currentProfile.company_id + '&order=full_name',
    { headers:{ 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + (authToken || SUPABASE_ANON) }}
  );
  const staff = await staffRes.json();
  console.log('Staff fetch status:', staffRes.status, '| Count:', Array.isArray(staff) ? staff.length : 'error', staff);

  const compRes = await fetch(
    SUPABASE_URL + '/rest/v1/compliance_completions?company_id=eq.' + currentProfile.company_id,
    { headers:{ 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + (authToken || SUPABASE_ANON) }}
  );
  const completions = await compRes.json();

  if(!staff || !staff.length){ document.getElementById('adminTable').innerHTML = '<p style="color:var(--muted);font-size:13px">No staff records found.</p>'; return; }

  const compByStaff = {};
  (completions || []).forEach(c => {
    // Key by staff_id (auth UUID) and also by employee_name for legacy records
    const key = c.staff_id || c.employee_name;
    if(key){
      if(!compByStaff[key]) compByStaff[key] = new Set();
      compByStaff[key].add(c.module_id);
    }
  });

  const trackMods = (typeof MODULES !== 'undefined') ? MODULES : [];
  const rows = staff.map(s => {
    const sid = s.id || s.full_name; // fallback to name if no id
    const done = compByStaff[sid] ? compByStaff[sid].size : 0;
    const total = trackMods.length;
    const pillClass = done === total ? 'all' : done > 0 ? 'some' : 'none';
    const pillText = done === total ? '✓ Complete' : `${done}/${total}`;
    const dots = trackMods.map(m => `<div class="mdot ${compByStaff[sid]?.has(m.id)?'done':'todo'}" title="${m.title||m.name||''}"></div>`).join('');
    return `<tr>
      <td style="font-weight:500">${s.full_name || s.name || '—'}</td>
      <td>${s.role || '—'}</td>
      <td><span class="progress-pill ${pillClass}">${pillText}</span></td>
      <td><div class="module-dots">${dots}</div></td>
    </tr>`;
  }).join('');

  document.getElementById('adminTable').innerHTML = `
    <table class="staff-table">
      <thead><tr><th>Name</th><th>Role</th><th>Status</th><th>Modules</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
}

// ── INIT ── (handled in DOMContentLoaded)


// ── STAFF MANAGEMENT ──
function showAddStaffForm(){
  document.getElementById('addStaffForm').style.display = 'block';
  document.getElementById('newName').focus();
}
function hideAddStaffForm(){
  document.getElementById('addStaffForm').style.display = 'none';
  ['newName','newEmail'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('addStaffError').style.display = 'none';
}

async function loadStaffTable(){
  const res = await fetch(
    SUPABASE_URL + '/rest/v1/compliance_staff?company_id=eq.' + currentProfile.company_id + '&order=full_name',
    { headers:{ 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + (authToken || SUPABASE_ANON) }}
  );
  const staff = await res.json();
  
  // Get completions for module dots
  const cRes = await fetch(
    SUPABASE_URL + '/rest/v1/compliance_completions?company_id=eq.' + currentProfile.company_id + '&select=staff_id,module_id,employee_name',
    { headers:{ 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + (authToken || SUPABASE_ANON) }}
  );
  const comps = await cRes.json();
  const compMap = {};
  (comps || []).forEach(c => {
    const k = c.staff_id || c.employee_name;
    if(k){ if(!compMap[k]) compMap[k] = new Set(); compMap[k].add(c.module_id); }
  });

  const mods = (typeof MODULES !== 'undefined') ? MODULES : [];
  const tbody = document.getElementById('staffTbody');
  if(!Array.isArray(staff) || !staff.length){
    tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;color:var(--muted);padding:1.5rem">No staff records found.</td></tr>';
    return;
  }

  tbody.innerHTML = staff.map(s => {
    const compKey = s.id;
    const done = compMap[compKey] ? compMap[compKey].size : 0;
    const dots = mods.map(m => `<div class="mdot ${compMap[compKey]?.has(m.id)?'done':'todo'}" title="${m.title||''}"></div>`).join('');
    return `<tr id="srow_${s.id}">
      <td style="font-weight:500">${s.full_name || '—'}</td>
      <td>
        <span style="font-size:12px;color:var(--muted)">${s.email || '<em style="opacity:.5">not set</em>'}</span>
        <button onclick="editStaffEmail('${s.id}','${(s.full_name||'').replace(/'/g,"\'")}','${s.email||''}')" style="margin-left:5px;padding:2px 6px;font-size:10px;border:0.5px solid var(--border);border-radius:5px;background:transparent;cursor:pointer;color:var(--muted)">✏</button>
      </td>
      <td><span style="font-weight:500;color:${s.role==='admin'?'var(--gold)':'var(--teal)'}">${s.role||'clinician'}</span></td>
      <td><span style="font-size:12px;font-weight:600;color:${s.active!==false?'var(--green)':'var(--red)'}">${s.active!==false?'● Active':'○ Inactive'}</span></td>
      <td><div class="module-dots">${dots}</div></td>
      <td>
        <div style="display:flex;gap:5px;flex-wrap:wrap">
          <button class="btn sm" onclick="resetStaffPin('${s.id}','${(s.full_name||'').replace(/'/g,"\'")}')">Reset PIN</button>
          <button class="btn sm" style="border-color:${s.active!==false?'var(--red)':'var(--green)'};color:${s.active!==false?'var(--red)':'var(--green)'}" onclick="toggleStaffActive('${s.id}',${s.active!==false})">${s.active!==false?'Deactivate':'Reactivate'}</button>
          <button class="btn sm" style="border-color:var(--gold);color:var(--gold)" onclick="toggleStaffRole('${s.id}','${s.role||'clinician'}')">${s.role==='admin'?'→ Clinician':'→ Admin'}</button>
          ${s.email ? `<button class="btn sm" style="border-color:var(--teal);color:var(--teal)" onclick="sendReminder('${(s.full_name||'').replace(/'/g,"\'")}','${s.email}')">📧 Remind</button>` : ''}
          <button class="btn sm" style="border-color:var(--red);color:var(--red)" onclick="deleteStaffMember('${s.id}','${(s.full_name||'').replace(/'/g,"\'")}')">Delete</button>
        </div>
      </td>
    </tr>`;
  }).join('');
}

async function saveNewStaff(){
  const name = document.getElementById('newName').value.trim();
  const email = document.getElementById('newEmail').value.trim();
  const role = document.getElementById('newRole').value;
  const errEl = document.getElementById('addStaffError');
  errEl.style.display = 'none';
  if(!name){ errEl.textContent = 'Name is required.'; errEl.style.display = 'block'; return; }
  const res = await fetch(
    SUPABASE_URL + '/rest/v1/compliance_staff',
    { method: 'POST',
      headers:{ 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + (authToken || SUPABASE_ANON), 'Content-Type': 'application/json', 'Prefer': 'return=representation' },
      body: JSON.stringify({ full_name: name, email: email || null, role, active: true, company_id: currentProfile.company_id })
    }
  );
  if(!res.ok){ const e = await res.json(); errEl.textContent = e.message || 'Error saving staff member.'; errEl.style.display = 'block'; return; }
  hideAddStaffForm();
  loadStaffTable();
  showToast('✓ ' + name + ' added successfully');
}

async function toggleStaffActive(id, currentlyActive){
  await fetch(
    SUPABASE_URL + '/rest/v1/compliance_staff?id=eq.' + id,
    { method: 'PATCH',
      headers:{ 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + (authToken || SUPABASE_ANON), 'Content-Type': 'application/json' },
      body: JSON.stringify({ active: !currentlyActive })
    }
  );
  loadStaffTable();
  showToast(currentlyActive ? '✓ Staff member deactivated' : '✓ Staff member reactivated');
}

async function toggleStaffRole(id, currentRole){
  const newRole = currentRole === 'admin' ? 'clinician' : 'admin';
  await fetch(
    SUPABASE_URL + '/rest/v1/compliance_staff?id=eq.' + id,
    { method: 'PATCH',
      headers:{ 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + (authToken || SUPABASE_ANON), 'Content-Type': 'application/json' },
      body: JSON.stringify({ role: newRole })
    }
  );
  loadStaffTable();
  showToast('✓ Role updated to ' + newRole);
}

async function resetStaffPin(id, name){
  const newPin = prompt('Set new PIN for ' + name + ':');
  if(!newPin) return;
  if(newPin.length < 4){ showToast('PIN must be at least 4 characters'); return; }
  await fetch(
    SUPABASE_URL + '/rest/v1/compliance_staff?id=eq.' + id,
    { method: 'PATCH',
      headers:{ 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + (authToken || SUPABASE_ANON), 'Content-Type': 'application/json' },
      body: JSON.stringify({ pin: newPin })
    }
  );
  showToast('✓ PIN updated for ' + name);
}

async function editStaffEmail(id, name, currentEmail){
  const newEmail = prompt('Email address for ' + name + ':', currentEmail || '');
  if(newEmail === null) return;
  await fetch(
    SUPABASE_URL + '/rest/v1/compliance_staff?id=eq.' + id,
    { method: 'PATCH',
      headers:{ 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + (authToken || SUPABASE_ANON), 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: newEmail || null })
    }
  );
  loadStaffTable();
  showToast('✓ Email updated for ' + name);
}

async function deleteStaffMember(id, name){
  if(!confirm('Delete ' + name + '? Training completion records will be kept.')) return;
  await fetch(
    SUPABASE_URL + '/rest/v1/compliance_staff?id=eq.' + id,
    { method: 'DELETE',
      headers:{ 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + (authToken || SUPABASE_ANON) }
    }
  );
  loadStaffTable();
  showToast('✓ ' + name + ' deleted');
}

async function sendReminder(name, email){
  if(!email){ showToast('No email address on file for ' + name); return; }
  if(!confirm('Send training reminder to ' + name + ' at ' + email + '?')) return;
  try {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      to_email: email,
      to_name: name,
      subject_line: 'Reminder — Complete Your Compliance Training',
      message_body: 'This is a reminder to complete your required compliance training modules.',
      tool_url: TOOL_URL,
      company_name: currentProfile.companies?.name || 'Metro Mobile Health Care'
    });
    showToast('✓ Reminder sent to ' + name);
  } catch(e) {
    showToast('Failed to send reminder — check EmailJS settings');
    console.error('EmailJS error:', e);
  }
}

// ── TOAST ──
let toastTimer;
function showToast(msg){
  let el = document.getElementById('selko-toast');
  if(!el){
    el = document.createElement('div');
    el.id = 'selko-toast';
    el.style.cssText = 'position:fixed;bottom:24px;right:24px;background:var(--navy);color:#fff;padding:10px 18px;border-radius:10px;font-size:13px;font-family:Sora,sans-serif;z-index:9999;opacity:0;transform:translateY(8px);transition:all .25s;pointer-events:none';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.style.opacity = '1'; el.style.transform = 'translateY(0)';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.style.opacity='0'; el.style.transform='translateY(8px)'; }, 3000);
}

// ── TEXT TO SPEECH ──
function getSlideText(){
  if(!currentModule || currentSection >= currentModule.slides.length) return '';
  const s = currentModule.slides[currentSection];
  const tmp = document.createElement('div');
  tmp.innerHTML = s.title + '. ' + s.content;
  return tmp.textContent.replace(/[ \t\n]+/g,' ').trim();
}

function toggleListen(){
  if(speechPlaying){ window.speechSynthesis.cancel(); speechPlaying=false; updateListenBtn(false); }
  else { startListen(); }
}

function startListen(){
  if(!window.speechSynthesis) return;
  const text = getSlideText();
  speechUtterance = new SpeechSynthesisUtterance(text);
  speechUtterance.rate = speechRate; speechUtterance.pitch = 1.0;
  const voices = window.speechSynthesis.getVoices();
  const v = voices.find(v=>v.lang==='en-US'&&v.name.includes('Google')) || voices.find(v=>v.lang.startsWith('en-US'));
  if(v) speechUtterance.voice = v;
  speechUtterance.onstart = ()=>{ speechPlaying=true; updateListenBtn(true); };
  speechUtterance.onend = speechUtterance.onerror = ()=>{ speechPlaying=false; updateListenBtn(false); };
  window.speechSynthesis.speak(speechUtterance);
}

function updateListenBtn(playing){
  const btn = document.getElementById('listenBtn');
  const lbl = document.getElementById('listenLabel');
  if(btn){ btn.textContent = playing ? '⏹ Stop' : '🔊 Listen'; btn.className='listen-btn'+(playing?' playing':''); }
  if(lbl) lbl.textContent = playing ? 'Reading aloud…' : 'Tap to replay';
}

function adjustSpeed(delta){
  speechRate = Math.min(1.5, Math.max(0.5, Math.round((speechRate+delta)*10)/10));
  const lbl = document.getElementById('speedLabel');
  if(lbl) lbl.textContent = speechRate.toFixed(1).replace('.0','') + 'x';
  if(speechPlaying){ window.speechSynthesis.cancel(); setTimeout(startListen, 100); }
}

if(window.speechSynthesis){ window.speechSynthesis.getVoices(); window.speechSynthesis.onvoiceschanged=()=>window.speechSynthesis.getVoices(); }