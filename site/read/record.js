// The trade-by-trade record, read live from NoGuru's public feeds. Nothing here is typed in.
//
// Rules carried over from the engine builder's own record page:
// - a finished trade is shown with its dates (day only), its number of buys and its result, never with its coin;
//   a coin beside a result would publish that coin's sale target;
// - coins appear only per month, and only once a coin closed five or more trades that month (the feed applies this);
// - trades still open are shown as one total, never one by one;
// - wins and losses are counts, never turned into a "win rate".

const BASE = 'https://noguru.io';
const FEEDS = {record: `${BASE}/api/public/track-record`, headline: `${BASE}/data/published_signals.json`};
const REFRESH_MS = 10 * 60 * 1000;          // the record is refreshed on the server every 10 minutes
const STALE_DAYS = 3;
const FIRST_ROWS = 30;

const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text !== undefined) n.textContent = text; return n; };
const num = (v) => typeof v === 'number' && Number.isFinite(v);
const int = (v) => Number.isSafeInteger(v) && v >= 0;
const pct = (v, d = 1) => `${v > 0 ? '+' : v < 0 ? '−' : ''}${Math.abs(v).toFixed(d)}%`;
const count = (v) => v.toLocaleString('en-US');
const utcDay = (iso, opts = {day: 'numeric', month: 'short', year: 'numeric'}) => new Intl.DateTimeFormat('en-GB', {...opts, timeZone: 'UTC'}).format(new Date(iso.length === 10 ? `${iso}T00:00:00Z` : iso));
const monthName = (ym) => utcDay(`${ym}-01`, {month: 'long', year: 'numeric'});

async function getJSON(url, signal) {
  const ctrl = new AbortController(), timer = setTimeout(() => ctrl.abort(), 15000);
  const stop = () => ctrl.abort(); signal?.addEventListener('abort', stop);
  try {
    const res = await fetch(url, {signal: ctrl.signal, cache: 'no-store', headers: {Accept: 'application/json'}});
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } finally { clearTimeout(timer); signal?.removeEventListener('abort', stop); }
}

// Check the feed's shape before showing anything: a half-read record is worse than none.
export function readRecord(data) {
  const ch = Array.isArray(data?.channels) ? data.channels.filter((c) => c?.key === 'STEPGRID_HYBRID') : [];
  if (ch.length !== 1) throw new Error('The record has no single current strategy.');
  const c = ch[0], b = c.bag_stats, perf = c.perf, open = c.open_summary;
  if (!b || !perf || !open) throw new Error('The record is incomplete.');
  if (![b.closed, b.up, b.down, b.open].every(int) || b.up + b.down !== b.closed) throw new Error('The record\'s counts disagree.');
  if (typeof c.source !== 'string' || !/before fees/i.test(c.source)) throw new Error('The record\'s basis changed; it needs a look before it is shown.');
  const rows = (Array.isArray(b.rows) ? b.rows : []).filter((r) => r && num(r.pct) && int(r.n_rungs) && typeof r.opened_at === 'string' && typeof r.closed_at === 'string'
    && !Number.isNaN(Date.parse(r.opened_at)) && !Number.isNaN(Date.parse(r.closed_at)))
    .map((r) => ({opened: r.opened_at, closed: r.closed_at, buys: r.n_rungs, pct: r.pct, hours: (Date.parse(r.closed_at) - Date.parse(r.opened_at)) / 3600000}))
    .sort((x, y) => Date.parse(y.closed) - Date.parse(x.closed));
  const coins = b.coins || {};
  return {
    windowStart: perf.window_start, windowEnd: perf.window_end,
    closed: b.closed, up: b.up, down: b.down, open: b.open, rows,
    openShare: num(open.allocated_in_trades_pct) ? open.allocated_in_trades_pct : null,
    openVsCost: num(open.vs_cost_pct) ? open.vs_cost_pct : null,
    traded: Array.isArray(coins.traded) ? coins.traded.filter((t) => t && typeof t.coin === 'string' && /^\d{4}-\d{2}$/.test(t.month)) : [],
    byMonth: Array.isArray(coins.by_month) ? coins.by_month.filter((r) => r && typeof r.coin === 'string' && /^\d{4}-\d{2}$/.test(r.month) && int(r.bags) && num(r.pct)) : [],
  };
}
export function readHeadline(data) {
  if (!data || !num(data.cum_pct) || !num(data.pot) || data.pot <= 0 || !/^\d{4}-\d{2}-\d{2}$/.test(data.since || '') || !/^\d{4}-\d{2}-\d{2}$/.test(data.as_of || '')) throw new Error('The headline figure is incomplete.');
  const months = (Date.parse(`${data.as_of}T00:00:00Z`) - Date.parse(`${data.since}T00:00:00Z`)) / 86400000 / 30.44;
  return {pct: data.cum_pct, pot: data.pot, since: data.since, asOf: data.as_of, months, perMonth: months > 0.5 ? data.cum_pct / months : null};
}

