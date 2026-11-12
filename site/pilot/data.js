// Unauthenticated public GETs only. No persistent cache or old-data fallback.
const BASE = 'https://noguru.io';
const TIMEOUT_MS = 10000;
const MARKET_MAX_AGE_MS = 10 * 60 * 1000;
const evidenceUrl = `${BASE}/api/public/track-record`;
const marketUrl = `${BASE}/api/public/trend-matrix`;
const finite = n => typeof n === 'number' && Number.isFinite(n);
const count = n => Number.isSafeInteger(n) && n >= 0;
const record = x => x !== null && typeof x === 'object' && !Array.isArray(x);
const isoDate = x => typeof x === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(x) && Number.isFinite(Date.parse(`${x}T00:00:00Z`)) && new Date(`${x}T00:00:00Z`).toISOString().slice(0, 10) === x;
function stamp(value) {
  if (typeof value !== 'string') return null;
  // The public endpoint uses an ISO-compatible SQL space separator.
  const normalized = value.replace(/^(\d{4}-\d{2}-\d{2}) /, '$1T');
  if (!/(Z|[+-]\d{2}:\d{2})$/.test(normalized)) return null;
  const ms = Date.parse(normalized);
  return Number.isFinite(ms) ? new Date(ms).toISOString() : null;
}
async function freshJSON(url, signal) {
  const controller = new AbortController();
  let timedOut = false;
  const abort = () => controller.abort();
  if (signal?.aborted) controller.abort();
  else signal?.addEventListener('abort', abort, {once: true});
  const timer = setTimeout(() => { timedOut = true; controller.abort(); }, TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      signal: controller.signal, cache: 'no-store', credentials: 'omit',
      headers: {Accept: 'application/json'},
    });
    if (!response.ok) throw new Error(`Source returned HTTP ${response.status}.`);
    const data = await response.json();
    if (!record(data)) throw new Error('Source returned an unexpected data structure.');
    return data;
  } catch (error) {
    if (timedOut) throw new Error('Source request timed out.');
    if (controller.signal.aborted) throw new Error('Source request was cancelled.');
    if (error instanceof SyntaxError) throw new Error('Source returned invalid JSON.');
    throw error;
  } finally {
    clearTimeout(timer);
    signal?.removeEventListener('abort', abort);
  }
}
const errorMessage = error => error instanceof Error ? error.message : 'Source unavailable.';

