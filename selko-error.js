/* Selko shared error logger
 *
 * Writes to the existing error_logs table — no migration needed.
 * Rich detail is packed as JSON into the `context` text column.
 *
 * Usage, once per app, after the Supabase client exists:
 *
 *   import { initErrorLogging, logError, breadcrumb } from './selko-error.js';
 *   initErrorLogging({ app: 'cred', supabase });
 *
 * The `app` value is explicit on purpose. Inferring it from the hostname is
 * what produced the untagged rows on the board.
 */

let CFG = { app: 'unknown', supabase: null, companyId: null, debug: false };
let READY = false;

const TRAIL = [];          // recent activity, newest last
const SEEN = new Map();    // dedupe key -> timestamp
const MAX_TRAIL = 12;
const DEDUPE_MS = 5000;    // three identical rejections in one second = one row

/* ---------- breadcrumbs ---------- */

export function breadcrumb(kind, detail) {
  TRAIL.push({
    t: new Date().toISOString().slice(11, 19),
    kind,
    detail: String(detail).slice(0, 200)
  });
  while (TRAIL.length > MAX_TRAIL) TRAIL.shift();
}

/* Wrapping fetch is the point of this whole file: "Load failed" on its own
 * tells you nothing, but "Load failed while fetching credtrack_staff" does. */
function wrapFetch() {
  if (typeof window === 'undefined' || window.__selkoFetchWrapped) return;
  const original = window.fetch;
  window.__selkoFetchWrapped = true;

  window.fetch = async function (...args) {
    const url = typeof args[0] === 'string' ? args[0] : (args[0] && args[0].url) || '';
    const short = shortenUrl(url);
    try {
      const res = await original.apply(this, args);
      if (!res.ok) breadcrumb('fetch', `${res.status} ${short}`);
      return res;
    } catch (err) {
      // This is the case that produced "TypeError: Load failed"
      breadcrumb('fetch-failed', short);
      throw err;
    }
  };
}

/* Trim Supabase URLs down to the useful part: the table or function name. */
function shortenUrl(url) {
  if (!url) return '(no url)';
  try {
    const u = new URL(url, location.href);
    let p = u.pathname
      .replace('/rest/v1/', '')
      .replace('/functions/v1/', 'fn:')
      .replace('/storage/v1/object/', 'storage:');
    // Supabase project ref adds noise; it's the same project everywhere.
    if (u.hostname !== location.hostname && !u.hostname.includes('supabase')) {
      p = u.hostname.split('.')[0] + ' ' + p;
    }
    return (p + u.search).slice(0, 160);
  } catch (_) {
    return String(url).slice(0, 160);
  }
}

/* ---------- writing ---------- */

async function currentUser() {
  try {
    const { data } = await CFG.supabase.auth.getUser();
    return data && data.user ? data.user : null;
  } catch (_) {
    return null;
  }
}

export async function logError(type, message, extra = {}) {
  if (!READY || !CFG.supabase) return;

  const msg = String(message || '').slice(0, 500);

  // Collapse identical bursts — one page load firing three parallel requests
  // that all fail should be one row, not three.
  const key = `${type}|${msg}`;
  const now = Date.now();
  const last = SEEN.get(key);
  if (last && now - last < DEDUPE_MS) return;
  SEEN.set(key, now);

  const user = await currentUser();

  const context = {
    app: CFG.app,
    path: location.pathname + (location.hash || ''),
    online: navigator.onLine,
    // Offline is the single most likely explanation for a failed fetch on a
    // tablet in the field. Tag it rather than dropping it — a clinician whose
    // device drops constantly is itself worth knowing about.
    offline_at_error: !navigator.onLine,
    screen: `${window.innerWidth}x${window.innerHeight}`,
    ua: navigator.userAgent.slice(0, 180),
    trail: TRAIL.slice(-8),
    ...extra
  };

  const row = {
    company_id: CFG.companyId || null,
    user_email: (user && user.email) || null,
    error_type: type,
    error_message: msg,
    context: JSON.stringify(context).slice(0, 4000),
    url: location.href.slice(0, 500),
    source_app: CFG.app
  };

  try {
    // Bypass the wrapped fetch so a logging failure can't recurse.
    const { error } = await CFG.supabase.from('error_logs').insert(row);
    if (error && CFG.debug) console.warn('[selko-error] insert failed', error);
  } catch (err) {
    if (CFG.debug) console.warn('[selko-error] could not log', err);
  }
}

/* ---------- setup ---------- */

export function initErrorLogging({ app, supabase, companyId = null, debug = false }) {
  if (!app) throw new Error('initErrorLogging needs an app name');
  if (!supabase) throw new Error('initErrorLogging needs the Supabase client');

  CFG = { app, supabase, companyId, debug };
  READY = true;

  wrapFetch();

  window.addEventListener('unhandledrejection', ev => {
    const r = ev.reason;
    const msg = (r && (r.message || r.error_description || r.msg)) || String(r);
    logError('promise_rejection', msg, {
      stack: r && r.stack ? String(r.stack).split('\n').slice(0, 4).join(' | ') : null
    });
  });

  window.addEventListener('error', ev => {
    if (ev.message) {
      logError('window_error', ev.message, {
        at: ev.filename ? `${shortenUrl(ev.filename)}:${ev.lineno}:${ev.colno}` : null
      });
    }
  }, true);

  // Losing and regaining connectivity explains most field failures.
  window.addEventListener('offline', () => breadcrumb('network', 'went offline'));
  window.addEventListener('online', () => breadcrumb('network', 'back online'));

  breadcrumb('init', `${app} loaded`);
}

/* Call from a catch block when you already know what broke. */
export function logCaught(where, err) {
  logError('caught', (err && err.message) || String(err), { where });
}
