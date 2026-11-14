// Reading pages of the one NoGuru site: library, academy, glossary, digest, pricing, legal, market context.
// Content and its renderer are shared modules; this file is only the frame and the routing.
import {learningPages} from '../pilot/learning.js';
import {renderReadingPage} from '../pilot/reading-ui.js';
import {loadEvidence, paybackCapital} from '../pilot/data.js';
import {createDashboardController} from '../dashboard.js';

const $ = (s) => document.querySelector(s);
const text = (s, v) => { $(s).textContent = v; };
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Places that used to be steps of the old click-through guide now live on the home page.
const HOME = {story: '../', evidence: '../#evidence', setup: '../#start'};
const DEFAULT = 'library';

function parse(value) {
  try {
    const here = new URL(location.href), url = new URL(value, here);
    if (url.origin !== here.origin || url.pathname !== here.pathname) return null;
    const page = url.searchParams.get('page') || DEFAULT;
    let anchor = ''; try { anchor = decodeURIComponent(url.hash.slice(1)); } catch { /* malformed hash */ }
    return {page, anchor};
  } catch { return null; }
}
const known = (page) => page === 'market' || Object.hasOwn(learningPages, page);
const safeExternal = (value) => { try { const u = new URL(value); return u.protocol === 'https:' ? u.href : null; } catch { return null; } };

function externalLink(label, value) {
  const href = safeExternal(value); if (!href) return null;
  const a = document.createElement('a'); a.href = href; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.textContent = `${label} ↗`;
  return a;
}
// Every link inside the content goes through here, so nothing leads back to the old version.
function contentLink(label, value) {
  const route = typeof value === 'string' && value.startsWith('?') ? parse(value) : null;
  if (route) {
    const a = document.createElement('a'); a.textContent = label;
    if (HOME[route.page]) { a.href = HOME[route.page]; return a; }
    if (!known(route.page)) return null;
    a.href = `?page=${route.page}${route.anchor ? `#${route.anchor}` : ''}`; a.dataset.route = '';
    return a;
  }
  return externalLink(label, value);
}

/* ---------- market dashboard lifecycle ---------- */
const marketDashboard = createDashboardController($('#market-dashboard'));
// Inspection only: the shared reading router remains the navigation authority.
window.NoGuruDashboard = marketDashboard;
addEventListener('pageshow', () => {
  if (document.body.dataset.page === 'market') marketDashboard.start();
});

