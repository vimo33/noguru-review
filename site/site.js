// The site the film settles into: live record, five questions, guided start.
import {loadEvidence} from './pilot/data.js';

const $ = (s) => document.querySelector(s);
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- in-page jumps ---------- */
for (const a of document.querySelectorAll('[data-jump]')) {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({behavior: reduced ? 'auto' : 'smooth', block: 'start'});
  });
}

/* ---------- pinned trial button: after the film, until the Start section ---------- */
const pinned = $('#pinned'), film = $('#film'), start = $('#start');
function updatePinned() {
  const pastFilm = scrollY > film.offsetHeight - innerHeight * 0.35;
  const atStart = start.getBoundingClientRect().top < innerHeight * 0.75;
  pinned.classList.toggle('show', pastFilm && !atStart);
}
addEventListener('scroll', updatePinned, {passive: true});
addEventListener('resize', updatePinned);
updatePinned();

/* ---------- the record, live ---------- */
const fmtDate = (iso, withTime = false) => new Intl.DateTimeFormat('en-GB', {
  day: 'numeric', month: 'short', ...(withTime ? {hour: '2-digit', minute: '2-digit'} : {year: 'numeric'}), timeZone: 'UTC',
}).format(new Date(iso));
const pct = (v, d = 1) => `${v > 0 ? '+' : v < 0 ? '−' : ''}${Math.abs(v).toFixed(d)}%`;
function took(hours) {
  if (hours < 1) return `${Math.max(1, Math.round(hours * 60))} min`;
  if (hours < 48) return `${Math.round(hours)} h`;
  return `${Math.round(hours / 24)} days`;
}
async function showRecord() {
  const status = $('#ev-status'), body = $('#ev-body');
  const ev = await loadEvidence();
  if (ev.status === 'unavailable' || !ev.closed) {
    status.textContent = 'I can’t reach the published record right now, so I’m not showing any numbers. Try again in a moment.';
    status.classList.add('warn');
    const retry = document.createElement('button');
    retry.type = 'button'; retry.textContent = 'Try again'; retry.className = 'retry';
    retry.addEventListener('click', () => { status.textContent = 'Reading the record…'; status.classList.remove('warn'); showRecord(); });
    status.append(' ', retry);
    return;
  }
  $('#ev-pct').textContent = pct(ev.grossSinceStart);
  $('#ev-period').textContent = `${fmtDate(ev.windowStart)} – ${fmtDate(ev.windowEnd)}`;
  $('#ev-closed').textContent = ev.closed.toLocaleString('en-US');
  $('#ev-up').textContent = ev.up.toLocaleString('en-US');
  $('#ev-open').textContent = ev.open.toLocaleString('en-US');
  if (Number.isFinite(ev.openVsCost)) {
    const below = ev.openVsCost < 0;
    $('#ev-open-note').textContent = `still open, together ${Math.abs(ev.openVsCost).toFixed(1)}% ${below ? 'below' : 'above'} what they cost`;
    $('#q-open-now').textContent = `Right now ${ev.open} trades are still open, together ${Math.abs(ev.openVsCost).toFixed(1)}% ${below ? 'below' : 'above'} what they cost.`;
  }
  const fast = ev.durationSummary?.under24hPct;
  $('#ev-fast').textContent = Number.isFinite(fast) ? `${Math.round(fast)}%` : '—';

  const mean = ev.rows.reduce((sum, r) => sum + r.pct, 0) / ev.rows.length;
  $('#ev-avg').textContent = `Across all ${ev.closed.toLocaleString('en-US')} finished trades, the average result was ${pct(mean, 1)} on the money in that trade.`;
  const list = $('#ev-list'); list.textContent = '';
  [...ev.rows].sort((a, b) => (a.closedAt < b.closedAt ? 1 : -1)).slice(0, 6).forEach((row) => {
    const li = document.createElement('li');
    const hours = (Date.parse(row.closedAt) - Date.parse(row.openedAt)) / 3600000;
    const r = document.createElement('b'); r.textContent = pct(row.pct, 2); if (row.pct < 0) r.className = 'neg';
    const t = document.createElement('span'); t.textContent = `took ${took(hours)} · ${row.rungs} ${row.rungs === 1 ? 'buy' : 'buys'}`;
    const d = document.createElement('time'); d.dateTime = row.closedAt; d.textContent = `${fmtDate(row.closedAt, true)} UTC`;
    li.append(r, t, d); list.append(li);
  });

  const stale = ev.status === 'stale';
  status.textContent = stale
    ? `The published record stops at ${fmtDate(ev.windowEnd)}, so these numbers may be out of date.`
    : `Read just now. Record covers up to ${fmtDate(ev.windowEnd)}; latest finished trade ${fmtDate(ev.latestClose, true)} UTC.`;
  status.classList.toggle('warn', stale);
  body.hidden = false;
}
showRecord();

