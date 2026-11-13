// Reading pages of the one NoGuru site: library, academy, glossary, digest, pricing, legal, market context.
// Content and its renderer are shared modules; this file is only the frame and the routing.
import {learningPages} from '../pilot/learning.js';
import {renderReadingPage} from '../pilot/reading-ui.js';
import {loadMarket, loadEpisodes} from '../pilot/data.js';

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

const stamp = (iso) => (iso ? `${new Intl.DateTimeFormat('en-GB', {day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'UTC'}).format(new Date(iso))} UTC` : 'time not supplied');

/* ---------- market context ---------- */
const market = {m: null, e: null, loading: false};
function renderMarket() {
  const {m, e} = market, frame = $('#market-timeframe').value || '1d', matrix = $('#market-matrix'), table = $('#episodes-table');
  matrix.replaceChildren(); table.replaceChildren(); $('#market-source-links').replaceChildren(); $('#episodes-links').replaceChildren();
  if (!m) { text('#market-page-status', 'Loading the public market source…'); return; }
  if (m.status === 'unavailable') { text('#market-page-status', 'I can’t reach the market source right now, so I’m not showing any readings.'); text('#market-page-date', ''); } else {
    const s = m.summaryByTimeframe?.[frame];
    text('#market-page-status', `${m.status === 'stale' ? 'This reading is out of date. ' : ''}${s ? `${s.above} coins above and ${s.below} below their recent average${s.flat ? `; ${s.flat} level` : ''}.` : ''}`);
    text('#market-page-date', `Market observation: ${stamp(m.asOf)} · read ${stamp(m.checkedAt)}.`);
    matrix.className = 'market-matrix';
    for (const row of m.rows || []) {
      const value = row.values[frame], cell = document.createElement('div'), symbol = document.createElement('span'), score = document.createElement('b');
      cell.className = 'market-cell'; cell.dataset.direction = value > 0 ? 'above' : value < 0 ? 'below' : 'flat';
      symbol.textContent = row.symbol; score.textContent = Number.isFinite(value) ? `${value > 0 ? '+' : ''}${value.toFixed(2)}` : 'Unavailable';
      cell.append(symbol, score); matrix.append(cell);
    }
  }
  text('#market-definition', m.definition || 'Scores describe distance from a recent average. They are not percentage returns.');
  const src = externalLink('Inspect the market source', m.sourceUrl); if (src) $('#market-source-links').append(src);
  if (!e) { text('#episodes-status', 'Loading the episode source…'); return; }
  if (e.status === 'unavailable') { text('#episodes-status', 'I can’t reach the episode source right now.'); text('#episodes-date', ''); } else {
    text('#episodes-status', `${e.rows.length} current episodes · ${e.history.length} past events.`);
    text('#episodes-date', `Read ${stamp(e.checkedAt)}.${e.latestEventAt ? ` Latest event low: ${stamp(e.latestEventAt)}.` : ''}`);
    const make = (rows, history) => {
      const t = document.createElement('table'); t.className = 'data-table';
      const head = t.createTHead().insertRow();
      for (const label of ['Coin', history ? 'Drop' : 'Depth', history ? 'Prior high reclaimed' : 'State', 'Triggered']) { const th = document.createElement('th'); th.scope = 'col'; th.textContent = label; head.append(th); }
      const body = t.createTBody();
      for (const item of rows) { const tr = body.insertRow(); for (const v of [item.symbol, `${(history ? item.dropPct : item.depthPct).toFixed(2)}%`, history ? (item.reclaimed ? 'Yes' : 'Not recorded') : item.state, stamp(item.triggeredAt)]) tr.insertCell().textContent = v; }
      return t;
    };
    if (e.rows.length) table.append(make(e.rows, false)); else { const p = document.createElement('p'); p.textContent = 'No episodes are listed right now.'; table.append(p); }
    if (e.history.length) { const d = document.createElement('details'), s = document.createElement('summary'); d.className = 'episode-history'; s.textContent = `Read ${e.history.length} past events`; d.append(s, make(e.history, true)); table.append(d); }
  }
  const esrc = externalLink('Inspect the episode source', e.sourceUrl); if (esrc) $('#episodes-links').append(esrc);
}
async function loadMarketPage() {
  if (market.loading) return; market.loading = true; renderMarket();
  [market.m, market.e] = await Promise.all([loadMarket(), loadEpisodes()]);
  market.loading = false; renderMarket();
}
$('#market-timeframe').addEventListener('change', renderMarket);
$('#market-refresh').addEventListener('click', () => { market.m = market.e = null; loadMarketPage(); });

