// Public market context only. No member calls, credentials, persistent cache,
// saved-response fallback, strategy results or customer-account reconstruction.
import { normalizeMarket, normalizeEpisodes } from './pilot/data.js';
const BASE = 'https://noguru.io/api/public/';
const definitions = {
  episodes: ['flush-state', 'Market-drop episodes'], oiFlow: ['oi-flow', 'Price and open interest'],
  trend: ['trend-matrix', 'Trend matrix'], sessions: ['session-levels', 'Session price ranges'],
  funding: ['funding-board', 'Perpetual funding'], longShort: ['long-short', 'Long/short account shares'],
  sentiment: ['fng', 'Fear & Greed'],     // the liquidations panel is retired: its source feed lapsed in August 2026
  global: ['global', 'Market overview'], calendar: ['calendar', 'FOMC and CME calendar'],
};
export const DASHBOARD_SOURCES = Object.freeze(Object.fromEntries(Object.entries(definitions).map(([key,[path,label]]) => [key,Object.freeze({url:BASE+path,label})])));
export const DASHBOARD_KEYS = Object.freeze(Object.keys(DASHBOARD_SOURCES));
const TEN_MINUTES = 600000, DAY = 86400000, FUTURE_TOLERANCE = 60000;
const record = v => v !== null && typeof v === 'object' && !Array.isArray(v);
const finite = v => typeof v === 'number' && Number.isFinite(v);
const positive = v => finite(v) && v > 0;
const nonnegative = v => finite(v) && v >= 0;
const percent = v => finite(v) && v >= 0 && v <= 100;
const change = v => finite(v) && v >= -100;
const symbol = v => typeof v === 'string' && /^[A-Z0-9]{2,24}$/.test(v);
const string = (v,max=300) => typeof v === 'string' && v.length > 0 && v.length <= max && !/[<>\u0000-\u0008]/.test(v);
const ensure = (ok,message) => { if (!ok) throw new Error(message); };
const dateOnly = v => typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v) && Number.isFinite(Date.parse(v+'T00:00:00Z')) && new Date(v+'T00:00:00Z').toISOString().slice(0,10) === v;
function timestamp(v) {
  if(typeof v !== 'string') return null;
  const t=v.replace(/^(\d{4}-\d{2}-\d{2}) /,'$1T');
  const m=/^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,9})?(Z|[+-]\d{2}:\d{2})$/.exec(t);
  if(!m || !dateOnly(m[1]) || +m[2]>23 || +m[3]>59 || +m[4]>59 || (m[5]!=='Z' && (+m[5].slice(1,3)>23 || +m[5].slice(4)>59))) return null;
  const ms=Date.parse(t); return Number.isFinite(ms)?new Date(ms).toISOString():null;
}
function observed(v,now) {
  const t=timestamp(v); ensure(t && Date.parse(t)<=now+FUTURE_TOLERANCE,'Source timestamp is invalid or in the future.'); return t;
}
function rows(v,{empty=false,max=500}={}) { ensure(Array.isArray(v) && v.length<=max && (empty || v.length>0),'Source rows are missing or invalid.'); return v; }
function uniqueSymbols(items) { ensure(items.every(r=>record(r)&&symbol(r.symbol)) && new Set(items.map(r=>r.symbol)).size===items.length,'Symbol coverage is invalid or duplicated.'); }
function sourceResult(key,data,ctx,{asOf=null,asOfKind='not-supplied',maxAgeMs=null,upstreamStale=false,unknown=false,limitations=[],...extra}={}) {
  const stale=upstreamStale || !!(asOf && maxAgeMs && ctx.now-Date.parse(asOf)>maxAgeMs);
  const status=stale?'stale':(unknown||!asOf?'unknown':'ready');
  const staleReason=upstreamStale?'The source marks this response stale.':stale?'Source timestamp is older than the local review threshold.':null;
  return {key,status,data,error:null,source:{...DASHBOARD_SOURCES[key],checkedAt:ctx.checkedAt,fetchedAt:ctx.checkedAt,asOf,asOfKind,freshness:stale?'stale':status==='ready'?'observed':'unknown',staleReason,maxAgeSeconds:maxAgeMs?maxAgeMs/1000:null,limitations,...extra}};
}
function unavailable(key,checkedAt,error) {
  return {key,status:'unavailable',data:null,error,source:{...DASHBOARD_SOURCES[key],checkedAt,fetchedAt:checkedAt,asOf:null,asOfKind:'not-supplied',freshness:'unavailable',staleReason:null,maxAgeSeconds:null,limitations:['No saved readings or invented zero values are substituted.']}};
}
const priceBasis='Quote-price units; the public feed does not identify the quote currency or execution venue.';
const unknownTime='No response-generation or latest-quote observation time is supplied. Fetch time is not observation time.';
function episodes(raw,ctx) {
  const base=normalizeEpisodes(raw,ctx);
  uniqueSymbols(raw.rows);
  ensure(raw.rows.every(r=>raw.checked.includes(r.symbol)) && raw.history.every(r=>raw.checked.includes(r.symbol)),'Episode symbols disagree with the checked public universe.');
  const range = r => {
    ensure(positive(r.low)&&positive(r.pre_high)&&r.pre_high>=r.low,'An episode price range is invalid.');
    return {low:r.low,preHigh:r.pre_high};
  };
  const data={rows:base.rows.map((r,i)=>{
    const src=raw.rows[i];const prices=range(src);
    ensure(positive(src.last)&&r.depthPct<=100 && Math.abs((src.pre_high-src.low)/src.pre_high*100-r.depthPct)<0.05,'Episode depth, price or units disagree.');
    const reclaimLevels=[['r24',0.236,'23.6% of drop'],['r38',0.382,'38.2% of drop'],['r50',0.5,'50% of drop']].map(([k,fraction,label])=>{
      const expected=src.low+(src.pre_high-src.low)*fraction;
      ensure(positive(src[k])&&Math.abs(src[k]-expected)<=Math.max(1e-8,expected*1e-6),'Episode retracement level disagrees with its price range.');
      return {fraction,label,price:src[k],atOrAbove:src.last>=src[k]};
    });
    return {...r,...prices,last:src.last,reclaimLevels};
  }),history:base.history.map((r,i)=>({...r,...range(raw.history[i])})),checked:base.checked,priceUnit:'source unspecified',definition:base.definition};
  return sourceResult('episodes',data,ctx,{limitations:[unknownTime,priceBasis,'Retracement fractions describe how far the latest supplied price is above the episode low. A marker is only last price ≥ level, not proof a candle closed there.','Provider state labels are not buy/sell signals or recovery promises. Model odds, wick-floor estimates and bar-count timing are intentionally excluded.'],latestEventAt:base.latestEventAt});
}
function oiFlow(raw,ctx) {
  const rr=rows(raw.rows);uniqueSymbols(rr);
  const labels=['longs opening','shorts opening','longs closing','short covering','quiet'];
  const data={timeframes:['15m','1h'],rows:rr.map(r=>({symbol:r.symbol,values:Object.fromEntries(['15m','1h'].map(tf=>{
    const v=r[tf];ensure(record(v)&&labels.includes(v.label)&&change(v.dp)&&change(v.doi),'A price/open-interest change or reading is invalid.');
    return [tf,{label:v.label,priceChangePct:v.dp,openInterestChangePct:v.doi}];
  }))}))};
  return sourceResult('oiFlow',data,ctx,{limitations:[unknownTime,'Percentage change in price and reported open interest over each stated window. Open interest is outstanding futures exposure, not spot volume.','The source labels are heuristic interpretations of price and open-interest direction, not proof of who opened or closed a position and not trading instructions.']});
}
function trend(raw,ctx) {
  const d=normalizeMarket(raw,ctx);
  return sourceResult('trend',{rows:d.rows,timeframes:d.timeframes,summaryByTimeframe:d.summaryByTimeframe,definition:d.definition},ctx,{asOf:d.asOf,asOfKind:'source updated_at',maxAgeMs:TEN_MINUTES,upstreamStale:raw.stale,limitations:d.sourceMeta.limitations});
}
function sessions(raw,ctx) {
  const rr=rows(raw.symbols);uniqueSymbols(rr);const asOf=observed(raw.as_of,ctx.now);
  ensure(record(raw.session_windows_utc)&&record(raw.tradfi)&&typeof raw.tradfi.open==='boolean','Session windows or venue state are missing.');
  const windowsUtc={};for(const k of ['asia','london','new_york','prior_day']){ensure(string(raw.session_windows_utc[k],80),'A UTC window label is invalid.');windowsUtc[k]=raw.session_windows_utc[k];}
  const bands=r=>{
    ensure(record(r)&&positive(r.high)&&positive(r.low)&&r.high>=r.low&&typeof r.taken_out_high==='boolean'&&typeof r.taken_out_low==='boolean','A session range is invalid.');
    return {high:r.high,low:r.low,takenOutHigh:r.taken_out_high,takenOutLow:r.taken_out_low};
  };
  const normalized=rr.map(r=>{
    ensure(positive(r.price)&&record(r.sessions),'A session quote is invalid.');const out={};
    for(const key of ['asia','london','new_york']) {
      const v=r.sessions[key];ensure(record(v)&&['not_started','in_progress','complete'].includes(v.status),'A session status is invalid.');
      const start=timestamp(v.start),end=timestamp(v.end);ensure(start&&end&&start<end,'A session time window is invalid.');
      if(v.status==='complete')ensure(Date.parse(end)<=ctx.now+FUTURE_TOLERANCE,'A completed session ends in the future.');
      const band=v.status==='not_started'&&v.high===null&&v.low===null?{high:null,low:null,takenOutHigh:false,takenOutLow:false}:bands(v);
      out[key]={status:v.status,start,end,...band};
    }
    return {symbol:r.symbol,price:r.price,sessions:out,priorDay:bands(r.prior_day)};
  });
  const venues=rows(raw.tradfi.venues,{max:20}).map(v=>{ensure(record(v)&&string(v.venue,50)&&typeof v.open==='boolean'&&(!v.reason||string(v.reason,100))&&(!v.holiday||string(v.holiday,100)),'A venue status is invalid.');return {venue:v.venue,open:v.open,reason:v.reason||null,holiday:v.holiday||null};});
  ensure(!raw.tradfi.note||string(raw.tradfi.note,500),'Venue note is invalid.');
  return sourceResult('sessions',{rows:normalized,windowsUtc,venues,venueNote:raw.tradfi.note||null,priceUnit:'source unspecified'},ctx,{asOf,asOfKind:'source as_of',maxAgeMs:TEN_MINUTES,limitations:[priceBasis,'Fixed UTC crypto price windows, not an assertion that a traditional venue is open. Keep closed/weekend/holiday venue labels alongside ranges.','High/low breaches describe observed prices; they do not establish the next direction.']});
}
function funding(raw,ctx) {
  const rr=rows(raw.rows);uniqueSymbols(rr);const asOf=observed(raw.as_of,ctx.now);
  if(raw.rate_unit!==undefined)ensure(raw.rate_unit==='fraction','Funding rate unit changed.');
  const result=rr.map(r=>{
    ensure(finite(r.rate)&&Math.abs(r.rate)<=1&&finite(r.rate_24h)&&Math.abs(r.rate_24h)<=3,'Funding rates must be finite fractions, not percentage strings or percentage-point units.');
    const settledAt=observed(r.funding_time,ctx.now);ensure(settledAt<=asOf,'Funding settlement is after the supplied latest settlement time.');
    return {symbol:r.symbol,ratePct:r.rate*100,sum24hPct:r.rate_24h*100,settledAt};
  });
  return sourceResult('funding',{rows:result},ctx,{asOf,asOfKind:'latest supplied funding settlement',maxAgeMs:DAY,unknown:true,limitations:['Rates are fractions in the source, converted ×100 to percentages. The latest rate and the reported 24-hour sum are different periods.','Positive funding means longs pay shorts. Negative means shorts pay longs. These are perpetual-market payments, not spot strategy returns.','Settlement times vary by row. The payload does not provide each market’s funding interval; no uniform eight-hour rate or annualized yield is asserted.','Latest settlement time is not feed generation time; current retrieval does not certify a fresh quote.']});
}
function longShort(raw,ctx) {
  const rr=rows(raw.rows);uniqueSymbols(rr);
  const result=rr.map(r=>{
    ensure(percent(r.long_pct)&&percent(r.short_pct)&&Math.abs(r.long_pct+r.short_pct-100)<=0.11&&positive(r.ratio),'Long/short account shares or ratio are invalid.');
    ensure(r.short_pct>0&&Math.abs(r.long_pct/r.short_pct-r.ratio)<=Math.max(0.03,r.ratio*0.01),'Long/short ratio disagrees with account shares.');
    return {symbol:r.symbol,longPct:r.long_pct,shortPct:r.short_pct,ratio:r.ratio};
  });
  return sourceResult('longShort',{rows:result},ctx,{limitations:[unknownTime,'The public dashboard describes these as Binance futures account shares, sampled hourly. They are not percentages of position notional or all traders worldwide.','The long/short ratio is long accounts divided by short accounts. It is positioning context, not a prediction.']});
}
function liquidations(raw,ctx) {
  ensure(typeof raw.stale==='boolean','Liquidation stale flag is missing.');
  const rr=rows(raw.rows,{empty:true,max:366});
  ensure(rr.length,'The upstream liquidation history is unavailable; no daily rows are supplied.');
  const seen=new Set();const result=rr.map(r=>{
    ensure(record(r)&&dateOnly(r.day)&&!seen.has(r.day)&&Date.parse(r.day+'T00:00:00Z')<=ctx.now,'A liquidation day is invalid, duplicated or future.');seen.add(r.day);
    ensure(['btc_long_usd','btc_short_usd','eth_long_usd','eth_short_usd'].every(k=>nonnegative(r[k])),'Liquidation values must be non-negative USD amounts.');
    return {day:r.day,btcLongUsd:r.btc_long_usd,btcShortUsd:r.btc_short_usd,ethLongUsd:r.eth_long_usd,ethShortUsd:r.eth_short_usd};
  }).sort((a,b)=>b.day.localeCompare(a.day));
  const coverageEnd=result[0].day;const old=ctx.now-Date.parse(coverageEnd+'T23:59:59Z')>3*DAY;
  return sourceResult('liquidations',{rows:result},ctx,{upstreamStale:raw.stale||old,coverageEnd,limitations:['Reported daily USD notional of force-closed BTC/ETH futures positions, split by side; the public dashboard attributes it to CoinGlass.','Dates are daily coverage, not response-generation timestamps. Missing days are not silently filled with zeros. Source availability and aggregation venue coverage are not independently verified.','The source dashboard describes a 14-day view; the actual supplied rows and dates define available coverage.']});
}
function sentiment(raw,ctx) {
  const seen=new Set();const rr=rows(raw.rows,{max:366}).map(r=>{
    ensure(record(r)&&Number.isInteger(r.value)&&percent(r.value)&&string(r.label,60)&&typeof r.ts==='string'&&/^\d{9,10}$/.test(r.ts),'A sentiment score or epoch-seconds timestamp is invalid.');
    const ms=Number(r.ts)*1000;ensure(ms<=ctx.now+FUTURE_TOLERANCE&&!seen.has(ms),'A sentiment date is future or duplicated.');seen.add(ms);
    return {value:r.value,label:r.label,asOf:new Date(ms).toISOString()};
  }).sort((a,b)=>b.asOf.localeCompare(a.asOf));
  const current=rr[0],weekAgo=rr.find(r=>Date.parse(r.asOf)===Date.parse(current.asOf)-7*DAY)||null;
  return sourceResult('sentiment',{rows:rr,current,weekAgo},ctx,{asOf:current.asOf,asOfKind:'daily index timestamp',maxAgeMs:2*DAY,limitations:['Alternative.me sentiment index as attributed by the public dashboard. Scale 0–100, not a percentage return or probability.','Daily timestamps come from source epoch seconds. The week comparison is shown only when the exact seven-day-prior reading is supplied.','Sentiment extremes do not guarantee a reversal or establish a trade.']});
}
function global(raw,ctx) {
  ensure(positive(raw.total_mcap_usd)&&percent(raw.btc_dominance)&&percent(raw.eth_dominance)&&raw.btc_dominance+raw.eth_dominance<=100.01&&change(raw.mcap_change_24h_pct),'Global market values or percentages are invalid.');
  ensure(raw.mcap_change_source==='coingecko_top250','Market-change population changed; review is required.');
  if(raw.mcap_change_24h_pct_cg!==undefined)ensure(change(raw.mcap_change_24h_pct_cg),'Alternate global-market change is invalid.');
  const asOf=observed(raw.as_of,ctx.now);
  return sourceResult('global',{totalMarketCapUsd:raw.total_mcap_usd,btcDominancePct:raw.btc_dominance,ethDominancePct:raw.eth_dominance,change24hPct:raw.mcap_change_24h_pct,changeBasis:'CoinGecko top 250 (source-labelled)',alternateGlobalChange24hPct:raw.mcap_change_24h_pct_cg??null},ctx,{asOf,asOfKind:'source as_of',maxAgeMs:TEN_MINUTES,limitations:['Total capitalization is in USD; dominance is each asset’s share of the reported crypto market capitalization.','The primary 24-hour change is labelled coingecko_top250. Do not describe it as the percentage change of the total-market-cap figure.','An alternate CoinGecko global change is supplied separately; do not blend the two populations.']});
}
function calendar(raw,ctx) {
  const meetings=rows(raw.fomc,{max:30}).map(label=>{
    const m=typeof label==='string'&&/^(\d{4}-\d{2})-(\d{2})\/(\d{2})$/.exec(label);
    ensure(m,'An FOMC meeting range is invalid.');const start=m[1]+'-'+m[2],end=m[1]+'-'+m[3];
    ensure(dateOnly(start)&&dateOnly(end)&&start<=end,'An FOMC meeting date is invalid.');return {start,end,label};
  });
  ensure(new Set(meetings.map(m=>m.start)).size===meetings.length&&record(raw.cme),'Calendar coverage is invalid.');
  const cme={schedule:raw.cme.trading_since_2026_05_29,weekendMaintenance:raw.cme.weekend_maintenance,dailyMaintenance:raw.cme.daily_maintenance};
  ensure(Object.values(cme).every(v=>string(v,300)),'CME schedule text is incomplete.');
  ensure(cme.weekendMaintenance.includes('US Central Time')&&cme.dailyMaintenance.includes('US Central Time'),'CME maintenance timezone changed or is missing.');
  return sourceResult('calendar',{meetings,cme,timezone:'US Central Time'},ctx,{limitations:['FOMC dates and stated standard CME crypto maintenance windows were checked against official Fed/CME sources on 14 November 2026. Product exceptions apply, including Spot-Quoted futures. No feed-update timestamp is supplied.','FOMC dates are date-only meeting ranges, not an announcement time. Maintenance is given in US Central Time; no fixed UTC-offset conversion is applied.','Calendar context is not a volatility forecast, position-sizing instruction or claim that historical gaps will fill.'],references:[{label:'Federal Reserve FOMC calendars',url:'https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm',checkedDate:'2026-11-14'},{label:'CME cryptocurrency futures FAQ',url:'https://www.cmegroup.com/articles/faqs/frequently-asked-questions-cryptocurrency-futures.html',checkedDate:'2026-11-14'}]});
}
const normalizers={episodes,oiFlow,trend,sessions,funding,longShort,liquidations,sentiment,global,calendar};
export function normalizeDashboardWidget(key,raw,{now=Date.now(),checkedAt=new Date(now).toISOString()}={}) {
  ensure(Object.hasOwn(DASHBOARD_SOURCES,key),'Unknown dashboard widget.');
  ensure(record(raw),'Public source returned an unexpected structure.');
  ensure(finite(now)&&timestamp(checkedAt),'Normalization time is invalid.');
  return normalizers[key](raw,{now,checkedAt});
}
export async function loadDashboardWidget(key,{signal,timeoutMs=10000,fetchImpl=globalThis.fetch,now=()=>Date.now()}={}) {
  ensure(Object.hasOwn(DASHBOARD_SOURCES,key),'Unknown dashboard widget.');
  const controller=new AbortController();let timedOut=false;
  const abort=()=>controller.abort();
  if(signal?.aborted)controller.abort();else signal?.addEventListener('abort',abort,{once:true});
  const timer=setTimeout(()=>{timedOut=true;controller.abort();},timeoutMs);
  try {
    if(controller.signal.aborted)throw new Error('Request cancelled.');
    const response=await fetchImpl(DASHBOARD_SOURCES[key].url,{method:'GET',cache:'no-store',credentials:'omit',redirect:'error',signal:controller.signal,headers:{Accept:'application/json'}});
    if(!response.ok)throw new Error(`Public source returned HTTP ${response.status}.`);
    const raw=await response.json();const at=now();return normalizeDashboardWidget(key,raw,{now:at,checkedAt:new Date(at).toISOString()});
  } catch(error) {
    const message=timedOut?'Public source request timed out.':controller.signal.aborted?'Public source request cancelled.':error instanceof SyntaxError?'Public source returned invalid JSON.':error instanceof Error?error.message:'Public source unavailable.';
    return unavailable(key,new Date(now()).toISOString(),message);
  } finally {clearTimeout(timer);signal?.removeEventListener('abort',abort);}
}
export async function loadDashboard({onWidget,...options}={}) {
  const pairs=await Promise.all(DASHBOARD_KEYS.map(async key=>{
    const result=await loadDashboardWidget(key,options);
    if(typeof onWidget==='function') { try { onWidget(key,result); } catch { /* A view error must not suppress other source results. */ } }
    return [key,result];
  }));
  return Object.fromEntries(pairs);
}
