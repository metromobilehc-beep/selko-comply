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
  // Check for existing session on load
  sb.auth.getSession().then(async ({ data: { session } }) => {
    if(session?.user){
      authToken = session.access_token || '';
      await loadApp(session.user);
    }
  });

  // Listen for auth state changes (login/logout)
  sb.auth.onAuthStateChange(async (event, session) => {
    if(event === 'SIGNED_IN' && session?.user && !currentUser){
      authToken = session.access_token || '';
      await loadApp(session.user);
    }
    if(event === 'SIGNED_OUT'){
      currentUser = null;
      currentProfile = null;
      authToken = '';
      document.getElementById('app').style.display = 'none';
      document.getElementById('loginWrap').style.display = 'flex';
    }
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
const TOOL_URL = 'https://comply.selko360.com';

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
    if(Array.isArray(coArr) && coArr.length){
      data.companies = coArr[0];
    } else {
      console.log('Company fetch empty — retrying with anon key');
      const coRes2 = await fetch(
        SUPABASE_URL + '/rest/v1/companies?id=eq.' + data.company_id + '&select=*',
        { headers:{ 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + SUPABASE_ANON }}
      );
      const coArr2 = await coRes2.json();
      data.companies = (Array.isArray(coArr2) && coArr2.length) ? coArr2[0] : { name: 'Your Organization', slug: '' };
    }
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

    console.log('Role check:', data.role, '| Is admin:', data.role === 'admin', '| Super admin:', data.is_super_admin);
    if(data.is_super_admin){
      // Load all companies for super admin
      loadSuperAdminData();
    }
    if(data.role === 'admin'){
      document.getElementById('adminTab').style.display = 'block';
      document.getElementById('manageTab').style.display = 'block';
      console.log('Admin tab shown');
    }
    if(data.is_super_admin){
      document.getElementById('superAdminTab').style.display = 'block';
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
  const isAdmin = currentProfile && (currentProfile.role === 'admin' || currentProfile.role === 'owner');
  const staffType = currentProfile?.staff_type || (isAdmin ? 'owner' : 'clinician');
  console.log('Module filter — role:', currentProfile?.role, 'staffType:', staffType, 'isAdmin:', isAdmin);
  const mods = MODULES.filter(m => {
    if(!m || !m.track || !m.track.includes(currentTrack)) return false;
    if(m.adminOnly && !isAdmin) return false;
    if(m.staffTypes && !m.staffTypes.includes(staffType)) return false;
    return true;
  });
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
  const isAdmin = currentProfile && currentProfile.role === 'admin';
  const mods = MODULES.filter(m => m && m.track && m.track.includes(currentTrack) && (!m.adminOnly || isAdmin));
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
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function closeTraining(){
  document.getElementById('trainingViewer').style.display = 'none';
  document.getElementById('moduleGrid').style.display = 'grid';
}

function getCompanyName(){
  return (currentProfile && currentProfile.companies && currentProfile.companies.name)
    ? currentProfile.companies.name
    : 'your organization';
}

function applyCompanyVars(html){
  const co = currentProfile?.companies || {};
  const name = co.name || 'your organization';
  const isPro = co.plan === 'pro' || co.plan === 'enterprise';
  const contacts = co.custom_contacts || {};
  const vars = co.custom_vars || {};

  let out = html;

  // Always substitute company name
  out = out.replace(/your organization's/g, name + "'s");
  out = out.replace(/your organization/g, name);

  // Pro substitutions
  if(isPro){
    // Contacts
    if(contacts.privacy_officer){
      out = out.replace(/your designated Privacy Officer/g, contacts.privacy_officer);
      out = out.replace(/your designated supervisor or Privacy Officer/g, contacts.privacy_officer + ' or ' + (contacts.backup_contact || 'your backup supervisor'));
    }
    if(contacts.backup_contact){
      out = out.replace(/your backup supervisor contact/g, contacts.backup_contact);
    }
    if(contacts.privacy_email){
      out = out.replace(/your Privacy Officer's contact email/g, contacts.privacy_email);
      out = out.replace(/your organization's compliance email/g, contacts.privacy_email);
    }

    // Tools and devices
    if(vars.scheduling_tool){
      out = out.replace(/your approved scheduling platform/g, vars.scheduling_tool);
    }
    if(vars.device){
      out = out.replace(/your company-issued device/g, vars.device);
      out = out.replace(/your MDM system/g, vars.mdm || (vars.device + ' MDM'));
    }

    // State-specific
    if(vars.state){
      out = out.replace(/your state's mandatory reporting statute/g, vars.state + ' mandatory reporting law');
      out = out.replace(/your state's adult protective services website/g, vars.aps_website || (vars.state.toLowerCase() + ' APS website'));
      out = out.replace(/your state's workers' compensation requirements/g, vars.state + " workers' compensation requirements");
      out = out.replace(/your regional Federal OSHA office/g, vars.osha_region || 'your regional Federal OSHA office');
      out = out.replace(/Severe weather can develop rapidly in your area\./g, vars.state + ' severe weather can develop rapidly.');
    }
    if(vars.aps_hotline){
      out = out.replace(/your state's APS hotline/g, vars.aps_hotline);
    }
  }

  return out;
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
        <div class="section-body">${applyCompanyVars(s.content)}</div>
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
  setTimeout(() => {
    document.getElementById('trainingContent').scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, 100);
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

function scrollToTrainingTop(){
  const viewer = document.getElementById('trainingViewer');
  if(viewer) viewer.scrollIntoView({ behavior: 'instant', block: 'start' });
  window.scrollTo({ top: viewer ? viewer.offsetTop - 10 : 0, behavior: 'instant' });
}

function prevSection(){ 
  if(window.speechSynthesis) window.speechSynthesis.cancel(); speechPlaying = false;
  if(currentSection > 0){ currentSection--; quizSelections={}; renderSection(); scrollToTrainingTop(); } 
}
function nextSection(){ 
  if(window.speechSynthesis) window.speechSynthesis.cancel(); speechPlaying = false;
  currentSection++; quizSelections={}; renderSection(); scrollToTrainingTop();
}

// ── TABS ──
function showTab(tab){
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  event.currentTarget.classList.add('active');
  document.getElementById('trainingTab').style.display = tab==='training'?'block':'none';
  document.getElementById('adminTab2').style.display = tab==='admin'?'block':'none';
  const mt2 = document.getElementById('manageTab2');
  if(mt2) mt2.style.display = tab==='manage'?'block':'none';
  const sa2 = document.getElementById('superAdminTab2');
  if(sa2) sa2.style.display = tab==='superadmin'?'block':'none';
  if(tab==='manage') loadStaffTable();
  if(tab==='admin') renderAdminTable();
  if(tab==='superadmin') loadSuperAdminData();
}

// ── ADMIN TABLE ──
async function renderAdminTable(){
  const staffRes = await fetch(
    SUPABASE_URL + '/rest/v1/compliance_staff?company_id=eq.' + currentProfile.company_id + '&order=full_name&active=eq.true',
    { headers:{ 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + (authToken || SUPABASE_ANON) }}
  );
  const staff = await staffRes.json();

  const compRes = await fetch(
    SUPABASE_URL + '/rest/v1/compliance_completions?company_id=eq.' + currentProfile.company_id + '&select=staff_id,module_id,score,completed_at',
    { headers:{ 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + (authToken || SUPABASE_ANON) }}
  );
  const completions = await compRes.json();

  const el = document.getElementById('adminTable');
  if(!Array.isArray(staff) || !staff.length){
    el.innerHTML = '<p style="color:var(--muted);font-size:13px">No staff records found.</p>';
    return;
  }

  const compByStaff = {};
  (completions || []).forEach(c => {
    if(!c.staff_id) return;
    if(!compByStaff[c.staff_id]) compByStaff[c.staff_id] = {};
    compByStaff[c.staff_id][c.module_id] = { score: c.score, date: c.completed_at };
  });

  const allMods = (typeof MODULES !== 'undefined') ? MODULES : [];
  const clinicianMods = allMods.filter(m => !m.adminOnly);
  const adminMods = allMods;
  const totalStaff = staff.length;
  const completeStaff = staff.filter(s => {
    const required = s.role === 'admin' ? adminMods.length : clinicianMods.length;
    return Object.keys(compByStaff[s.id]||{}).length >= required;
  }).length;

  const rows = staff.map((s,si) => {
    const comp = compByStaff[s.id] || {};
    const staffMods = s.role === 'admin' ? adminMods : clinicianMods;
    const done = Object.keys(comp).length;
    const total = staffMods.length;
    const pct = total ? Math.round((done/total)*100) : 0;
    const pillClass = done >= total ? 'all' : done > 0 ? 'some' : 'none';
    const pillText = done >= total ? '✓ Complete' : done + '/' + total;
    const dots = staffMods.map(m => {
      const c = comp[m.id];
      return '<div class="mdot ' + (c?'done':'todo') + '" title="' + (m.title||'') + (c?' — '+c.score+'%':'') + '"></div>';
    }).join('');
    const lastDate = Object.values(comp).sort((a,b)=>new Date(b.date)-new Date(a.date))[0]?.date;
    const dateStr = lastDate ? new Date(lastDate).toLocaleDateString() : '—';

    // Detail rows — one per module
    const detailRows = staffMods.map(m => {
      const c = comp[m.id];
      return '<tr class="detail-row" id="detail_' + si + '" style="display:none;background:var(--surface)">' +
        '<td style="padding:6px 12px 6px 32px;font-size:12px;color:var(--muted)">' + (m.icon||'📋') + ' ' + (m.title||m.id) + '</td>' +
        '<td></td>' +
        '<td>' + (c ? '<span style="font-size:11px;font-weight:600;color:var(--green)">✓ Done</span>' : '<span style="font-size:11px;color:var(--muted)">○ Pending</span>') + '</td>' +
        '<td style="font-size:12px;color:var(--muted)">' + (c ? '<span style="color:var(--teal);font-weight:500">' + c.score + '%</span>' : '—') + '</td>' +
        '<td style="font-size:12px;color:var(--muted)">' + (c ? new Date(c.date).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}) + ' at ' + new Date(c.date).toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'}) : '—') + '</td>' +
      '</tr>';
    }).join('');

    const mainRow = '<tr style="cursor:pointer" onclick="toggleDetail(' + si + ')">' +
      '<td style="font-weight:500">' +
        '<span id="chevron_' + si + '" style="display:inline-block;margin-right:6px;font-size:10px;color:var(--muted);transition:transform .15s">▶</span>' +
        (s.full_name||'—') +
      '</td>' +
      '<td><span style="font-size:11px;color:var(--muted)">' + (s.role||'clinician') + '</span></td>' +
      '<td><span class="progress-pill ' + pillClass + '">' + pillText + '</span></td>' +
      '<td><div style="display:flex;align-items:center;gap:8px"><div class="module-dots">' + dots + '</div><span style="font-size:11px;color:var(--muted)">' + pct + '%</span></div></td>' +
      '<td style="font-size:12px;color:var(--muted)">' + dateStr + '</td>' +
    '</tr>';

    return mainRow + detailRows;
  }).join('');

  el.innerHTML =
    '<div style="display:flex;gap:1rem;margin-bottom:1rem;flex-wrap:wrap">' +
      '<div style="padding:10px 16px;background:var(--teal-lt);border:0.5px solid var(--teal-md);border-radius:8px;font-size:13px"><strong style="color:var(--teal);font-size:18px">' + completeStaff + '/' + totalStaff + '</strong> <span style="color:var(--muted)">staff complete</span></div>' +
      '<div style="padding:10px 16px;background:var(--surface);border:0.5px solid var(--border);border-radius:8px;font-size:13px"><strong style="color:var(--navy);font-size:18px">' + (completions||[]).length + '</strong> <span style="color:var(--muted)">total completions</span></div>' +
      '<div style="padding:10px 16px;background:var(--gold-lt);border:0.5px solid var(--gold-md);border-radius:8px;font-size:13px"><strong style="color:var(--gold);font-size:18px">' + clinicianMods.length + '</strong> <span style="color:var(--muted)">required modules</span></div>' +
      '<div style="padding:10px 16px;background:var(--surface);border:0.5px solid var(--border);border-radius:8px;font-size:12px;color:var(--muted);display:flex;align-items:center">▶ Click any row to see individual module dates</div>' +
    '</div>' +
    '<div style="overflow-x:auto"><table class="staff-table" style="min-width:700px">' +
      '<thead><tr><th>Name</th><th>Role</th><th>Status</th><th>Modules</th><th>Last activity</th></tr></thead>' +
      '<tbody>' + rows + '</tbody>' +
    '</table></div>';
}

function toggleDetail(idx){
  const rows = document.querySelectorAll('#detail_' + idx);
  const chevron = document.getElementById('chevron_' + idx);
  const open = rows[0] && rows[0].style.display !== 'none';
  rows.forEach(r => r.style.display = open ? 'none' : 'table-row');
  if(chevron) chevron.style.transform = open ? '' : 'rotate(90deg)';
}


function showAddStaffForm(){
  document.getElementById('addStaffForm').style.display = 'block';
  document.getElementById('newName').focus();
}

function hideAddStaffForm(){
  document.getElementById('addStaffForm').style.display = 'none';
  ['newName','newEmail'].forEach(id => { const el = document.getElementById(id); if(el) el.value = ''; });
  const errEl = document.getElementById('addStaffError');
  if(errEl) errEl.style.display = 'none';
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
    const allMods = (typeof MODULES !== 'undefined') ? MODULES : [];
    const staffModList = s.role === 'admin' ? allMods : allMods.filter(m => !m.adminOnly);
    const compDots = staffModList.map(m => {
      const done = compMap[compKey] && compMap[compKey].has(m.id);
      return '<div class="mdot ' + (done?'done':'todo') + '" title="' + (m.title||'') + '"></div>';
    }).join('');
    const name = (s.full_name || '—').replace(/'/g, '&#39;');
    const email = s.email || '';
    const role = s.role || 'clinician';
    const active = s.active !== false;
    const sid = s.id;
    return '<tr>' +
      '<td style="font-weight:500">' + (s.full_name||'—') +
        ' <button onclick="editStaffName(\''+sid+'\',\''+name+'\' )" style="padding:2px 6px;font-size:10px;border:0.5px solid var(--border);border-radius:5px;background:transparent;cursor:pointer;color:var(--muted)">✏</button>' +
      '</td>' +
      '<td>' +
        '<span style="font-size:12px;color:var(--muted)">' + (email || '<em style="opacity:.5">not set</em>') + '</span>' +
        ' <button onclick="editStaffEmail(' + "'" + sid + "','" + name + "','" + email + "'" + ')" style="padding:2px 6px;font-size:10px;border:0.5px solid var(--border);border-radius:5px;background:transparent;cursor:pointer;color:var(--muted)">✏</button>' +
      '</td>' +
      '<td>' +
        '<span style="font-weight:500;color:' + (role==='admin'?'var(--gold)':'var(--teal)') + '">' + role + '</span>' +
        '<br><span style="font-size:10px;color:var(--muted)">' + (s.staff_type||'clinician') + '</span>' +
      '</td>' +
      '<td><span style="font-size:12px;font-weight:600;color:' + (active?'var(--green)':'var(--red)') + '">' + (active?'● Active':'○ Inactive') + '</span></td>' +
      '<td><div class="module-dots">' + compDots + '</div></td>' +
      '<td>' +
        '<div style="display:flex;gap:4px;align-items:center;flex-wrap:wrap">' +
          '<button class="btn sm" onclick="resetStaffPassword(' + "'" + sid + "','" + name + "','" + email + "'" + ')">Reset password</button>' +
          '<button class="btn sm" style="border-color:#7c3aed;color:#7c3aed" onclick="changeStaffType(' + "'" + sid + "','" + name + "','" + (s.staff_type||'clinician') + "'" + ')">⚙ Type</button>' +
          '<button class="btn sm" style="border-color:' + (active?'var(--red)':'var(--green)') + ';color:' + (active?'var(--red)':'var(--green)') + '" onclick="toggleStaffActive(' + "'" + sid + "'," + active + ')">' + (active?'Deactivate':'Reactivate') + '</button>' +

          (email ? '<button class="btn sm" style="border-color:var(--teal);color:var(--teal)" onclick="sendReminder(' + "'" + name + "','" + email + "'" + ')">📧 Remind</button>' : '') +
          '<button class="btn sm" style="border-color:var(--red);color:var(--red)" onclick="deleteStaffMember(' + "'" + sid + "','" + name + "'" + ')">Delete</button>' +
        '</div>' +
      '</td>' +
    '</tr>';
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
      body: JSON.stringify({ full_name: name, email: email || null, role, 
        staff_type: document.getElementById('newStaffType')?.value || 'clinician',
        active: true, company_id: currentProfile.company_id, pin: 'selko' })
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

async function resetStaffPassword(id, name, email){
  if(!email){ showToast('No email on file for ' + name + ' — add an email first'); return; }
  if(!confirm('Send password reset email to ' + name + ' at ' + email + '?')) return;
  const res = await fetch(
    SUPABASE_URL + '/auth/v1/recover',
    { method: 'POST',
      headers:{ 'apikey': SUPABASE_ANON, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email })
    }
  );
  if(res.ok){
    showToast('\u2713 Password reset email sent to ' + name);
  } else {
    showToast('Could not send reset — staff member may not have a login account yet');
  }
}
let stModalStaffId = null;
let stModalStaffName = null;

function changeStaffType(id, name, currentType){
  stModalStaffId = id;
  stModalStaffName = name;
  document.getElementById('stModalName').textContent = name;

  const options = [
    { value: 'clinician', label: 'Clinician', desc: 'All 6 clinical modules' },
    { value: 'office', label: 'Office / Admin staff', desc: 'HIPAA, Abuse & Neglect, Device Compliance' },
    { value: 'owner', label: 'Owner / Director', desc: 'All 7 modules including organizational compliance' }
  ];

  document.getElementById('stModalOptions').innerHTML = options.map(o => `
    <label style="display:flex;align-items:flex-start;gap:10px;padding:12px 14px;border:1.5px solid ${o.value===currentType?'var(--teal)':'var(--border)'};background:${o.value===currentType?'var(--teal-lt)':'var(--white)'};border-radius:10px;cursor:pointer">
      <input type="radio" name="stOption" value="${o.value}" ${o.value===currentType?'checked':''} style="margin-top:2px;accent-color:var(--teal)">
      <div>
        <div style="font-size:13px;font-weight:600;color:var(--navy)">${o.label}</div>
        <div style="font-size:11px;color:var(--muted);margin-top:1px">${o.desc}</div>
      </div>
    </label>
  `).join('');

  document.getElementById('staffTypeModal').style.display = 'flex';
}

function closeStaffTypeModal(){
  document.getElementById('staffTypeModal').style.display = 'none';
  stModalStaffId = null;
}

document.addEventListener('DOMContentLoaded', function(){
  const modal = document.getElementById('staffTypeModal');
  if(modal) modal.addEventListener('click', function(e){ if(e.target === modal) closeStaffTypeModal(); });
});

async function confirmStaffType(){
  const selected = document.querySelector('input[name="stOption"]:checked');
  if(!selected || !stModalStaffId) return;
  const newType = selected.value;

  const res = await fetch(
    SUPABASE_URL + '/rest/v1/compliance_staff?id=eq.' + stModalStaffId,
    { method: 'PATCH',
      headers:{ 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + (authToken || SUPABASE_ANON), 'Content-Type': 'application/json' },
      body: JSON.stringify({ staff_type: newType })
    }
  );

  closeStaffTypeModal();
  if(res.ok){ loadStaffTable(); showToast('✓ ' + stModalStaffName + ' updated'); }
  else { showToast('Error updating staff type'); }
}

async function editStaffName(id, currentName){
  const newName = prompt('Update name for ' + currentName + ':', currentName);
  if(!newName || newName === currentName) return;
  const res = await fetch(
    SUPABASE_URL + '/rest/v1/compliance_staff?id=eq.' + id,
    { method: 'PATCH',
      headers:{ 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + (authToken || SUPABASE_ANON), 'Content-Type': 'application/json' },
      body: JSON.stringify({ full_name: newName.trim() })
    }
  );
  if(res.ok){ loadStaffTable(); showToast('✓ Name updated to ' + newName.trim()); }
  else { showToast('Error updating name'); }
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

async function sendAllReminders(){
  const statusEl = document.getElementById('bulkReminderStatus');
  statusEl.style.display = 'block';
  statusEl.style.cssText = 'display:block;font-size:12px;padding:8px 12px;border-radius:8px;margin-bottom:1rem;background:var(--teal-lt);border:0.5px solid var(--teal-md);color:#0a6b58';
  statusEl.textContent = 'Loading staff list...';

  // Fetch all active staff with emails
  const res = await fetch(
    SUPABASE_URL + '/rest/v1/compliance_staff?company_id=eq.' + currentProfile.company_id + '&active=eq.true&select=full_name,email',
    { headers:{ 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + (authToken || SUPABASE_ANON) }}
  );
  const staff = await res.json();
  const withEmail = (staff || []).filter(s => s.email);

  if(!withEmail.length){
    statusEl.style.background = 'var(--red-lt)';
    statusEl.style.color = 'var(--red)';
    statusEl.textContent = 'No staff with email addresses found. Add emails in the staff list first.';
    return;
  }

  if(!confirm('Send training reminders to ' + withEmail.length + ' staff members with email addresses?')) {
    statusEl.style.display = 'none';
    return;
  }

  emailjs.init(EMAILJS_PUBLIC_KEY);
  let sent = 0, failed = 0;
  statusEl.textContent = 'Sending... 0/' + withEmail.length;

  for(const s of withEmail){
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        to_email: s.email,
        to_name: s.full_name,
        subject_line: 'Action Required — Complete Your Compliance Training',
        message_body: 'Please log in and complete your required compliance training modules at your earliest convenience.',
        tool_url: TOOL_URL,
        company_name: currentProfile.companies?.name || 'your organization'
      });
      sent++;
      statusEl.textContent = 'Sending... ' + sent + '/' + withEmail.length;
    } catch(e) {
      failed++;
      console.error('Failed for', s.email, e);
    }
  }

  if(failed === 0){
    statusEl.style.background = 'var(--green-lt)';
    statusEl.style.color = 'var(--green)';
    statusEl.textContent = '✓ Reminders sent to ' + sent + ' staff members';
    showToast('✓ Reminders sent to ' + sent + ' staff members');
  } else {
    statusEl.style.background = 'var(--gold-lt)';
    statusEl.style.color = '#92710a';
    statusEl.textContent = 'Sent ' + sent + ', failed ' + failed + '. Check EmailJS settings.';
  }
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


// ── SUPER ADMIN ──
let allCompanies = [];
let viewingAsCompany = null;

async function loadSuperAdminData(){
  // Load all companies
  const res = await fetch(
    SUPABASE_URL + '/rest/v1/companies?select=*&order=name',
    { headers:{ 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + (authToken || SUPABASE_ANON) }}
  );
  allCompanies = await res.json();

  // Load staff counts per company
  const staffRes = await fetch(
    SUPABASE_URL + '/rest/v1/compliance_staff?select=company_id',
    { headers:{ 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + (authToken || SUPABASE_ANON) }}
  );
  const allStaff = await staffRes.json();
  const staffCounts = {};
  (allStaff||[]).forEach(s => { staffCounts[s.company_id] = (staffCounts[s.company_id]||0) + 1; });

  // Load completion counts per company
  const compRes = await fetch(
    SUPABASE_URL + '/rest/v1/compliance_completions?select=company_id',
    { headers:{ 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + (authToken || SUPABASE_ANON) }}
  );
  const allComps = await compRes.json();
  const compCounts = {};
  (allComps||[]).forEach(c => { compCounts[c.company_id] = (compCounts[c.company_id]||0) + 1; });

  // Platform stats
  const totalStaff = Object.values(staffCounts).reduce((a,b)=>a+b,0);
  const totalComps = Object.values(compCounts).reduce((a,b)=>a+b,0);
  document.getElementById('platformStats').innerHTML = `
    <div style="text-align:center"><div style="font-size:22px;font-weight:700;color:var(--teal)">${allCompanies.length}</div><div style="font-size:11px;color:rgba(255,255,255,.45);text-transform:uppercase;letter-spacing:.06em">Companies</div></div>
    <div style="text-align:center"><div style="font-size:22px;font-weight:700;color:var(--teal)">${totalStaff}</div><div style="font-size:11px;color:rgba(255,255,255,.45);text-transform:uppercase;letter-spacing:.06em">Total staff</div></div>
    <div style="text-align:center"><div style="font-size:22px;font-weight:700;color:var(--teal)">${totalComps}</div><div style="font-size:11px;color:rgba(255,255,255,.45);text-transform:uppercase;letter-spacing:.06em">Completions</div></div>
  `;

  // Company cards
  const cards = document.getElementById('companyCards');
  cards.innerHTML = allCompanies.map(co => {
    const staff = staffCounts[co.id] || 0;
    const comps = compCounts[co.id] || 0;
    const planColor = co.plan==='pro'?'var(--gold)':co.plan==='enterprise'?'#7c3aed':'var(--teal)';
    const planLabel = (co.plan||'standard').toUpperCase();
    return `<div style="background:var(--white);border:0.5px solid var(--border);border-radius:12px;padding:1.25rem;position:relative">
      <div style="position:absolute;top:12px;right:12px;font-size:10px;font-weight:700;padding:3px 8px;border-radius:20px;background:${planColor}20;color:${planColor};border:0.5px solid ${planColor}">${planLabel}</div>
      <div style="font-size:15px;font-weight:600;color:var(--navy);margin-bottom:4px;padding-right:60px">${co.name}</div>
      <div style="font-size:12px;color:var(--muted);margin-bottom:.75rem">${staff} staff · ${comps} completions</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        <button class="btn sm primary" onclick="openCompanyDrawer('${co.id}')">⚙ Settings</button>
        <button class="btn sm" style="border-color:var(--gold);color:var(--gold)" onclick="viewAsAdmin('${co.id}')">👁 View as admin</button>
      </div>
    </div>`;
  }).join('');
}

function openCompanyDrawer(companyId){
  const co = allCompanies.find(c => c.id === companyId);
  if(!co) return;

  document.getElementById('drawerCompanyId').value = co.id;
  document.getElementById('drawerTitle').textContent = co.name + ' — Settings';
  document.getElementById('dCoName').value = co.name || '';
  document.getElementById('dCoPlan').value = co.plan || 'standard';
  document.getElementById('dCoLogo').value = co.logo_url || '';

  const contacts = co.custom_contacts || {};
  document.getElementById('dPrivacyOfficer').value = contacts.privacy_officer || '';
  document.getElementById('dPrivacyEmail').value = contacts.privacy_email || '';
  document.getElementById('dBackupContact').value = contacts.backup_contact || '';
  document.getElementById('dOrgEmail').value = contacts.org_email || '';

  const vars = co.custom_vars || {};
  document.getElementById('dState').value = vars.state || '';
  document.getElementById('dApsHotline').value = vars.aps_hotline || '';
  document.getElementById('dApsWebsite').value = vars.aps_website || '';
  document.getElementById('dSchedulingTool').value = vars.scheduling_tool || '';
  document.getElementById('dDevice').value = vars.device || '';
  document.getElementById('dMdm').value = vars.mdm || '';
  document.getElementById('dOshaRegion').value = vars.osha_region || '';
  document.getElementById('dWorkersComp').value = vars.workers_comp || '';

  document.getElementById('dBranding').checked = co.branding_enabled || false;
  document.getElementById('dHasCompliance').checked = co.has_compliance !== false;
  document.getElementById('dHasCred').checked = co.has_credtrack !== false;
  document.getElementById('dHasHep').checked = co.has_hep !== false;

  document.getElementById('drawerStatus').style.display = 'none';
  document.getElementById('companyDrawer').style.display = 'block';
  document.getElementById('companyDrawer').scrollIntoView({ behavior: 'smooth' });
}

function closeDrawer(){
  document.getElementById('companyDrawer').style.display = 'none';
}

async function saveCompanySettings(){
  const id = document.getElementById('drawerCompanyId').value;
  const statusEl = document.getElementById('drawerStatus');
  statusEl.style.display = 'none';

  const payload = {
    name: document.getElementById('dCoName').value.trim(),
    plan: document.getElementById('dCoPlan').value,
    logo_url: document.getElementById('dCoLogo').value.trim() || null,
    branding_enabled: document.getElementById('dBranding').checked,
    has_compliance: true, // always true for Comply clients
    has_credtrack: false, // coming soon
    has_hep: false, // coming soon
    custom_contacts: {
      privacy_officer: document.getElementById('dPrivacyOfficer').value.trim(),
      privacy_email: document.getElementById('dPrivacyEmail').value.trim(),
      backup_contact: document.getElementById('dBackupContact').value.trim(),
      org_email: document.getElementById('dOrgEmail').value.trim()
    },
    custom_vars: {
      state: document.getElementById('dState').value.trim(),
      aps_hotline: document.getElementById('dApsHotline').value.trim(),
      aps_website: document.getElementById('dApsWebsite').value.trim(),
      scheduling_tool: document.getElementById('dSchedulingTool').value.trim(),
      device: document.getElementById('dDevice').value.trim(),
      mdm: document.getElementById('dMdm').value.trim(),
      osha_region: document.getElementById('dOshaRegion').value.trim(),
      workers_comp: document.getElementById('dWorkersComp').value.trim()
    }
  };

  const res = await fetch(
    SUPABASE_URL + '/rest/v1/companies?id=eq.' + id,
    { method: 'PATCH',
      headers:{ 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + (authToken || SUPABASE_ANON), 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }
  );

  if(res.ok){
    statusEl.style.cssText = 'display:block;color:var(--green);font-size:12px;margin-top:8px';
    statusEl.textContent = '✓ Saved successfully';
    showToast('✓ ' + payload.name + ' settings saved');
    // Update local cache
    const idx = allCompanies.findIndex(c => c.id === id);
    if(idx >= 0) allCompanies[idx] = { ...allCompanies[idx], ...payload };
    loadSuperAdminData();
  } else {
    const errData = await res.json().catch(() => ({}));
    statusEl.style.cssText = 'display:block;color:var(--red);font-size:12px;margin-top:8px';
    statusEl.textContent = '✗ Save failed — ' + (errData.message || res.status);
    console.error('Save failed:', res.status, errData);
  }
}

async function uploadLogo(input){
  const file = input.files[0];
  if(!file) return;
  const companyId = document.getElementById('drawerCompanyId').value;
  const ext = file.name.split('.').pop();
  const path = 'logos/' + companyId + '.' + ext;

  showToast('Uploading logo...');

  // Upload to Supabase Storage
  const res = await fetch(
    SUPABASE_URL + '/storage/v1/object/company-assets/' + path,
    { method: 'POST',
      headers:{ 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + (authToken || SUPABASE_ANON), 'Content-Type': file.type, 'x-upsert': 'true' },
      body: file
    }
  );

  if(res.ok){
    const publicUrl = SUPABASE_URL + '/storage/v1/object/public/company-assets/' + path;
    document.getElementById('dCoLogo').value = publicUrl;
    showToast('✓ Logo uploaded — click Save changes to apply');
  } else {
    showToast('Logo upload failed — paste a URL instead');
  }
}

let originalProfile = null;

async function viewAsAdmin(companyId){
  const id = companyId || document.getElementById('drawerCompanyId').value;
  const co = allCompanies.find(c => c.id === id);
  if(!co) return;

  // Save original profile so we can exit cleanly
  if(!originalProfile) originalProfile = { ...currentProfile };

  viewingAsCompany = co;
  currentProfile = { ...currentProfile, company_id: co.id, companies: co };

  // Update topbar to show view-as banner
  showViewAsBanner(co.name);

  // Update welcome bar
  document.getElementById('welcomeSub').textContent = co.name + ' · Compliance training (viewing as admin)';

  showToast('Now viewing as ' + co.name + ' admin');
  closeDrawer();
  showTab('admin');
  renderAdminTable();
}

function showViewAsBanner(companyName){
  let banner = document.getElementById('viewAsBanner');
  if(!banner){
    banner = document.createElement('div');
    banner.id = 'viewAsBanner';
    banner.style.cssText = 'background:var(--gold);color:var(--navy);padding:8px 1.5rem;font-size:13px;font-weight:600;display:flex;align-items:center;justify-content:center;gap:10px;position:sticky;top:52px;z-index:49';
    document.querySelector('.topbar').insertAdjacentElement('afterend', banner);
  }
  banner.innerHTML = '👁 Viewing as <strong>' + companyName + '</strong> admin &nbsp;·&nbsp; <button onclick="exitViewAs()" style="background:var(--navy);color:#fff;border:none;border-radius:6px;padding:4px 12px;font-size:12px;font-weight:600;cursor:pointer">Exit view-as mode</button>';
  banner.style.display = 'flex';
}

function exitViewAs(){
  if(originalProfile){
    currentProfile = originalProfile;
    originalProfile = null;
  }
  viewingAsCompany = null;
  const banner = document.getElementById('viewAsBanner');
  if(banner) banner.style.display = 'none';
  document.getElementById('welcomeSub').textContent = (currentProfile.companies?.name || '') + ' · Compliance training';
  showToast('Returned to your own admin view');
  showTab('superadmin');
}

function autoSlug(name){
  const slug = name.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 30);
  const slugEl = document.getElementById('newCoSlug');
  const previewEl = document.getElementById('slugPreview');
  if(slugEl) slugEl.value = slug;
  if(previewEl) previewEl.textContent = slug || 'slug';
}

function toggleAdvanced(){
  const el = document.getElementById('advancedSettings');
  const btn = document.getElementById('advancedToggle');
  const open = el.style.display !== 'none';
  el.style.display = open ? 'none' : 'block';
  btn.textContent = open ? '▶ Show advanced settings — Pro client customization' : '▼ Hide advanced settings';
}

async function deleteCompany(){
  const id = document.getElementById('drawerCompanyId').value;
  const name = document.getElementById('dCoName').value;
  if(!confirm('Permanently delete ' + name + '?\n\nThis will remove the company and is NOT reversible. Any staff or completions tied to this company will be orphaned.\n\nType the company name to confirm in the next prompt.')) return;
  const confirmName = prompt('Type "' + name + '" to confirm deletion:');
  if(confirmName !== name){ showToast('Name did not match — deletion cancelled'); return; }

  const res = await fetch(
    SUPABASE_URL + '/rest/v1/companies?id=eq.' + id,
    { method: 'DELETE',
      headers:{ 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + (authToken || SUPABASE_ANON) }
    }
  );

  if(res.ok){
    closeDrawer();
    showToast('✓ ' + name + ' deleted');
    loadSuperAdminData();
  } else {
    const err = await res.json().catch(()=>({}));
    showToast('Delete failed — ' + (err.message || 'check for linked records'));
  }
}

function showAddCompany(){
  document.getElementById('addCompanyForm').style.display = 'block';
  document.getElementById('newCoName').focus();
}

async function saveNewCompany(){
  const name = document.getElementById('newCoName').value.trim();
  const slug = document.getElementById('newCoSlug').value.trim();
  const email = document.getElementById('newCoEmail').value.trim();
  const plan = document.getElementById('newCoPlan').value;
  const errEl = document.getElementById('newCoError');
  errEl.style.display = 'none';

  if(!name || !slug){ errEl.textContent = 'Name and slug are required.'; errEl.style.display = 'block'; return; }

  const res = await fetch(
    SUPABASE_URL + '/rest/v1/companies',
    { method: 'POST',
      headers:{ 'apikey': SUPABASE_ANON, 'Authorization': 'Bearer ' + (authToken || SUPABASE_ANON), 'Content-Type': 'application/json', 'Prefer': 'return=representation' },
      body: JSON.stringify({ name, slug, plan, admin_emails: email ? [email] : [], has_compliance: true, has_credtrack: false, has_hep: false, active: true })
    }
  );

  if(res.ok){
    document.getElementById('addCompanyForm').style.display = 'none';
    document.getElementById('newCoName').value = '';
    document.getElementById('newCoSlug').value = '';
    document.getElementById('newCoEmail').value = '';
    showToast('✓ ' + name + ' created');
    loadSuperAdminData();
  } else {
    const e = await res.json();
    errEl.textContent = e.message || 'Error creating company';
    errEl.style.display = 'block';
  }
}

// ── TEXT TO SPEECH ──
const ACRONYM_PRONUNCIATION = {
  'HIPAA': 'HIPPa',
  'OSHA': 'OH-sha',
  'PHI': 'P-H-I',
  'ePHI': 'E-P-H-I',
  'MRSA': 'MER-sa',
  'RACE': 'race',
  'PASS': 'pass',
  'FAST': 'fast',
  'TPO': 'T-P-O',
  'APS': 'A-P-S',
  'DHS': 'D-H-S',
  'EMS': 'E-M-S',
  'PPE': 'P-P-E',
  'CPR': 'C-P-R',
  'AED': 'A-E-D',
  'MDM': 'M-D-M',
  'SMS': 'S-M-S',
  'CMS': 'C-M-S',
  'HHS': 'H-H-S',
  'OCR': 'O-C-R',
  'DKA': 'D-K-A',
  'MDRO': 'M-D-R-O',
  'SSN': 'S-S-N',
  'DNR': 'D-N-R',
  'SOC': 'S-O-C',
  'TB': 'T-B',
  'MMR': 'M-M-R',
  'Tdap': 'T-dap',
  'VRE': 'V-R-E',
  'PEP': 'P-E-P',
  'CFR': 'C-F-R',
  'HAI': 'H-A-I',
  'HAIs': 'H-A-Is',
  'EMR': 'E-M-R',
  'EMRs': 'E-M-Rs',
  'NIOSH': 'NYE-osh',
  'BAA': 'B-A-A',
  'BAAs': 'B-A-As',
  'OK DHS': 'Oklahoma D-H-S'
};

function applyPronunciation(text){
  let out = text;
  for(const [acronym, pronunciation] of Object.entries(ACRONYM_PRONUNCIATION)){
    const regex = new RegExp('\\b' + acronym + '\\b', 'g');
    out = out.replace(regex, pronunciation);
  }
  return out;
}

function getSlideText(){
  if(!currentModule || currentSection >= currentModule.slides.length) return '';
  const s = currentModule.slides[currentSection];
  const tmp = document.createElement('div');
  tmp.innerHTML = s.title + '. ' + s.content;
  const rawText = tmp.textContent.replace(/[ \t\n]+/g,' ').trim();
  return applyPronunciation(rawText);
}

function toggleListen(){
  if(speechPlaying){ window.speechSynthesis.cancel(); speechPlaying=false; updateListenBtn(false); }
  else { startListen(); }
}

function getBestVoice(){
  const voices = window.speechSynthesis.getVoices();
  if(!voices.length) return null;

  // Priority order: best-sounding voices across platforms
  const priorityNames = [
    'Google US English',           // Chrome desktop/Android — best quality
    'Samantha',                    // iOS/macOS — high quality natural voice
    'Microsoft Aria Online',       // Windows/Edge — natural voice
    'Microsoft Jenny Online',
    'Microsoft Guy Online',
    'Karen', 'Moira', 'Tessa',     // Other natural Apple voices
  ];

  for(const name of priorityNames){
    const match = voices.find(v => v.name.includes(name));
    if(match) return match;
  }

  // Fallback: prefer non-local (cloud/network) en-US voices — usually better quality than on-device
  const networkVoice = voices.find(v => v.lang.startsWith('en-US') && !v.localService);
  if(networkVoice) return networkVoice;

  // Fallback: any en-US voice
  const usVoice = voices.find(v => v.lang.startsWith('en-US'));
  if(usVoice) return usVoice;

  // Fallback: any English voice
  return voices.find(v => v.lang.startsWith('en')) || voices[0];
}

function startListen(){
  if(!window.speechSynthesis) return;
  const text = getSlideText();
  speechUtterance = new SpeechSynthesisUtterance(text);
  speechUtterance.rate = speechRate; speechUtterance.pitch = 1.0;
  const v = getBestVoice();
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