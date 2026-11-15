// Behaviour for the reading pages. Each page's text is already in its HTML (tools/build-static.mjs);
// this file only adds what needs a browser: the menu, the back link, in-page search, and the parts
// that read live data (the pricing pay-back figure, the trade-by-trade record, the market dashboard).
const $ = (s) => document.querySelector(s);
const page = document.body.dataset.page, pageName = document.body.dataset.name || '';

/* ---------- menu: closes after a choice or a tap elsewhere ---------- */
const menu = $('#menu');
if (menu) {
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) menu.open = false; });
  document.addEventListener('click', (e) => { if (menu.open && !menu.contains(e.target)) menu.open = false; });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') menu.open = false; });
}

/* ---------- the link at the top goes back to wherever the reader actually came from ---------- */
// Only someone who lands here directly gets the fixed parent page instead.
const LAST = 'noguru-last-page';
const crumb = $('#crumb');
try {
  const ref = document.referrer ? new URL(document.referrer) : null;
  if (crumb && ref && ref.origin === location.origin && ref.pathname !== location.pathname && history.length > 1) {
    let last = null; try { last = JSON.parse(sessionStorage.getItem(LAST) || 'null'); } catch { /* private mode */ }
    crumb.textContent = last && last.path === ref.pathname && last.name ? `← Back to ${last.name}` : '← Back';
    crumb.addEventListener('click', (e) => { if (e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; e.preventDefault(); history.back(); });
  }
} catch { /* an unreadable referrer keeps the fixed link */ }
addEventListener('pagehide', () => { try { sessionStorage.setItem(LAST, JSON.stringify({path: location.pathname, name: pageName})); } catch { /* private mode */ } });

/* ---------- find something on this page ---------- */
const search = $('#learning-search');
if (search) search.addEventListener('input', () => {
  const q = search.value.trim().toLowerCase(); let shown = 0;
  for (const s of document.querySelectorAll('#learning-sections .learning-section')) { const hit = !q || (s.dataset.search || '').includes(q); s.hidden = !hit; if (hit) shown += 1; }
  $('#search-status').textContent = q ? `${shown} ${shown === 1 ? 'section mentions' : 'sections mention'} “${search.value.trim()}”.` : '';
});

/* ---------- parts that need live data or interaction ---------- */
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (location.hash.length > 1) requestAnimationFrame(() => { try { document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView({behavior: reduced ? 'auto' : 'smooth', block: 'start'}); } catch { /* malformed hash */ } });

// The recovery calculator is drawn in the HTML; the working one replaces it.
const widget = $('.recovery-widget');
if (widget) import('../pilot/reading-ui.js').then(({recoveryWidget}) => widget.replaceWith(recoveryWidget()));

if (page === 'record') import('./record.js').then(({createRecordPage}) => createRecordPage($('#record-page')).start());

if (page === 'market') import('../dashboard.js').then(({createDashboardController}) => {
  const dashboard = createDashboardController($('#market-dashboard'));
  window.NoGuruDashboard = dashboard;     // inspection only
  dashboard.start();
  addEventListener('pageshow', () => dashboard.start());
});

// Pricing: the pay-back figure comes from the live record, never from a typed-in number.
if (page === 'pricing') import('../pilot/data.js').then(async ({loadEvidence, paybackCapital}) => {
  const FEE = 49, CORNIX = 49.9, SUGGESTED = 3000;
  const day = (iso) => new Intl.DateTimeFormat('en-GB', {day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC'}).format(new Date(`${iso}T00:00:00Z`));
  const usd = (n) => `$${Math.round(n).toLocaleString('en-US')}`;
  const card = $('#learning-cards .plan-card:nth-child(2)'), section = document.getElementById('learning-payback');
  if (!card) return;
  const price = card.querySelector('.plan-price'), body = card.querySelector('.plan-description');
  if (!price || !body) return;
  const ev = await loadEvidence();
  const rate = Number.isFinite(ev.allocMonthly) ? ev.allocMonthly : ev.grossMonthly, need = paybackCapital(FEE, rate);
  if (ev.status === 'unavailable' || !need) {
    price.firstChild.textContent = '—';
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
});