/* ---------- reading pages ---------- */
function crumbFor(page) {
  if (page.startsWith('academy-')) return ['← Academy', '?page=academy'];
  if (page.startsWith('digest-')) return ['← Digest', '?page=digest'];
  if (page === DEFAULT) return ['← Home', '../'];
  return ['← Library', '?page=library'];
}
function renderLearning(page) {
  const data = learningPages[page];
  text('#learning-eyebrow', data.eyebrow || ''); text('#learning-title', data.title); text('#learning-intro', data.intro || '');
  $('#learning-search').value = ''; $('#learning-page .reading-tools').open = false; text('#search-status', '');
  renderReadingPage(data, {page, sections: $('#learning-sections'), toc: $('#learning-toc'), cards: $('#learning-cards'), source: $('#learning-source'), link: contentLink});
  // Content images are stored beside the content modules.
  for (const img of document.querySelectorAll('#learning-page img')) { const src = img.getAttribute('src') || ''; const at = src.indexOf('assets/migrated/'); if (at >= 0 && !src.includes('/pilot/')) img.setAttribute('src', `../pilot/${src.slice(at)}`); }
  const [label, href] = crumbFor(page), crumb = $('#crumb');
  crumb.textContent = label; crumb.setAttribute('href', href);
  if (href.startsWith('?')) crumb.dataset.route = ''; else delete crumb.dataset.route;
  $('#learning-page .reading-tools').hidden = (data.sections || []).length < 4;
}
$('#learning-search').addEventListener('input', (e) => {
  const q = e.target.value.trim().toLowerCase(); let shown = 0;
  for (const s of document.querySelectorAll('#learning-sections .learning-section')) { const hit = !q || s.dataset.search.includes(q); s.hidden = !hit; if (hit) shown += 1; }
  text('#search-status', q ? `${shown} ${shown === 1 ? 'section mentions' : 'sections mention'} “${e.target.value.trim()}”.` : '');
});

function show(route, {push = false, focus = false} = {}) {
  if (HOME[route.page]) { location.replace(HOME[route.page]); return; }
  if (!known(route.page)) route = {page: DEFAULT, anchor: ''};
  const isMarket = route.page === 'market';
  $('#learning-page').hidden = isMarket; $('#market-page').hidden = !isMarket;
  document.body.dataset.page = route.page;
  if (isMarket) loadMarketPage(); else renderLearning(route.page);
  const title = isMarket ? 'Market context' : learningPages[route.page].title;
  document.title = `${title} — NoGuru`;
  for (const a of document.querySelectorAll('.bar a[data-route], .read-foot a[data-route]')) {
    if (parse(a.getAttribute('href'))?.page === route.page) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  }
  if (push) history.pushState(null, '', `?page=${route.page}${route.anchor ? `#${route.anchor}` : ''}`);
  const target = route.anchor && (document.getElementById(`learning-${route.anchor}`) || document.getElementById(route.anchor));
  if (target) target.scrollIntoView({behavior: reduced ? 'auto' : 'smooth', block: 'start'});
  else if (push || focus) scrollTo(0, 0);
  if (focus && !target) $(isMarket ? '#market-title' : '#learning-title').focus({preventScroll: true});
}
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[data-route]');
  if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const route = parse(a.getAttribute('href')); if (!route) return;
  e.preventDefault(); show(route, {push: true, focus: true});
});
addEventListener('popstate', () => show(parse(location.href) || {page: DEFAULT, anchor: ''}));
show(parse(location.href) || {page: DEFAULT, anchor: ''});