const BINS = [
  {label: 'Below cost', test: (p) => p < 0},
  {label: '0 to 1%', test: (p) => p >= 0 && p < 1},
  {label: '1 to 2%', test: (p) => p >= 1 && p < 2},
  {label: '2 to 3%', test: (p) => p >= 2 && p < 3},
  {label: '3 to 4%', test: (p) => p >= 3 && p < 4},
  {label: '4 to 6%', test: (p) => p >= 4 && p < 6},
  {label: '6 to 10%', test: (p) => p >= 6 && p < 10},
  {label: '10% or more', test: (p) => p >= 10},
];
const median = (xs) => { const s = [...xs].sort((a, b) => a - b), n = s.length; return n ? (n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2) : null; };
const duration = (h) => (h < 1 ? 'under an hour' : h < 36 ? `${Math.round(h)} hours` : `${Math.round(h / 24)} days`);

export function createRecordPage(root) {
  const $ = (s) => root.querySelector(s);
  let timer = 0, ctrl = null, active = false, showAll = false, allMonths = false, last = null;

  function status(text, state) { const s = $('#record-status'); s.textContent = text; s.dataset.state = state; }

  function render(rec, head, checkedAt) {
    const body = $('#record-body'); body.replaceChildren(); body.hidden = false; $('#record-down').hidden = true;
    const stale = rec.windowEnd && Date.now() - Date.parse(`${rec.windowEnd}T23:59:59Z`) > STALE_DAYS * 86400000;
    status(`${stale ? 'Out of date' : 'Live'} · checked ${checkedAt.toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit'})} · covers ${utcDay(rec.windowStart)} – ${utcDay(rec.windowEnd)}`, stale ? 'stale' : 'live');

    // 1. The headline: percentage first, then its basis, then the amount.
    const top = el('section', 'record-block record-head');
    if (head) {
      const big = el('p', 'record-big'); big.append(el('b', '', pct(head.pct)), el('span', '', ' completed profit'));
      const gain = head.pot * head.pct / 100;
      top.append(big, el('p', 'record-basis', `On the ${count(head.pot)} USDT set aside for the bot, from ${utcDay(head.since)} to ${utcDay(head.asOf)}, before fees: about ${count(Math.round(gain))} USDT.`));
      if (head.perMonth) top.append(el('p', 'record-basis', `That is about ${head.perMonth.toFixed(1)}% a month on the same money. A pace from the past, not a forecast.`));
      top.append(el('p', 'record-fine', 'Completed profit counts only trades that have been sold. The trades still open are counted separately below, at where they stand today.'));
    } else {
      top.append(el('p', 'record-fine', 'The profit figure could not be read just now. The trades below are unaffected.'));
    }
    body.append(top);

    // 2. Counts.
    const grid = el('section', 'record-block record-counts');
    const cell = (value, label, cls = '') => { const d = el('div', cls); d.append(el('b', '', value), el('span', '', label)); return d; };
    grid.append(cell(count(rec.closed), 'finished trades'), cell(count(rec.up), 'closed in profit'), cell(count(rec.down), 'closed below cost'), cell(count(rec.open), 'still open', 'quiet'));
    body.append(grid);
    if (rec.down > 0) body.append(el('p', 'record-fine record-under', `Why ${rec.down === 1 ? 'one closed' : `${rec.down} closed`} below cost: Cornix allows at most ten buys in one trade, so a longer run of buys on one coin is split into several Cornix trades. One piece can close below its own cost while the run as a whole closes above it.`));

    // 3. Open trades, as one total.
    if (rec.open > 0 && rec.openShare !== null) {
      const o = el('section', 'record-block record-open');
      o.append(el('h2', '', 'Still open'));
      o.append(el('p', '', `The ${rec.open} trades still open hold ${rec.openShare.toFixed(1)}% of the money set aside${rec.openVsCost === null ? '.' : `, and together stand ${pct(rec.openVsCost)} against what they cost, at the latest price.`}`));
      o.append(el('p', 'record-fine', 'This is where the risk sits. There is no stop loss: open trades wait for their price, they can fall further, and some may not come back. The share can be above 100% because the same money cycles through several trades over time. Open trades are shown only as this one total, never one by one.'));
      body.append(o);
    }

    // 4. The spread of results.
    if (rec.rows.length) {
      const ps = rec.rows.map((r) => r.pct), avg = ps.reduce((a, b) => a + b, 0) / ps.length, best = Math.max(...ps);
      const s = el('section', 'record-block');
      s.append(el('h2', '', 'Mostly small wins. Some big ones.'));
      s.append(el('p', '', `Selling starts about 2% above a coin's average, then follows the price up. The typical trade made ${pct(median(ps))}, the average ${pct(avg)}, the best ${pct(best)}.`));
      const list = el('ol', 'record-bars'); list.setAttribute('aria-label', 'Finished trades by result');
      const counts = BINS.map((bin) => ps.filter(bin.test).length), most = Math.max(...counts);
      BINS.forEach((bin, i) => {
        const li = el('li'), bar = el('i'); bar.style.setProperty('--w', `${Math.max(counts[i] ? 0.6 : 0, counts[i] / most * 100)}%`);
        if (i === 0) li.className = 'below';
        li.append(el('span', 'record-bar-label', bin.label), bar, el('span', 'record-bar-n', `${count(counts[i])} · ${(counts[i] / ps.length * 100).toFixed(1)}%`));
        list.append(li);
      });
      s.append(list);
      const hrs = rec.rows.map((r) => r.hours), day = hrs.filter((h) => h < 24).length;
      s.append(el('p', 'record-fine', `How long they took: ${(day / hrs.length * 100).toFixed(0)}% finished within a day; the typical trade took ${duration(median(hrs))}, the longest ${duration(Math.max(...hrs))}.`));
      body.append(s);
    }

    // 5. Coins, per month only.
    if (rec.traded.length || rec.byMonth.length) {
      const c = el('section', 'record-block');
      c.append(el('h2', '', 'Which coins it traded'));
      if (rec.traded.length) {
        const latest = rec.traded.reduce((m, t) => (t.month > m ? t.month : m), rec.traded[0].month);
        c.append(el('p', '', `In ${monthName(latest)}: ${rec.traded.filter((t) => t.month === latest).map((t) => t.coin).join(', ')}.`));
      }
      if (rec.byMonth.length) {
        const wrap = el('div', 'record-table-wrap'), t = el('table', 'record-table');
        t.append(Object.assign(el('caption'), {textContent: 'Per coin, per month: finished trades and what they made on the money in them. A coin is listed for a month once it finished five or more trades in it.'}));
        const hr = el('tr'); for (const [h, n] of [['Month'], ['Coin'], ['Trades', 1], ['Result', 1]]) { const th = el('th', n ? 'n' : '', h); th.scope = 'col'; hr.append(th); }
        const thead = el('thead'); thead.append(hr); t.append(thead);
        const tb = el('tbody'), newest = rec.byMonth.reduce((m, r) => (r.month > m ? r.month : m), rec.byMonth[0].month);
        for (const r of allMonths ? rec.byMonth : rec.byMonth.filter((x) => x.month === newest)) { const tr = el('tr'); tr.append(el('td', '', monthName(r.month)), el('td', '', r.coin), el('td', 'n', count(r.bags)), el('td', 'n', pct(r.pct, 2))); tb.append(tr); }
        t.append(tb); wrap.append(t); c.append(wrap);
        const months = new Set(rec.byMonth.map((r) => r.month)).size;
        if (!allMonths && months > 1) {
          const more = el('button', 'record-more', `Show all ${months} months`); more.type = 'button';
          more.addEventListener('click', () => { allMonths = true; render(...last); });
          c.append(more);
        }
      }
      body.append(c);
    }

    // 6. Every finished trade.
    if (rec.rows.length) {
      const all = el('section', 'record-block'); all.id = 'record-every';
      all.append(el('h2', '', 'Every finished trade'));
      all.append(el('p', '', `All ${count(rec.rows.length)} of them, newest first: when the first buy was made, when it sold, how many buys it took and what it made. The coin is left out on purpose: next to a result it would give away that coin's sale target.`));
      const wrap = el('div', 'record-table-wrap'), t = el('table', 'record-table');
      const hr = el('tr'); for (const [h, n] of [['Opened'], ['Sold'], ['Buys', 1], ['Result', 1]]) { const th = el('th', n ? 'n' : '', h); th.scope = 'col'; hr.append(th); }
      const thead = el('thead'); thead.append(hr); t.append(thead);
      const tb = el('tbody');
      for (const r of showAll ? rec.rows : rec.rows.slice(0, FIRST_ROWS)) {
        const tr = el('tr', r.pct < 0 ? 'below' : '');
        tr.append(el('td', '', utcDay(r.opened)), el('td', '', utcDay(r.closed)), el('td', 'n', String(r.buys)), el('td', 'n', pct(r.pct, 2)));
        tb.append(tr);
      }
      t.append(tb); wrap.append(t); all.append(wrap);
      if (!showAll && rec.rows.length > FIRST_ROWS) {
        const more = el('button', 'record-more', `Show all ${count(rec.rows.length)}`); more.type = 'button';
        more.addEventListener('click', () => { showAll = true; render(...last); $('#record-every')?.querySelectorAll('tbody tr')[FIRST_ROWS]?.scrollIntoView({block: 'center'}); });
        all.append(more);
      }
      if (rec.rows.length !== rec.closed) all.append(el('p', 'record-fine', `The feed lists ${count(rec.rows.length)} of the ${count(rec.closed)} finished trades it counts.`));
      body.append(all);
    }

    // 7. What it is, and what it leaves out.
    const foot = el('section', 'record-block record-about');
    foot.append(el('h2', '', 'What this record is'));
    foot.append(el('p', '', 'Every trade NoGuru published as a signal, as a Cornix bot following the channel trades it, at today\'s buy sizes, before exchange fees and the subscriptions. Nothing is retyped and nothing is left out. It is not a customer\'s account: your own results depend on when you start, how much you set aside and your exchange\'s fees. Past results do not promise future ones.'));
    const src = el('p', 'record-fine');
    src.append(document.createTextNode('Read live from NoGuru\'s public data: '));
    for (const [label, url] of [['the record', FEEDS.record], ['the profit figure', FEEDS.headline]]) {
      const a = el('a', '', `${label} ↗`); a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer'; src.append(a);
      if (label === 'the record') src.append(document.createTextNode(' and '));
    }
    src.append(document.createTextNode('. Checked again every 10 minutes while this page is open.'));
    foot.append(src);
    body.append(foot);
  }

  async function load() {
    ctrl?.abort(); ctrl = new AbortController();
    const signal = ctrl.signal;
    if (!last) status('Reading the live record…', 'loading');
    const [r, h] = await Promise.allSettled([getJSON(FEEDS.record, signal), getJSON(FEEDS.headline, signal)]);
    if (signal.aborted) return;
    let rec = null, head = null;
    try { if (r.status === 'fulfilled') rec = readRecord(r.value); } catch { rec = null; }
    try { if (h.status === 'fulfilled') head = readHeadline(h.value); } catch { head = null; }
    if (!rec) {
      // Never show old numbers as if they were current.
      $('#record-body').hidden = true; $('#record-down').hidden = false; last = null;
      status('Can\'t reach the record right now', 'down');
      return;
    }
    last = [rec, head, new Date()];
    render(...last);
  }
  function schedule() { clearTimeout(timer); if (active && !document.hidden) timer = setTimeout(async () => { await load(); schedule(); }, REFRESH_MS); }
  $('#record-refresh').addEventListener('click', () => { load().then(schedule); });
  $('#record-retry').addEventListener('click', () => { load().then(schedule); });
  document.addEventListener('visibilitychange', () => { if (!active) return; if (document.hidden) clearTimeout(timer); else load().then(schedule); });

  return {
    start() { if (active) return; active = true; load().then(schedule); },
    stop() { active = false; clearTimeout(timer); ctrl?.abort(); },
  };
}
