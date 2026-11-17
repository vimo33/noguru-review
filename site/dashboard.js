import { DASHBOARD_SOURCES, loadDashboard } from './dashboard-data.js';

export function createDashboardController(root) {
  if (!root || typeof root.querySelector !== 'function') throw new TypeError('A dashboard root element is required.');
  const doc = root.ownerDocument;
  const win = doc.defaultView;
  const $ = selector => root.querySelector(selector);
const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const valid = value => typeof value === 'number' && Number.isFinite(value);
const number = (value, digits=2) => valid(value) ? value.toLocaleString('en-US',{maximumFractionDigits:digits,minimumFractionDigits:digits}) : '—';
const pct = (value, digits=2, signed=true) => valid(value) ? `${signed && value>0 ? '+' : ''}${number(value,digits)}%` : '—';
const price = value => valid(value) ? new Intl.NumberFormat('en-US',{maximumSignificantDigits:8}).format(value) : '—';
const compact = value => valid(value) ? new Intl.NumberFormat('en-US',{notation:'compact',maximumFractionDigits:2}).format(value) : '—';
const tone = value => value>0?'tone-positive':value<0?'tone-negative':'';
const date = value => value && Number.isFinite(Date.parse(value)) ? new Intl.DateTimeFormat('en-GB',{day:'2-digit',month:'short',year:'numeric',timeZone:'UTC'}).format(new Date(value)) : 'Not supplied';
const stamp = value => value && Number.isFinite(Date.parse(value)) ? `${date(value)}, ${new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',timeZone:'UTC'}).format(new Date(value))} UTC` : 'Not supplied';
const time = value => value && Number.isFinite(Date.parse(value)) ? `${new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',timeZone:'UTC'}).format(new Date(value))} UTC` : 'Not supplied';
const table = (headers,body,caption='',classes='') => `<div class="table-wrap" tabindex="0" role="region" aria-label="${escape(caption || 'Data table')}"><table class="${escape(classes)}">${caption?`<caption>${escape(caption)}</caption>`:''}<thead><tr>${headers.map(h=>`<th scope="col">${escape(h)}</th>`).join('')}</tr></thead><tbody>${body}</tbody></table></div>`;
const details = (label,html,id) => `<details class="data-details" data-preserve="${id}"><summary>${escape(label)}</summary>${html}</details>`;
const splitRows = (rows,limit,render,headers,caption,classes='') => table(headers,rows.slice(0,limit).map(render).join(''),caption,classes)+(rows.length>limit?details(`All ${rows.length} supplied rows`,table(headers,rows.map(render).join(''),caption,classes),'all-rows'):'');
const safeLink = (url,label) => /^https:\/\//.test(url || '') ? `<a href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(label)} ↗</a>` : escape(label);
let selectedTrend='1d';

function globalView(d) {
  return `<div class="global-stat">${compact(d.totalMarketCapUsd)} <small>USD</small></div><p class="stat-label">Total crypto market capitalization</p><div class="global-change"><b>${pct(d.change24hPct)}</b><span>24h · ${escape(d.changeBasis)}</span></div><p class="note" style="color:#c9d3c6">This change uses the top-250 population, not the total-cap figure above.</p><div class="market-share"><div class="share-bar" aria-hidden="true"><span class="share-btc" style="width:${d.btcDominancePct}%"></span><span class="share-eth" style="width:${d.ethDominancePct}%"></span></div><div class="share-labels"><span>BTC <b>${pct(d.btcDominancePct,2,false)}</b></span><span>ETH <b>${pct(d.ethDominancePct,2,false)}</b></span><span>Share of market cap</span></div></div>${valid(d.alternateGlobalChange24hPct)?`<p class="note" style="color:#c9d3c6">Separate full-market CoinGecko change: ${pct(d.alternateGlobalChange24hPct)} over 24h.</p>`:''}`;
}
function sentimentView(d) {
  const c=d.current;
  return `<p>A daily sentiment index, on a scale from 0 to 100.</p><div class="sentiment-number"><b>${number(c.value,0)}</b><small>/ 100</small></div><div class="sentiment-label">${escape(c.label)}</div><div class="gauge" aria-hidden="true"><i style="left:calc(${c.value}% - 2px)"></i></div><div class="gauge-labels"><span>Fear · 0</span><span>Greed · 100</span></div><p class="comparison">${d.weekAgo?`Seven days before: <b>${number(d.weekAgo.value,0)}</b> · ${escape(d.weekAgo.label)}`:'A matched seven-day comparison was not supplied.'}</p>${details('See the supplied daily readings',table(['Date (UTC)','Index','Source label'],d.rows.map(r=>`<tr><td>${date(r.asOf)}</td><td>${number(r.value,0)}</td><td>${escape(r.label)}</td></tr>`).join(''),'Daily Fear & Greed readings'),'sentiment-history')}`;
}
function trendView(d) {
  if(!d.timeframes.includes(selectedTrend)) selectedTrend=d.timeframes[0];
  const summary=d.summaryByTimeframe[selectedTrend];
  const rows=d.rows.map(r=>`<tr><th scope="row">${escape(r.symbol)}</th>${d.timeframes.map(tf=>`<td><span class="score ${r.values[tf]<0?'negative':r.values[tf]>0?'positive':''} ${tf===selectedTrend?'selected':''}">${valid(r.values[tf])?`${r.values[tf]>0?'+':''}${number(r.values[tf])}`:'—'}</span></td>`).join('')}</tr>`).join('');
  return `<div class="trend-top"><p><b>${summary?.above??'—'} above</b> · <b>${summary?.below??'—'} below</b> recent average on ${escape(selectedTrend)}${summary?.flat?` · ${summary.flat} at average`:''}</p><div class="segmented" role="group" aria-label="Trend summary timeframe">${d.timeframes.map(tf=>`<button type="button" data-trend="${escape(tf)}" aria-pressed="${tf===selectedTrend}">${escape(tf)}</button>`).join('')}</div></div><div class="matrix-layout">${table(['Asset',...d.timeframes],rows,'Distance from recent average · ATR units','matrix')}<div class="matrix-explainer"><b>One market.<br>Four perspectives.</b><p>Positive means above the recent average; negative means below it. The number describes distance in typical bar-movement units (ATR), not a percentage return.</p><p class="note">A 1-hour reading and a weekly reading need not agree. Neither tells you what happens next.</p></div></div>`;
}
function episodeCard(r) {
  return `<div class="flush-item"><h4>${escape(r.symbol)} <span class="flush-state">${escape(r.state.toLowerCase())}</span></h4><div class="flush-depth">${pct(r.depthPct,2,false)} <small>episode decline</small></div><p class="flush-prices">Last ${price(r.last)} · Low ${price(r.low)}</p><details data-preserve="episode-${escape(r.symbol)}"><summary>Price levels &amp; timing</summary><p class="note">From pre-drop high ${price(r.preHigh)} to low ${price(r.low)}. Quote unit not supplied.</p>${r.reclaimLevels.map(l=>`<div class="reclaim"><span>${escape(l.label)}<br>${price(l.price)}</span><span>${l.atOrAbove?'Last ≥ level':'Last < level'}</span></div>`).join('')}<p class="note">Triggered ${stamp(r.triggeredAt)}<br>Low ${stamp(r.lowAt)}</p></details></div>`;
}
function episodesView(d) {
  const history=d.history.map(r=>`<tr><th scope="row">${escape(r.symbol)}</th><td>${date(r.triggeredAt)}<small>Low ${date(r.lowAt)}</small></td><td>${pct(r.dropPct,2,false)}</td><td>${r.reclaimed?'Reclaimed':'Not reclaimed'}</td></tr>`).join('');
  return `<p>Provider-labelled market-drop episodes. Decline runs from each episode’s pre-drop high to its low.</p>${d.rows.length?`<div class="flush-list">${d.rows.slice(0,4).map(episodeCard).join('')}</div>${d.rows.length>4?details(`All ${d.rows.length} current episodes`,`<div class="flush-list">${d.rows.map(episodeCard).join('')}</div>`,'episodes-all'):''}`:'<p class="empty">No active episodes are reported in this response.</p>'}<p class="note">Levels compare the latest supplied quote with part of the drop regained. They do not establish a candle close or promise recovery. Quote currency and venue are not supplied.</p>${details(`Recent episode history · ${d.history.length} supplied`,history?table(['Asset','Trigger / low','Decline','Source state'],history,'Episode history · source-defined price declines'):'<p class="note">No history rows supplied.</p>','episode-history')}<p class="note">Public selection: ${d.checked.map(escape).join(', ')}.</p>`;
}
function oiView(d) {
  const row=r=>`<tr><th scope="row">${escape(r.symbol)}</th>${d.timeframes.map(tf=>{const v=r.values[tf];return `<td><b>${escape(v.label)}</b><span class="${tone(v.priceChangePct)}">Price ${pct(v.priceChangePct)}</span><small>OI ${pct(v.openInterestChangePct)}</small></td>`;}).join('')}</tr>`;
  return `<p>Price change and change in outstanding futures exposure. Labels are the provider’s interpretation, not proof of who traded.</p>${splitRows(d.rows,5,row,['Asset',...d.timeframes], 'Price and open-interest percentage changes','oi-table')}<p class="note">Open interest is outstanding futures exposure, not spot trading volume.</p>`;
}
function sessionBlock(r,d) {
  const label={asia:'Asia',london:'London',new_york:'New York'};
  const row=(name,s,window)=>`<tr><th scope="row">${escape(name)}<small>${escape(window||'')}</small><small>${!valid(s.high)||!valid(s.low)||s.high===s.low?'Range position unavailable':r.price>s.high?'Now above range':r.price<s.low?'Now below range':'Now within range'}</small></th><td class="numeric">${price(s.high)}<small>${s.takenOutHigh===null?'High so far':s.takenOutHigh?'High breached':'High not breached'}</small></td><td class="numeric">${price(s.low)}<small>${s.takenOutLow===null?'Low so far':s.takenOutLow?'Low breached':'Low not breached'}</small></td></tr>`;
  return `<div class="session-block"><h4 class="session-symbol">${escape(r.symbol)} <span class="session-price">${price(r.price)}</span></h4>${table(['Window','High','Low'],Object.entries(r.sessions).map(([key,s])=>row(label[key],s,`${d.windowsUtc[key]} · ${s.status.replaceAll('_',' ')}`)).join('')+row('Prior day',r.priorDay,d.windowsUtc.prior_day),`${r.symbol} quote-price ranges`)}<p class="note">${Object.values(r.sessions).map(s=>`${date(s.start)}`).filter((v,i,a)=>a.indexOf(v)===i).join(' · ')} · UTC windows</p></div>`;
}
function sessionsView(d) {
  return `<p>Crypto price ranges in fixed UTC windows. These are price observations, not exchange opening hours.</p><div class="venue-note">${d.venues.map(v=>`${escape(v.venue)}: <b>${v.open?'open':'closed'}</b>${v.reason?` (${escape(v.reason)})`:''}${v.holiday?` · ${escape(v.holiday)}`:''}`).join(' · ')}${d.venueNote?`<br>${escape(d.venueNote)}`:''}</div><div class="sessions-grid">${d.rows.slice(0,3).map(r=>sessionBlock(r,d)).join('')}</div>${d.rows.length>3?details(`All ${d.rows.length} public symbols`,`<div class="sessions-grid">${d.rows.map(r=>sessionBlock(r,d)).join('')}</div>`,'all-sessions'):''}<p class="note">All prices use the source’s quote-price units. Quote currency and execution venue are not identified.</p>`;
}
function fundingView(d) {
  const row=r=>`<tr><th scope="row">${escape(r.symbol)}</th><td class="numeric ${tone(r.ratePct)}">${pct(r.ratePct,4)}<small>${date(r.settledAt)}<br>${time(r.settledAt)}</small></td><td class="numeric ${tone(r.sum24hPct)}">${pct(r.sum24hPct,4)}</td></tr>`;
  return `<p>Latest reported settlement rate and the reported 24-hour sum. Settlement timing varies by market.</p>${splitRows(d.rows,6,row,['Asset','Latest settlement','24h sum'],'Source-selected perpetual markets')}<p class="note">Positive: longs pay shorts. Negative: shorts pay longs. These are futures funding payments, not spot-trading returns.</p>`;
}
function longShortView(d) {
  return `<p>Binance futures account shares, as described by the source. This is account count, not position value.</p>${table(['Asset','Long / short accounts','Ratio'],d.rows.map(r=>`<tr><th scope="row">${escape(r.symbol)}</th><td>${pct(r.longPct,1,false)} long · ${pct(r.shortPct,1,false)} short<div class="account-bar" aria-hidden="true"><i style="width:${r.longPct}%"></i></div></td><td class="numeric">${number(r.ratio)}</td></tr>`).join(''),'Source-reported account positioning','ratio-table')}<p class="note">Ratio = long accounts ÷ short accounts. The share does not predict the next price move.</p>`;
}
function liquidationsView(d) {
  const rows=[...d.rows].sort((a,b)=>a.day.localeCompare(b.day)).slice(-14);
  const bars=rows.map(r=>({...r,long:r.btcLongUsd+r.ethLongUsd,short:r.btcShortUsd+r.ethShortUsd}));
  const max=Math.max(...bars.map(r=>r.long+r.short),1),w=660,h=220,pad=40,base=180,step=(w-2*pad)/bars.length,bw=Math.max(3,Math.min(28,step*.6));
  const svg=`<svg class="chart" viewBox="0 0 ${w} ${h}" role="img" aria-label="Daily reported BTC and ETH liquidation notional, split into long and short positions. Exact amounts in the table below."><line class="gridline" x1="${pad}" y1="${base}" x2="${w-pad}" y2="${base}"/><text x="${pad}" y="16">USD · daily notional</text>${bars.map((r,i)=>{const x=pad+i*step+(step-bw)/2,lh=r.long/max*135,sh=r.short/max*135;return `<rect x="${x}" y="${base-lh}" width="${bw}" height="${lh}" fill="#789184"/><rect x="${x}" y="${base-lh-sh}" width="${bw}" height="${sh}" fill="#d4a17c"/>${i===0||i===bars.length-1||i%3===0?`<text x="${x+bw/2}" y="204" text-anchor="middle">${escape(r.day.slice(5))}</text>`:''}`;}).join('')}<text x="${w-pad}" y="16" text-anchor="end">Scale max ${compact(max)} USD</text></svg>`;
  return `<p>Reported daily USD notional of force-closed BTC and ETH futures positions.</p>${svg}<div class="chart-legend"><span>Long positions</span><span>Short positions</span></div><p class="note">${rows.length} supplied days shown, ${date(rows[0]?.day)}–${date(rows.at(-1)?.day)}. Missing dates are not treated as zero.</p>${details('Exact daily amounts',table(['Date','BTC long USD','BTC short USD','ETH long USD','ETH short USD'],rows.map(r=>`<tr><th scope="row">${escape(r.day)}</th><td>${number(r.btcLongUsd,0)}</td><td>${number(r.btcShortUsd,0)}</td><td>${number(r.ethLongUsd,0)}</td><td>${number(r.ethShortUsd,0)}</td></tr>`).join(''),'Reported liquidation notional in USD'),'liquidation-table')}`;
}
function calendarView(d) {
  const today=new Date().toISOString().slice(0,10),upcoming=d.meetings.filter(m=>m.end>=today),past=d.meetings.filter(m=>m.end<today);
  const meetings=items=>`<ul class="event-list">${items.map(m=>`<li><b>${escape(new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'short',timeZone:'UTC'}).format(new Date(m.start)))}–${escape(m.end.slice(8))}</b><span>FOMC · ${escape(m.start.slice(0,4))}</span></li>`).join('')}</ul>`;
  return `<div class="calendar-grid"><div><h4>Upcoming listed FOMC meetings</h4>${upcoming.length?meetings(upcoming):'<p class="note">No future meetings are supplied in this response.</p>'}<p class="note">Date-only meeting ranges. Announcement times are not supplied.</p>${past.length?details(`Earlier listed meetings · ${past.length}`,meetings(past),'past-meetings'):''}</div><div><h4>CME crypto futures · provider schedule</h4><dl><dt>Trading schedule</dt><dd>24/7 standard crypto futures, with scheduled maintenance pauses.</dd><dt>Weekend maintenance</dt><dd>${escape(d.cme.weekendMaintenance)}</dd><dt>Weekday maintenance</dt><dd>${escape(d.cme.dailyMaintenance)}</dd></dl><p class="note">Times above are ${escape(d.timezone)}. Daylight saving can change the UTC offset. Product exceptions apply, including Spot-Quoted futures; check the linked CME schedule.</p></div></div>`;
}
const renderers={global:globalView,sentiment:sentimentView,trend:trendView,episodes:episodesView,oiFlow:oiView,sessions:sessionsView,funding:fundingView,longShort:longShortView,liquidations:liquidationsView,calendar:calendarView};
const statusLabels={ready:'Timestamped',stale:'Older reading',unknown:'Time unknown',unavailable:'Unavailable'};
const state={results:{},completed:0,loading:false,version:0,lastFinished:0,nextRefresh:0,controller:null,renderErrors:[],active:false,timer:null,listening:false,needsInitialRefresh:false};
function sourceView(r) {
  const s=r.source;
  const observation=s.asOf?(s.asOfKind==='latest supplied funding settlement'?`Latest settlement: ${stamp(s.asOf)}`:`Source time: ${stamp(s.asOf)}`):'Source observation time not supplied';
  return `<div class="source-dates"><span class="source-observation">${escape(observation)}</span><span>Fetched: ${escape(stamp(s.checkedAt))}</span></div>${s.staleReason?`<p>${escape(s.staleReason)}</p>`:''}<details data-preserve="source"><summary>Source &amp; how to read this</summary><p>${escape(s.label)} · ${escape(s.asOfKind.replaceAll('_',' '))}</p>${safeLink(s.url,'Open public source JSON')}${(s.references||[]).map(ref=>`<br>${safeLink(ref.url,ref.label)}`).join('')}<ul>${(s.limitations||[]).map(v=>`<li>${escape(v)}</li>`).join('')}</ul>${s.maxAgeSeconds?`<p>Local age check: ${number(s.maxAgeSeconds/3600,1)} hours. Retrieval time does not reset source age.</p>`:''}</details>`;
}
function renderWidget(key,r) {
  const article=$(`#widget-${key}`); if(!article)return;
  const opened=[...article.querySelectorAll('details[open]')].map(el=>el.dataset.preserve);
  const scrollPositions=[...article.querySelectorAll('.table-wrap')].map(el=>el.scrollLeft);
  const active=root.contains(doc.activeElement)?doc.activeElement?.dataset?.trend:null;
  article.dataset.status=r.status;article.querySelector('.status').textContent=statusLabels[r.status]||'Unavailable';
  const signature=JSON.stringify([r.status==='unavailable',r.data,key==='trend'?selectedTrend:null]);
  if(article.dataset.signature!==signature) {
    article.querySelector('.widget-body').innerHTML=r.status==='unavailable'?`<div class="empty"><b>A reading isn’t available just now.</b><p>${key==='liquidations'?'The source did not provide usable daily liquidation history. This is missing data, not zero liquidations.':'This source could not provide a usable response. The other parts of the dashboard can still be read.'}</p><p class="note">Use Refresh now to try again.</p></div>`:renderers[key](r.data);
    article.dataset.signature=signature;
  }
  article.querySelector('.widget-source').innerHTML=sourceView(r);
  for(const el of article.querySelectorAll('details'))if(opened.includes(el.dataset.preserve))el.open=true;
  article.querySelectorAll('.table-wrap').forEach((el,i)=>el.scrollLeft=scrollPositions[i]||0);
  if(active && key==='trend')article.querySelector(`[data-trend="${active}"]`)?.focus({preventScroll:true});
}
function summary() {
  const values=Object.values(state.results),available=values.filter(r=>r.status!=='unavailable').length;
  $('#refresh-status').textContent=state.loading?`Checking sources… ${state.completed} of ${Object.keys(DASHBOARD_SOURCES).length} returned`:`${available} sources available · ${values.length-available} unavailable`;
}
const canRun = () => state.active && root.isConnected && !root.closest('[hidden]') && !doc.hidden;
function updateClock() {
  const text=!state.active?'Checks paused while you read another page':doc.hidden?'Auto-refresh pauses while this tab is hidden':!$('#auto-refresh').checked?'Auto-refresh is off · refresh whenever you like':state.loading?'Public sources are checked independently':`Next check in ${Math.max(0,Math.ceil((state.nextRefresh-Date.now())/1000))}s · pauses when this tab is hidden`;
  $('#refresh-clock').textContent=text;
}
function clearTimer() {
  if(state.timer!==null)win.clearInterval(state.timer);
  state.timer=null;
}
function armTimer() {
  clearTimer();
  if(!canRun() || !$('#auto-refresh').checked)return;
  state.timer=win.setInterval(()=>{
    if(!canRun())return;
    updateClock();
    if(!state.loading && Date.now()>=state.nextRefresh)refresh();
  },1000);
}
function cancelPending() {
  state.version++;
  state.controller?.abort();state.controller=null;state.loading=false;
  $('#refresh-button').disabled=false;$('#refresh-button').removeAttribute('aria-busy');
}
async function refresh() {
  if(!canRun() || state.loading)return;
  state.needsInitialRefresh=false;
  const version=++state.version;state.controller=new AbortController();state.loading=true;state.completed=0;
  $('#refresh-button').disabled=true;$('#refresh-button').setAttribute('aria-busy','true');summary();updateClock();
  try {
    await loadDashboard({signal:state.controller.signal,onWidget:(key,result)=>{
      if(version!==state.version || !canRun())return;
      state.results[key]=result;state.completed++;
      try {renderWidget(key,result);} catch(error) {
        state.renderErrors.push({key,message:String(error)});
        const unavailable={...result,status:'unavailable',data:null};state.results[key]=unavailable;renderWidget(key,unavailable);
      }
      summary();
    }});
  } catch(error) {
    if(version===state.version && state.active)state.renderErrors.push({key:'controller',message:String(error)});
  } finally {
    if(version!==state.version || !state.active)return;
    state.controller=null;state.loading=false;state.lastFinished=Date.now();state.nextRefresh=Date.now()+60000;
    $('#refresh-button').disabled=false;$('#refresh-button').removeAttribute('aria-busy');summary();updateClock();
  }
}
function resumeVisible() {
  if(!canRun()){updateClock();return;}
  armTimer();
  if(state.needsInitialRefresh || !state.lastFinished || ($('#auto-refresh').checked && Date.now()>=state.nextRefresh))refresh();
  else updateClock();
}
function onRootClick(event) {
  const button=event.target?.closest?.('button');
  if(!button || !root.contains(button))return;
  if(button.id==='refresh-button'){refresh();return;}
  if(button.hasAttribute('data-trend') && state.results.trend?.data) {
    const requested=button.dataset.trend;
    if(!state.results.trend.data.timeframes.includes(requested))return;
    selectedTrend=requested;renderWidget('trend',state.results.trend);
  }
}
function onRootChange(event) {
  if(event.target!==$('#auto-refresh'))return;
  state.nextRefresh=Date.now()+60000;armTimer();updateClock();
}
function onVisibility() {
  if(doc.hidden){clearTimer();cancelPending();summary();updateClock();}
  else resumeVisible();
}
function onPageHide() {stop();}
function listen() {
  if(state.listening)return;
  root.addEventListener('click',onRootClick);root.addEventListener('change',onRootChange);
  doc.addEventListener('visibilitychange',onVisibility);win.addEventListener('pagehide',onPageHide);
  state.listening=true;
}
function unlisten() {
  if(!state.listening)return;
  root.removeEventListener('click',onRootClick);root.removeEventListener('change',onRootChange);
  doc.removeEventListener('visibilitychange',onVisibility);win.removeEventListener('pagehide',onPageHide);
  state.listening=false;
}
function start() {
  if(state.active)return;
  state.active=true;state.needsInitialRefresh=true;listen();resumeVisible();
}
function stop() {
  state.active=false;state.needsInitialRefresh=false;clearTimer();cancelPending();unlisten();summary();updateClock();
}
function getState() {
  return {active:state.active,loading:state.loading,timerActive:state.timer!==null,listenersActive:state.listening,listenerCount:state.listening?4:0,requestActive:!!state.controller,version:state.version,lastFinished:state.lastFinished,nextRefresh:state.nextRefresh,autoRefresh:$('#auto-refresh').checked,visible:!doc.hidden,rootVisible:root.isConnected&&!root.closest('[hidden]'),selectedTrend,statuses:Object.fromEntries(Object.entries(state.results).map(([key,result])=>[key,result.status])),renderErrors:[...state.renderErrors]};
}
return Object.freeze({start,stop,refresh,getState});
}
