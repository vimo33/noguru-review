// Public, unauthenticated GETs only. No persistent cache or saved-data fallback.
// `ready` means a valid response was fetched; sourceMeta.freshness describes
// whether its source observation time is known. Fetch time is never quote time.
const BASE = 'https://noguru.io';
const TIMEOUT_MS = 10000;
const MARKET_MAX_AGE_MS = 10 * 60 * 1000;
const EVIDENCE_MAX_AGE_MS = 2 * 86400000;
export const SOURCE_URLS = Object.freeze({
  evidence: `${BASE}/api/public/track-record`, market: `${BASE}/api/public/trend-matrix`,
  episodes: `${BASE}/api/public/flush-state`, publishedGraphic: `${BASE}/data/published_signals.svg`,
});
const finite = n => typeof n === 'number' && Number.isFinite(n);
const count = n => Number.isSafeInteger(n) && n >= 0;
const record = x => x !== null && typeof x === 'object' && !Array.isArray(x);
const symbol = x => typeof x === 'string' && /^[A-Z0-9]{2,20}$/.test(x);
const isoDate = x => typeof x === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(x) && Number.isFinite(Date.parse(`${x}T00:00:00Z`)) && new Date(`${x}T00:00:00Z`).toISOString().slice(0, 10) === x;
function stamp(value) {
  if (typeof value !== 'string') return null;
  const normalized = value.replace(/^(\d{4}-\d{2}-\d{2}) /, '$1T');
  const parts = /^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,9})?(?:Z|[+-]\d{2}:\d{2})$/.exec(normalized);
  if (!parts || !isoDate(parts[1]) || Number(parts[2]) > 23 || Number(parts[3]) > 59 || Number(parts[4]) > 59) return null;
  const ms = Date.parse(normalized);
  return Number.isFinite(ms) ? new Date(ms).toISOString() : null;
}
const evidenceType = 'Published-signal replay at current buy sizes, before fees; not customer equity';
const marketType = 'Public market trend readings; not strategy returns or trading instructions';
const episodesType = 'Public market-drop episodes; not NoGuru trades or strategy replay scenarios';
const evidenceDefinitions = Object.freeze({
  grossMonthly: 'Supplier-reported monthly-normalized completed signal profit relative to allocated funds, before fees. Not a forecast or whole-account return.',
  grossSinceStart: 'Monthly gross rate × reported weeks ÷ 4.345, following the public track-record frontend. Linear normalization from rounded fields, not compounding.',
  rowPct: 'Completed-cycle gross result on funds in that cycle. Rows have no capital weights; do not sum their percentages into account growth.',
  rungs: 'Reported purchases in a reconstructed cycle, not independently verified exchange orders or fills.',
  openVsCost: 'Current marked open holdings versus their purchase cost. Not account drawdown or total account change.',
  allocatedInTrades: 'Open holdings relative to the supplier allocation basis. Exact denominator/weighting is not supplied; above 100% does not establish leverage or negative cash.',
});
const marketDefinition = 'Distance of price above or below its recent average, measured in typical bar-to-bar movement units. These scores are not percentage returns.';
function meta(id, checkedAt, asOf, asOfKind, freshness, limitations, extra = {}) {
  return {id, url: SOURCE_URLS[id], checkedAt, asOf, asOfKind, freshness, limitations, ...extra};
}
function evidenceEmpty(checkedAt) {
  return {status:'unavailable',checkedAt,windowStart:null,windowEnd:null,closed:null,up:null,down:null,open:null,grossMonthly:null,grossSinceStart:null,openVsCost:null,allocatedInTrades:null,rows:[],sourceUrl:SOURCE_URLS.evidence,sourceType:evidenceType,latestClose:null,generationTime:null,durationSummary:null,definitions:{...evidenceDefinitions},sourceMeta:meta('evidence',checkedAt,null,'not-supplied','unavailable',['No saved or invented figures are substituted.'])};
}
function marketEmpty(checkedAt) {
  return {status:'unavailable',checkedAt,asOf:null,stale:true,summary:'Market context unavailable.',rows:[],timeframes:[],summaryByTimeframe:{},definition:marketDefinition,sourceUrl:SOURCE_URLS.market,sourceType:marketType,sourceMeta:meta('market',checkedAt,null,'observation','unavailable',['No saved readings are substituted.'])};
}
function episodesEmpty(checkedAt) {
  return {status:'unavailable',checkedAt,asOf:null,latestEventAt:null,rows:[],history:[],checked:[],sourceUrl:SOURCE_URLS.episodes,sourceType:episodesType,sourceMeta:meta('episodes',checkedAt,null,'not-supplied','unavailable',['No saved episodes are substituted.'])};
}
async function freshJSON(url, signal) {
  const controller = new AbortController(); let timedOut = false;
  const abort = () => controller.abort();
  if (signal?.aborted) controller.abort(); else signal?.addEventListener('abort',abort,{once:true});
  const timer = setTimeout(()=>{timedOut=true;controller.abort();},TIMEOUT_MS);
  try {
    const response = await fetch(url,{signal:controller.signal,cache:'no-store',credentials:'omit',headers:{Accept:'application/json'}});
    if (!response.ok) throw new Error(`Source returned HTTP ${response.status}.`);
    const data = await response.json();
    if (!record(data)) throw new Error('Source returned an unexpected data structure.');
    return data;
  } catch(error) {
    if (timedOut) throw new Error('Source request timed out.');
    if (controller.signal.aborted) throw new Error('Source request was cancelled.');
    if (error instanceof SyntaxError) throw new Error('Source returned invalid JSON.');
    throw error;
  } finally {clearTimeout(timer);signal?.removeEventListener('abort',abort);}
}
const message = error => error instanceof Error ? error.message : 'Source unavailable.';