/* ---------- questions: one open at a time ---------- */
const qs = [...document.querySelectorAll('.q-list details')];
qs.forEach((d) => d.addEventListener('toggle', () => { if (d.open) qs.forEach((o) => { if (o !== d) o.open = false; }); }));

/* ---------- guided start ---------- */
const LINKS = {
  terms: 'https://cornix.io/terms/',
  register: 'https://dashboard.cornix.io/register',
  trial: 'https://t.me/NoGuruMembers_bot?start=trial_cornixpage',
  demo: 'https://help.cornix.io/en/articles/9853159-demo-accounts-risk-free-trading',
  exchanges: 'https://help.cornix.io/en/articles/5814836-supported-exchanges',
  connect: 'https://help.cornix.io/en/articles/11892628-getting-started-with-cornix',
  signals: 'https://help.cornix.io/en/articles/8800211-how-to-create-a-signals-bot-a-step-by-step-guide',
};
const check = {
  title: 'First, check you can use it',
  say: 'Cornix places the orders, and it doesn’t serve every country. The US, the UK and Canada are among those it excludes.',
  note: 'If your country is on the list, stop here. I’d rather you knew now.',
  open: ['Read Cornix’s rules', LINKS.terms],
};
const cornix = {
  title: 'Open a Cornix account',
  say: 'Cornix is the service that carries out my instructions. Signing up is free and asks for no card.',
  open: ['Open Cornix', LINKS.register],
};
const trial = {
  title: 'Start your NoGuru trial',
  say: 'This happens in Telegram. You get 14 days free, no card, and an invitation to the private channel where I post what to buy and sell.',
  note: 'One trial per Telegram account. Note the end date it shows you.',
  open: ['Start the trial in Telegram', LINKS.trial],
};
const PATHS = {
  demo: {
    label: 'Pretend money',
    steps: [
      check, cornix, trial,
      {
        title: 'Follow me with pretend money',
        say: 'In Cornix, switch to its demo account and create a Signals Bot that follows the NoGuru channel. From then on it copies my trades with simulated funds.',
        note: 'Heads-up: Cornix’s own 14 free days begin with your first trade, and a demo trade counts.',
        open: ['Open the demo instructions', LINKS.demo],
      },
      {
        title: 'Now watch it work',
        say: 'Trades will appear in Cornix as my signals arrive. Give it a few days: you’ll see it buy in steps, wait, and sell.',
        note: 'A demo shows how the bot behaves. It can’t show how real orders fill on your exchange.',
        done: ['I’m ready to go live', 'live'],
      },
    ],
  },
  live: {
    label: 'Go live',
    steps: [
      check,
      {
        title: 'Set aside a separate exchange account',
        say: 'Use a sub-account that holds only the money you want me to trade. NoGuru suggests about 3,000 USDT so there is room to buy in steps.',
        note: 'Only use money you can leave alone for months.',
        open: ['See which exchanges work', LINKS.exchanges],
      },
      cornix,
      {
        title: 'Connect your exchange to Cornix',
        say: 'Create a key at your exchange that allows spot trading, with withdrawals switched off, and give it to Cornix. That is what lets it trade but never move your money out.',
        note: 'The key goes into Cornix only. Never paste it here or send it to anyone.',
        open: ['Open Cornix’s setup guide', LINKS.connect],
      },
      trial,
      {
        title: 'Tell Cornix to follow me',
        say: 'In Cornix, create a Signals Bot on your connected account and point it at the NoGuru channel. Use the settings posted in the channel.',
        note: 'Cornix’s own 14 free days begin with your first trade.',
        open: ['Open the Signals Bot guide', LINKS.signals],
      },
      {
        title: 'You’re live. Now let it work',
        say: 'The first buys arrive as signals come in. You can watch every order in Cornix and in your exchange, and stop it whenever you like.',
        note: 'Stopping new trades does not sell what you already hold. Write down both trial end dates.',
      },
    ],
  },
};
const KEY = 'noguru-start-v1';
const store = {
  read() { try { const v = JSON.parse(localStorage.getItem(KEY)); return v && PATHS[v.path] ? v : null; } catch { return null; } },
  write(v) { try { v ? localStorage.setItem(KEY, JSON.stringify(v)) : localStorage.removeItem(KEY); } catch { /* private mode */ } },
};
const ui = {
  choose: $('#choose'), walk: $('#walk'), pos: $('#walk-pos'), dots: $('#walk-dots'), title: $('#walk-title'), say: $('#walk-say'),
  note: $('#walk-note'), open: $('#walk-open'), next: $('#walk-next'), back: $('#walk-back'), reset: $('#walk-reset'),
};
let state = store.read();
function render(focus = false) {
  const on = Boolean(state);
  ui.choose.hidden = on; ui.walk.hidden = !on;
  if (!on) return;
  const path = PATHS[state.path], n = path.steps.length;
  state.step = Math.min(Math.max(0, state.step), n - 1);
  const step = path.steps[state.step], last = state.step === n - 1;
  ui.pos.textContent = `${path.label} · step ${state.step + 1} of ${n}`;
  ui.dots.textContent = '';
  path.steps.forEach((_, i) => { const d = document.createElement('i'); if (i < state.step) d.className = 'done'; if (i === state.step) d.className = 'now'; ui.dots.append(d); });
  ui.title.textContent = step.title; ui.say.textContent = step.say;
  ui.note.textContent = step.note || ''; ui.note.hidden = !step.note;
  ui.open.hidden = !step.open;
  if (step.open) { ui.open.textContent = `${step.open[0]} ↗`; ui.open.href = step.open[1]; }
  ui.next.hidden = last && !step.done;
  ui.next.firstChild.textContent = last && step.done ? `${step.done[0]} ` : 'Done, next ';
  ui.back.hidden = state.step === 0;
  store.write(state);
  if (focus) ui.title.focus({preventScroll: true});
}
document.querySelectorAll('.path').forEach((b) => b.addEventListener('click', () => { state = {path: b.dataset.path, step: 0}; render(true); }));
ui.next.addEventListener('click', () => {
  const path = PATHS[state.path], step = path.steps[state.step];
  if (state.step === path.steps.length - 1 && step.done) state = {path: step.done[1], step: 1}; // country already checked
  else state.step += 1;
  render(true);
});
ui.back.addEventListener('click', () => { state.step -= 1; render(true); });
ui.reset.addEventListener('click', () => { state = null; store.write(null); render(); });
render();

/* ---------- sections reveal piece by piece as they come into view ---------- */
if (!reduced && 'IntersectionObserver' in window) {
  const groups = [
    ['#evidence', '.eyebrow, h2, .sec-lede, .ev-status, .ev-hero, .ev-grid > div, h3, .ev-avg, .ev-list, .ev-note'],
    ['#questions', '.q-head, .q-list details'],
    ['#start', '.start-robot, .eyebrow, h2, .choose > *, .walk'],
  ];
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  }, {rootMargin: '0px 0px -12% 0px', threshold: 0.08});
  for (const [root, sel] of groups) {
    let i = 0, lastTop = -1;
    for (const node of document.querySelectorAll(`${root} :is(${sel})`)) {
      // pieces on the same row follow each other; a new row starts the rhythm again
      const top = Math.round(node.getBoundingClientRect().top);
      i = Math.abs(top - lastTop) < 4 ? i + 1 : 0; lastTop = top;
      node.classList.add('reveal'); node.style.transitionDelay = `${Math.min(i, 5) * 90}ms`;
      io.observe(node);
    }
  }
}