export async function loadEvidence({signal} = {}) {
  const checkedAt = new Date().toISOString();
  const empty = {
    status: 'unavailable', checkedAt, windowStart: null, windowEnd: null,
    closed: null, up: null, down: null, open: null, grossMonthly: null,
    grossSinceStart: null, openVsCost: null, allocatedInTrades: null,
    rows: [], sourceUrl: evidenceUrl,
    sourceType: 'Published-signal replay at current buy sizes, before fees; not customer equity',
    latestClose: null,
  };
  try {
    const data = await freshJSON(evidenceUrl, signal);
    if (!Array.isArray(data.channels)) throw new Error('Signal channels are missing.');
    const channel = data.channels.find(c => record(c) && c.key === 'STEPGRID_HYBRID');
    const stats = channel?.bag_stats, perf = channel?.perf, open = channel?.open_summary;
    if (!record(stats) || !record(perf) || !record(open)) throw new Error('Signal summary is incomplete.');
    if (typeof channel.source !== 'string' || !/published signals/i.test(channel.source) || !/before fees/i.test(channel.source)) throw new Error('Signal source description changed; review is required.');
    if (![stats.closed, stats.up, stats.down, stats.open].every(count) || stats.up + stats.down !== stats.closed) throw new Error('Cycle counts are invalid or inconsistent.');
    if (!Array.isArray(stats.rows) || stats.rows.length !== stats.closed) throw new Error('Completed-cycle coverage is incomplete.');
    if (!isoDate(perf.window_start) || !isoDate(perf.window_end) || perf.window_start > perf.window_end || !finite(perf.weeks) || perf.weeks <= 0 || !finite(perf.pct_month_gross)) throw new Error('Signal period or return basis is invalid.');
    if (!count(open.in_progress) || open.in_progress !== stats.open || !finite(open.vs_cost_pct) || !finite(open.allocated_in_trades_pct) || open.allocated_in_trades_pct < 0) throw new Error('Open-cycle summary is invalid.');
    const rows = stats.rows.map(row => {
      if (!record(row)) throw new Error('A completed cycle is invalid.');
      const openedAt = stamp(row.opened_at), closedAt = stamp(row.closed_at);
      if (!openedAt || !closedAt || openedAt > closedAt || !finite(row.pct) || !Number.isSafeInteger(row.n_rungs) || row.n_rungs < 1) throw new Error('A completed-cycle record is invalid.');
      return {openedAt, closedAt, rungs: row.n_rungs, pct: row.pct};
    });
    const grossSinceStart = perf.pct_month_gross * perf.weeks / 4.345;
    if (!finite(grossSinceStart)) throw new Error('Signal return cannot be calculated.');
    // Window date is coverage, not a producer generation timestamp.
    const age = Date.now() - Date.parse(`${perf.window_end}T23:59:59Z`);
    if (Date.parse(`${perf.window_end}T00:00:00Z`) > Date.now() + 86400000) throw new Error('Signal window is in the future.');
    const stale = age > 2 * 86400000;
    return {
      ...empty, status: stale ? 'stale' : 'ready',
      windowStart: perf.window_start, windowEnd: perf.window_end,
      closed: stats.closed, up: stats.up, down: stats.down, open: stats.open,
      grossMonthly: perf.pct_month_gross, grossSinceStart,
      openVsCost: open.vs_cost_pct, allocatedInTrades: open.allocated_in_trades_pct,
      rows, latestClose: rows.reduce((latest, row) => !latest || row.closedAt > latest ? row.closedAt : latest, null),
      ...(stale ? {error: 'Signal coverage window is more than two days old; generation time is not supplied.'} : {}),
    };
  } catch (error) { return {...empty, error: errorMessage(error)}; }
}

export async function loadMarket({signal} = {}) {
  const checkedAt = new Date().toISOString();
  const empty = {status: 'unavailable', checkedAt, asOf: null, stale: true, summary: 'Market context unavailable.', rows: [], sourceUrl: marketUrl};
  try {
    const data = await freshJSON(marketUrl, signal);
    const asOf = stamp(data.updated_at);
    if (!asOf || typeof data.stale !== 'boolean' || !record(data.symbols) || !Array.isArray(data.tfs) || !data.tfs.includes('1d') || !data.tfs.every(tf => ['1h', '4h', '1d', '1w'].includes(tf)) || new Set(data.tfs).size !== data.tfs.length) throw new Error('Market context schema or observation time is invalid.');
    if (Date.parse(asOf) > Date.now() + 60000) throw new Error('Market observation time is in the future.');
    const entries = Object.entries(data.symbols);
    if (entries.length === 0 || entries.length > 100) throw new Error('Market symbol coverage is invalid.');
    const rows = entries.map(([symbol, values]) => {
      if (!/^[A-Z0-9]{2,20}$/.test(symbol) || !record(values) || !data.tfs.every(tf => finite(values[tf]))) throw new Error('A market reading is invalid.');
      return {symbol, values: Object.fromEntries(data.tfs.map(tf => [tf, values[tf]]))};
    });
    const above = rows.filter(r => r.values['1d'] > 0).length;
    const below = rows.filter(r => r.values['1d'] < 0).length;
    const flat = rows.length - above - below;
    const stale = data.stale || Date.now() - Date.parse(asOf) > MARKET_MAX_AGE_MS;
    const summary = `Daily trend readings: ${above} above and ${below} below their recent average${flat ? `; ${flat} level` : ''}. Market context, not trading instructions.`;
    return {...empty, status: stale ? 'stale' : 'ready', asOf, stale, summary, rows, ...(stale ? {error: 'Market observation is marked stale or more than ten minutes old.'} : {})};
  } catch (error) { return {...empty, error: errorMessage(error)}; }
}