// Pure normalization exports allow contract/time-boundary tests without network.
export function normalizeEvidence(data,{checkedAt=new Date().toISOString(),now=Date.now()}={}) {
  if (!record(data)||!Array.isArray(data.channels)) throw new Error('Signal channels are missing.');
  const matching=data.channels.filter(c=>record(c)&&c.key==='STEPGRID_HYBRID');
  if(matching.length!==1)throw new Error('Expected one current signal channel.');
  const channel=matching[0],stats=channel.bag_stats,perf=channel.perf,open=channel.open_summary;
  if(!record(stats)||!record(perf)||!record(open))throw new Error('Signal summary is incomplete.');
  if(typeof channel.source!=='string'||!/published signals/i.test(channel.source)||!/before fees/i.test(channel.source))throw new Error('Signal source description changed; review is required.');
  if(![stats.closed,stats.up,stats.down,stats.open].every(count)||stats.up+stats.down!==stats.closed)throw new Error('Cycle counts are invalid or inconsistent.');
  if(!Array.isArray(stats.rows)||stats.rows.length!==stats.closed)throw new Error('Completed-cycle coverage is incomplete.');
  if(!isoDate(perf.window_start)||!isoDate(perf.window_end)||perf.window_start>perf.window_end||!finite(perf.weeks)||perf.weeks<=0||!finite(perf.pct_month_gross))throw new Error('Signal period or return basis is invalid.');
  if(!count(open.in_progress)||open.in_progress!==stats.open||!finite(open.vs_cost_pct)||!finite(open.allocated_in_trades_pct)||open.allocated_in_trades_pct<0)throw new Error('Open-cycle summary is invalid.');
  const rows=stats.rows.map(row=>{
    if(!record(row))throw new Error('A completed cycle is invalid.');
    const openedAt=stamp(row.opened_at),closedAt=stamp(row.closed_at);
    if(!openedAt||!closedAt||openedAt>closedAt||Date.parse(closedAt)>now+60000||!finite(row.pct)||!Number.isSafeInteger(row.n_rungs)||row.n_rungs<1)throw new Error('A completed-cycle record is invalid.');
    return {openedAt,closedAt,rungs:row.n_rungs,pct:row.pct};
  });
  if(rows.filter(row=>row.pct<0).length!==stats.down)throw new Error('Below-cost count disagrees with completed rows.');
  const grossSinceStart=perf.pct_month_gross*perf.weeks/4.345;
  if(!finite(grossSinceStart))throw new Error('Signal return cannot be calculated.');
  if(Date.parse(`${perf.window_end}T00:00:00Z`)>now+86400000)throw new Error('Signal window is in the future.');
  const stale=now-Date.parse(`${perf.window_end}T23:59:59Z`)>EVIDENCE_MAX_AGE_MS;
  const durations=rows.map(r=>(Date.parse(r.closedAt)-Date.parse(r.openedAt))/3600000).sort((a,b)=>a-b),n=durations.length;
  const under24h=durations.filter(h=>h<24).length;
  const durationSummary={closed:n,under24h,under24hPct:n?under24h/n*100:null,medianHours:n?(n%2?durations[(n-1)/2]:(durations[n/2-1]+durations[n/2])/2):null,scope:'Completed cycles only; still-open cycles excluded.'};
  const limits=['Source generation and open-price observation timestamps are not supplied. Window end is coverage, not freshness proof.','The exact allocation denominator, capital weights, cash ledger and fee ledger are not public. No whole-account value or cash is inferred.','Separate from the frozen 9 November 10,000 USDT historical model; do not splice the datasets.'];
  return {...evidenceEmpty(checkedAt),status:stale?'stale':'ready',windowStart:perf.window_start,windowEnd:perf.window_end,closed:stats.closed,up:stats.up,down:stats.down,open:stats.open,grossMonthly:perf.pct_month_gross,allocMonthly:finite(perf.pct_month_allocation)&&perf.pct_month_allocation>0?perf.pct_month_allocation:null,grossSinceStart,openVsCost:open.vs_cost_pct,allocatedInTrades:open.allocated_in_trades_pct,rows,durationSummary,latestClose:rows.reduce((last,row)=>!last||row.closedAt>last?row.closedAt:last,null),sourceMeta:meta('evidence',checkedAt,null,'not-supplied',stale?'stale-coverage':'unknown',limits,{coverage:{start:perf.window_start,end:perf.window_end},coverageMaxAgeSeconds:EVIDENCE_MAX_AGE_MS/1000,publishedGraphicUrl:SOURCE_URLS.publishedGraphic}),...(stale?{error:'Signal coverage window is more than two days old; generation time is not supplied.'}:{})};
}
export function normalizeMarket(data,{checkedAt=new Date().toISOString(),now=Date.now()}={}) {
  const asOf=stamp(data?.updated_at);
  if(!record(data)||!asOf||typeof data.stale!=='boolean'||!record(data.symbols)||!Array.isArray(data.tfs)||!data.tfs.includes('1d')||!data.tfs.every(tf=>['1h','4h','1d','1w'].includes(tf))||new Set(data.tfs).size!==data.tfs.length)throw new Error('Market context schema or observation time is invalid.');
  if(Date.parse(asOf)>now+60000)throw new Error('Market observation time is in the future.');
  const entries=Object.entries(data.symbols);
  if(!entries.length||entries.length>100)throw new Error('Market symbol coverage is invalid.');
  const rows=entries.map(([name,values])=>{
    if(!symbol(name)||!record(values)||!data.tfs.every(tf=>finite(values[tf])))throw new Error('A market reading is invalid.');
    return {symbol:name,values:Object.fromEntries(data.tfs.map(tf=>[tf,values[tf]]))};
  });
  const summaryByTimeframe=Object.fromEntries(data.tfs.map(tf=>[tf,{above:rows.filter(r=>r.values[tf]>0).length,below:rows.filter(r=>r.values[tf]<0).length,flat:rows.filter(r=>r.values[tf]===0).length,total:rows.length}]));
  const {above,below,flat}=summaryByTimeframe['1d'];
  const stale=data.stale||now-Date.parse(asOf)>MARKET_MAX_AGE_MS;
  return {...marketEmpty(checkedAt),status:stale?'stale':'ready',asOf,stale,summary:`Daily trend readings: ${above} above and ${below} below their recent average${flat?`; ${flat} level`:''}. Market context, not trading instructions.`,rows,timeframes:[...data.tfs],summaryByTimeframe,sourceMeta:meta('market',checkedAt,asOf,'observation',stale?'stale':'observed',['Market scores are not percentage returns, customer holdings, a recommendation or a forecast.'],{maxAgeSeconds:MARKET_MAX_AGE_MS/1000,upstreamStale:data.stale}),...(stale?{error:'Market observation is marked stale or more than ten minutes old.'}:{})};
}
export function normalizeEpisodes(data,{checkedAt=new Date().toISOString(),now=Date.now()}={}) {
  if(!record(data)||!Array.isArray(data.rows)||!Array.isArray(data.history)||!Array.isArray(data.checked)||!data.checked.every(symbol)||new Set(data.checked).size!==data.checked.length)throw new Error('Public episode schema is invalid.');
  const event=row=>{
    const triggeredAt=stamp(row?.trigger_ts),lowAt=stamp(row?.low_ts);
    if(!record(row)||!symbol(row.symbol)||!triggeredAt||!lowAt||triggeredAt>lowAt||Date.parse(lowAt)>now+60000)throw new Error('An episode event timestamp or symbol is invalid.');
    return {symbol:row.symbol,triggeredAt,lowAt};
  };
  const rows=data.rows.map(row=>{
    if(!['ACTIVE','STABILIZING','CONFIRMED'].includes(row?.state)||!finite(row.depth_pct)||row.depth_pct<0)throw new Error('An active episode is invalid.');
    return {...event(row),state:row.state,depthPct:row.depth_pct};
  });
  const history=data.history.map(row=>{
    if(!finite(row?.drop_pct)||row.drop_pct<0||typeof row.recovered!=='boolean')throw new Error('A historical episode is invalid.');
    return {...event(row),dropPct:row.drop_pct,reclaimed:row.recovered};
  });
  const latestEventAt=[...rows,...history].reduce((last,row)=>!last||row.lowAt>last?row.lowAt:last,null);
  return {...episodesEmpty(checkedAt),status:'ready',rows,history,checked:[...data.checked],latestEventAt,sourceMeta:meta('episodes',checkedAt,null,'not-supplied','unknown',['The endpoint supplies event times, not a response-generation or latest-quote time. Current freshness cannot be verified.','Provider state labels and pre-drop-high reclamation describe market episodes, not strategy profit, buy/sell signals or recovery promises.','Model odds and wick-floor forecasts are not imported. Historical strategy crash replays on Pricing are a different dataset.']),definition:'A provider-identified sharp market drop. Drop percentages describe price movement within the episode; they are not NoGuru returns.'};
}
async function load(id,normalize,empty,{signal}={}) {
  const checkedAt=new Date().toISOString();
  try{return normalize(await freshJSON(SOURCE_URLS[id],signal),{checkedAt,now:Date.now()});}
  catch(error){return {...empty(checkedAt),error:message(error)};}
}
// Trading money whose monthly result, at a given monthly pace, equals a monthly fee. Rounded up to the next 10 so the figure never understates it.
export const paybackCapital = (fee, ratePct) => (Number.isFinite(ratePct) && ratePct > 0 ? Math.ceil(fee / (ratePct / 100) / 10) * 10 : null);
export const loadEvidence = options => load('evidence',normalizeEvidence,evidenceEmpty,options);
export const loadMarket = options => load('market',normalizeMarket,marketEmpty,options);
export const loadEpisodes = options => load('episodes',normalizeEpisodes,episodesEmpty,options);
export async function loadLiveSources(options={}) {
  const [evidence,market,episodes]=await Promise.all([loadEvidence(options),loadMarket(options),loadEpisodes(options)]);
  return {evidence,market,episodes};
}
