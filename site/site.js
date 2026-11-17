// The home page below the hero: live record, six questions, guided start.
import {record, reloadRecord} from './record.js';
import {homeRecord, fmtDate} from './home-record.js';
import {applyCampaign} from './campaign.js';
applyCampaign();

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
const pinned = $('#pinned'), hero = $('#hero'), start = $('#start');
function updatePinned() {
  const pastFilm = scrollY > hero.offsetHeight * 0.65;
  const atStart = start.getBoundingClientRect().top < innerHeight * 0.75;
  const onPage = scrollY > hero.offsetHeight - 80;
  $('#topbar').classList.toggle('solid', onPage);
  $('#topbar').classList.toggle('over', !onPage && scrollY > 24);   // scrolling within the hero: keep the bar readable
  pinned.classList.toggle('show', pastFilm && !atStart);
}
addEventListener('scroll', updatePinned, {passive: true});
addEventListener('resize', updatePinned);
updatePinned();

/* ---------- the record, live ---------- */
async function showRecord(source = record) {
  const status = $('#ev-status'), body = $('#ev-body');
  const ev = await source;
  if (ev.status === 'unavailable' || !ev.closed) {
    status.textContent = 'I can’t reach the published record right now, so I’m not showing any numbers. Try again in a moment.';
    status.classList.add('warn');
    const retry = document.createElement('button');
    retry.type = 'button'; retry.textContent = 'Try again'; retry.className = 'retry';
    retry.addEventListener('click', () => { status.textContent = 'Reading the record…'; status.classList.remove('warn'); showRecord(reloadRecord()); });
    status.append(' ', retry);
    return;
  }
  const {texts, latest} = homeRecord(ev);
  for (const [id, value] of Object.entries(texts)) { const node = document.getElementById(id); if (node) node.textContent = value; }
  const list = $('#ev-list'); list.textContent = '';
  for (const row of latest) {
    const li = document.createElement('li');
    const r = document.createElement('b'); r.textContent = row.result; if (row.below) r.className = 'neg';
    const t = document.createElement('span'); t.textContent = row.detail;
    const d = document.createElement('time'); d.dateTime = row.dateTime; d.textContent = row.when;
    li.append(r, t, d); list.append(li);
  }

  const stale = ev.status === 'stale';
  status.textContent = stale
    ? `The published record stops at ${fmtDate(ev.windowEnd)}, so these numbers may be out of date.`
    : `Read just now. Record covers up to ${fmtDate(ev.windowEnd)}; latest finished trade ${fmtDate(ev.latestClose, true)} UTC.`;
  status.classList.toggle('warn', stale);
  body.hidden = false; $('#trades').hidden = false;
}
showRecord();

/* ---------- questions: one open at a time ---------- */
const qs = [...document.querySelectorAll('.q-list details')];
qs.forEach((d) => d.addEventListener('toggle', () => { if (d.open) qs.forEach((o) => { if (o !== d) o.open = false; }); }));

/* ---------- sign-up links ----------
   Every sign-up link is NoGuru's own referral link. Cornix goes through NoGuru's tracked redirect.
   The exchange links come from NoGuru's list: they are written into the page when the site is built
   and refreshed here. A link with an address is an affiliate link and carries a visible "Ad" label
   before the click; an entry without one is shown as plain text. */
const AFFILIATES = 'https://noguru.io/data/affiliates.json';
const httpsUrl = (value) => { try { const u = new URL(value); return u.protocol === 'https:' ? u.href : null; } catch { return null; } };
function adLink(name, url, event) {
  const frag = document.createDocumentFragment(), label = document.createElement('span'), a = document.createElement('a');
  label.className = 'adlabel'; label.textContent = 'Ad';
  a.href = url; a.target = '_blank'; a.rel = 'sponsored noopener noreferrer'; a.dataset.event = event; a.dataset.umamiEvent = event;
  a.textContent = `${name} `; const arrow = document.createElement('span'); arrow.setAttribute('aria-hidden', 'true'); arrow.textContent = '↗'; a.append(arrow);
  frag.append(label, a);
  return frag;
}
async function refreshExchanges() {
  let links;
  try {
    const res = await fetch(AFFILIATES, {cache: 'no-store', headers: {Accept: 'application/json'}});
    links = (await res.json()).links;
    if (!res.ok || !Array.isArray(links)) return;
  } catch { return; }       // the list written in at build time stays
  const exchanges = links.filter((l) => l && typeof l.name === 'string' && /^exchange/.test(l.kind || ''));
  if (!exchanges.length) return;
  const list = $('#su-exchanges'); list.replaceChildren();
  for (const ex of [...exchanges].sort((x, y) => Number(!!y.recommended) - Number(!!x.recommended))) {
    const li = document.createElement('li'), url = httpsUrl(ex.url), head = document.createElement('p');
    if (url) head.append(adLink(ex.name, url, `signup-exchange-${ex.key}`)); else { const b = document.createElement('b'); b.textContent = ex.name; head.append(b); }
    if (ex.recommended) { const r = document.createElement('i'); r.className = 'su-rec'; r.textContent = 'Our recommendation'; head.append(' ', r); }
    li.append(head);
    if (typeof ex.blurb === 'string' && ex.blurb) { const blurb = document.createElement('p'); blurb.className = 'su-blurb'; blurb.textContent = ex.blurb; li.append(blurb); }
    if (ex.free_month && url) { const offer = document.createElement('p'); offer.className = 'su-offer'; offer.textContent = 'One free month of NoGuru.'; li.append(offer); }
    list.append(li);
  }
}
refreshExchanges();
try { localStorage.removeItem('noguru-start-v1'); } catch { /* private mode */ }   // the earlier step-by-step guide kept its place here

/* ---------- sections reveal piece by piece as they come into view ---------- */
if (!reduced && 'IntersectionObserver' in window) {
  const groups = [
    ['#evidence', '.eyebrow, h2, .sec-lede, .ev-status, .ev-hero, .ev-grid > div'],
    ['#trades', '.eyebrow, h2, .sec-lede, .ev-list, .ev-note'],
    ['#questions', '.q-head, .q-list details, .q-more'],
    ['#start', '.eyebrow, h2, .choose > :not(.signup), .signup > li'],
    ['#expect', '.eyebrow, h2, .expect-list li, .expect-take, .button'],
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

/* ---------- menu: closes after a choice or a tap elsewhere ---------- */
const menu = $('#menu');
menu.addEventListener('click', (e) => { if (e.target.closest('a')) menu.open = false; });
document.addEventListener('click', (e) => { if (menu.open && !menu.contains(e.target)) menu.open = false; });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') menu.open = false; });