/* ---------- reading pages ---------- */
// Pricing: the pay-back figure comes from the live record, never from a typed-in number.
const FEE = 49, CORNIX = 49.9, SUGGESTED = 3000;
const day = (iso) => new Intl.DateTimeFormat('en-GB', {day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC'}).format(new Date(`${iso}T00:00:00Z`));
const usd = (n) => `$${Math.round(n).toLocaleString('en-US')}`;
let recordOnce = null;
async function fillPayback() {
  const card = document.querySelector('#learning-cards .plan-card:nth-child(2)'), section = document.getElementById('learning-payback');
  if (!card) return;
  const price = card.querySelector('.plan-price'), body = card.querySelector('.plan-description');
  const ev = await (recordOnce ||= loadEvidence());
  if (document.body.dataset.page !== 'pricing' || !card.isConnected) return;
  const rate = Number.isFinite(ev.allocMonthly) ? ev.allocMonthly : ev.grossMonthly, need = paybackCapital(FEE, rate);
  if (ev.status === 'unavailable' || !need) {
    recordOnce = null; price.firstChild.textContent = '—';
    body.textContent = 'I can’t reach the public record right now, so I’m not showing a figure. It is the monthly price divided by the record’s monthly pace.';
    return;
  }
  const pace = `${rate.toFixed(1)}% a month on the money set aside for it`, period = `${day(ev.windowStart)} to ${day(ev.windowEnd)}, before fees`;
  price.firstChild.textContent = usd(need);
  body.textContent = `The record’s pace is about ${pace} (${period}). At that pace, ${usd(need)} earns about $${FEE} a month. Anything above it is yours.`;
  if (!section) return;
  const live = document.createElement('p'); live.className = 'learning-example';
  live.textContent = `Today: $${FEE} ÷ ${rate.toFixed(2)}% = ${usd(FEE / (rate / 100))}, rounded up to ${usd(need)}. `
    + `Counting a Cornix plan at $${CORNIX.toFixed(2)} a month as well, the figure is about ${usd(paybackCapital(FEE + CORNIX, rate))}. `
    + `For scale, about ${rate.toFixed(1)}% a month on the suggested ${SUGGESTED.toLocaleString('en-US')} USDT would be about ${usd(SUGGESTED * rate / 100)} a month at the same pace, before exchange fees. `
    + `${ev.status === 'stale' ? 'The record is out of date, so treat this as an older reading. ' : ''}A pace from the past, not a forecast.`;
  (section.querySelector('.learning-source-links') || section.lastElementChild).before(live);
}

function crumbFor(page) {
  if (page.startsWith('academy-')) return ['← Academy', '?page=academy'];
  if (page.startsWith('digest-')) return ['← Digest', '?page=digest'];
  if (page === DEFAULT) return ['← Home', '../'];
  return ['← Library', '?page=library'];
}
// The link at the top goes back to wherever the reader actually came from. Only someone who landed
// here directly gets the fixed parent page instead.
const NAMES = {library: 'Library', academy: 'Academy', glossary: 'Glossary', digest: 'Digest', pricing: 'Pricing', 'how-it-works': 'How it works', faq: 'FAQ', risks: 'Risks', market: 'Market context', trial: 'The free trials', learn: 'Learn'};
const cameFromSite = (() => { try { return !!document.referrer && new URL(document.referrer).origin === location.origin; } catch { return false; } })();
function setCrumb(crumb, label, href) {
  const from = history.state?.from, back = from !== undefined || (cameFromSite && history.length > 1);
  crumb.textContent = back ? (from ? `← Back to ${from}` : '← Back') : label;
  crumb.setAttribute('href', href);
  if (back) { crumb.dataset.back = ''; delete crumb.dataset.route; }
  else { delete crumb.dataset.back; if (href.startsWith('?')) crumb.dataset.route = ''; else delete crumb.dataset.route; }
}
function renderLearning(page) {
  const data = learningPages[page];
  text('#learning-eyebrow', data.eyebrow || ''); text('#learning-title', data.title); text('#learning-intro', data.intro || '');
  $('#learning-search').value = ''; $('#learning-page .reading-tools').open = false; text('#search-status', '');
  renderReadingPage(data, {page, sections: $('#learning-sections'), toc: $('#learning-toc'), cards: $('#learning-cards'), source: $('#learning-source'), link: contentLink});
  // Content images are stored beside the content modules.
  for (const img of document.querySelectorAll('#learning-page img')) { const src = img.getAttribute('src') || ''; const at = src.indexOf('assets/migrated/'); if (at >= 0 && !src.includes('/pilot/')) img.setAttribute('src', `../pilot/${src.slice(at)}`); }
  setCrumb($('#crumb'), ...crumbFor(page));
  $('#learning-page .reading-tools').hidden = (data.sections || []).length < 4;
  if (page === 'pricing') fillPayback();
}
$('#learning-search').addEventListener('input', (e) => {
  const q = e.target.value.trim().toLowerCase(); let shown = 0;
  for (const s of document.querySelectorAll('#learning-sections .learning-section')) { const hit = !q || s.dataset.search.includes(q); s.hidden = !hit; if (hit) shown += 1; }
  text('#search-status', q ? `${shown} ${shown === 1 ? 'section mentions' : 'sections mention'} “${e.target.value.trim()}”.` : '');
});

function show(route, {push = false, focus = false} = {}) {
  if (HOME[route.page]) { marketDashboard.stop(); location.replace(HOME[route.page]); return; }
  if (!known(route.page)) route = {page: DEFAULT, anchor: ''};
  const isMarket = route.page === 'market';
  // the new history entry remembers the page it was opened from, so its back link can name it
  if (push) {
    const href = `?page=${route.page}${route.anchor ? `#${route.anchor}` : ''}`;
    // Dashboard section jumps keep the reader's original predecessor and Back destination.
    if (isMarket && route.anchor && document.body.dataset.page === 'market') history.replaceState(history.state, '', href);
    else history.pushState(route.page === document.body.dataset.page ? history.state : {from: NAMES[document.body.dataset.page] || ''}, '', href);
  }
  $('#learning-page').hidden = isMarket; $('#market-page').hidden = !isMarket;
  document.body.dataset.page = route.page;
  if (isMarket) { marketDashboard.start(); setCrumb($('#market-crumb'), '← The record', '../#evidence'); } else { marketDashboard.stop(); renderLearning(route.page); }
  const title = isMarket ? 'Market context' : learningPages[route.page].title;
  document.title = `${title} — NoGuru`;
  for (const a of document.querySelectorAll('.bar a[data-route], .read-foot a[data-route]')) {
    if (parse(a.getAttribute('href'))?.page === route.page) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  }
  const target = route.anchor && (document.getElementById(`learning-${route.anchor}`) || document.getElementById(route.anchor));
  if (target) target.scrollIntoView({behavior: reduced ? 'auto' : 'smooth', block: 'start'});
  else if (push || focus) scrollTo(0, 0);
  if (focus && !target) $(isMarket ? '#market-title' : '#learning-title').focus({preventScroll: true});
}
document.addEventListener('click', (e) => {
  const back = e.target.closest('a[data-back]');
  if (back && !(e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)) { e.preventDefault(); history.back(); return; }
  const a = e.target.closest('a[data-route]');
  if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const route = parse(a.getAttribute('href')); if (!route) return;
  e.preventDefault(); show(route, {push: true, focus: true});
});
addEventListener('popstate', () => show(parse(location.href) || {page: DEFAULT, anchor: ''}));
show(parse(location.href) || {page: DEFAULT, anchor: ''});

/* ---------- menu: closes after a choice or a tap elsewhere ---------- */
const menu = $('#menu');
menu.addEventListener('click', (e) => { if (e.target.closest('a')) menu.open = false; });
document.addEventListener('click', (e) => { if (menu.open && !menu.contains(e.target)) menu.open = false; });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') menu.open = false; });
