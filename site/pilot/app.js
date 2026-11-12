import {chapters,help,externalLinks,costs} from './content.js';
import {loadEvidence,loadMarket} from './data.js';
import {createCharacter} from './character.js';
import {learningPages} from './learning.js';

// The same clock drives captions-only playback, pause snapshots and code-owned world cues.
export function createCueClock(){
  let elapsed=0,started=null,duration=0;
  return {
    set(seconds){duration=Math.max(0,Number(seconds)||0);elapsed=0;started=null;},
    current(now){return Math.min(duration,elapsed+(started===null?0:Math.max(0,now-started)/1000));},
    play(now){if(started===null)started=now;},
    pause(now){elapsed=this.current(now);started=null;return elapsed;},
    seek(seconds,now){elapsed=Math.max(0,Math.min(duration,Number(seconds)||0));if(started!==null)started=now;},
    get duration(){return duration;},get running(){return started!==null;}
  };
}
export function parseCapital(input){
  const text=String(input).trim();
  if(text.length>24||!/^\d+(?:\.\d{1,2})?$/.test(text))return null;
  const [whole,fraction='']=text.split('.');
  const minor=BigInt(whole)*100n+BigInt(fraction.padEnd(2,'0'));
  if(minor<=0n||minor>9007199254740991n)return null;
  return {minor,amount:Number(minor)/100,belowMinimum:minor<BigInt(Math.round(costs.supplierCapitalGuidance*100))};
}
export function safeExternalURL(value){
  try{const url=new URL(value);return url.protocol==='https:'?url.href:null;}catch{return null;}
}

export function resolveInternalRoute(value,base){
  try{const current=new URL(base),url=new URL(value,current);if(url.origin!==current.origin||url.pathname!==current.pathname)return null;const page=url.searchParams.get('page')||'story';if(!['story','evidence','setup','how-it-works','pricing','learn','glossary','digest'].includes(page))return null;let anchor='';try{anchor=decodeURIComponent(url.hash.slice(1));}catch{}return {page,chapter:url.searchParams.get('chapter'),step:url.searchParams.get('step'),anchor};}catch{return null;}
}

export function captionChunk(text,elapsed,duration,wordsPerChunk=11){
  const words=String(text).trim().split(/\s+/),chunks=[];for(let i=0;i<words.length;i+=wordsPerChunk)chunks.push(words.slice(i,i+wordsPerChunk).join(' '));
  const fraction=Math.max(0,Math.min(1,(Number(elapsed)||0)/Math.max(.1,Number(duration)||1)));return chunks[Math.min(chunks.length-1,Math.floor(fraction*chunks.length))]||'';
}
export function cycleExample(){
  const quantity=100/100+100/80,cost=200,proceeds=207;
  return {quantity,cost,average:cost/quantity,proceeds,grossProfit:proceeds-cost,grossPct:(proceeds-cost)/cost*100};
}

if(typeof document!=='undefined'&&document.querySelector('#play'))void boot();
async function boot(){
  const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
  const text=(id,value)=>{const el=$(id);if(el&&el.textContent!==value)el.textContent=value;};
  const money=value=>Number(value).toLocaleString('en-US',{maximumFractionDigits:2});
  const pct=value=>Number.isFinite(value)?`${value>=0?'+':''}${value.toFixed(2)}%`:'Unavailable';
  const stamp=value=>{const d=new Date(value);return Number.isFinite(d.getTime())?d.toLocaleString('en-GB',{dateStyle:'medium',timeStyle:'short',timeZone:'UTC'})+' UTC':'Not supplied';};
  const media=matchMedia('(prefers-reduced-motion: reduce)'),audio=new Audio(),clock=createCueClock();
  const state={page:'story',chapter:0,cue:0,playing:false,complete:false,audioEnabled:true,audioUnavailable:false,motionEnabled:true,worldVisible:true,waiting:false,mode:'audio',elapsed:0,epoch:0,playAttempt:0,dialog:null,evidence:null,market:null,name:'Your guide',hasStarted:false,accent:'#d4a17c'};
  let character=null,raf=0,worldToken=null,expectedAudio='',disposed=false,restoredProgress=null,resumeNotice=false,routeReady=false,applyingRoute=false;
  const dialog=$('#detail-dialog'),aborter=new AbortController(),storageKey='noguru:pilot:preferences:v1';
  audio.preload='metadata';audio.autoplay=false;
  const chapter=()=>chapters[state.chapter],cue=()=>chapter().cues[state.cue];
  const now=()=>performance.now();
  const hasAudio=()=>state.audioEnabled&&!state.audioUnavailable&&Boolean(cue().audio);
  const currentTime=()=>state.playing&&state.mode==='audio'&&Number.isFinite(audio.currentTime)?Math.min(clock.duration,audio.currentTime):clock.current(now());
  function routeSnapshot(){return {page:state.page,chapter:state.chapter,cue:state.cue,elapsed:currentTime(),scrollY};}
  function routeURL(route){const url=new URL(location.href);url.searchParams.set('page',route.page);if(route.page==='story')url.searchParams.set('chapter',chapters[state.chapter].id);else url.searchParams.delete('chapter');if(!learningPages[route.page])url.searchParams.set('step',cue().id);else url.searchParams.delete('step');url.hash=route.anchor||'';return url;}
  function contentLink(label,value){const internal=resolveInternalRoute(value,location.href);if(internal){const a=document.createElement('a');a.href=value;a.dataset.route='';a.textContent=label;return a;}return externalLink(label,value);}
  function renderLearning(page){const data=learningPages[page];text('#learning-eyebrow',data.eyebrow);text('#learning-title',data.title);text('#learning-intro',data.intro);const toc=$('#learning-toc'),sections=$('#learning-sections');toc.replaceChildren();sections.replaceChildren();
    for(const [index,item] of data.sections.entries()){const section=document.createElement('section'),heading=document.createElement('h2'),copy=document.createElement('div');section.className='learning-section';const anchor=/^[a-z][a-z0-9-]*$/.test(item.id)?item.id:`section-${index+1}`;section.id=`learning-${anchor}`;heading.textContent=item.title;for(const body of item.body||[])copy.append(paragraph(body));if(item.example){const example=paragraph(item.example);example.className='learning-example';copy.append(example);}const links=document.createElement('div');links.className='learning-source-links';for(const link of item.links||[]){const a=contentLink(link.label,link.url);if(a)links.append(a);}copy.append(links);section.append(heading,copy);sections.append(section);const a=document.createElement('a');a.href=`?page=${page}#${anchor}`;a.dataset.route='';a.textContent=item.title;toc.append(a);}
  }
  function applyRoute(route,{restore=null,scroll=false}={}){
    pause();if(state.dialog){state.dialog.resume=false;state.dialog.navigating=true;dialog.close();}document.body.classList.remove('story-focused','is-listening');state.page=route.page;document.body.dataset.page=route.page;const isReading=Boolean(learningPages[route.page]);$('#journey-view').hidden=isReading;$('#learning-page').hidden=!isReading;$$('.menu').forEach(menu=>menu.open=false);
    if(isReading)renderLearning(route.page);else{let index=route.page==='evidence'?3:route.page==='setup'?5:chapters.findIndex(c=>c.id===route.chapter);if(index<0)index=Number.isInteger(restore?.chapter)?restore.chapter:state.chapter;index=Math.max(0,Math.min(chapters.length-1,index));if(index!==state.chapter)enterChapter(index);const cueIndex=route.step?chapter().cues.findIndex(c=>c.id===route.step):Number.isInteger(restore?.cue)?restore.cue:state.cue;if(cueIndex>=0&&cueIndex<chapter().cues.length&&cueIndex!==state.cue)enterCue(cueIndex);if(restore&&restore.chapter===state.chapter&&restore.cue===state.cue){state.elapsed=Math.max(0,Math.min(clock.duration,restore.elapsed||0));clock.seek(state.elapsed,now());}syncControls();}
    $$('a[data-route]').forEach(a=>{const linked=resolveInternalRoute(a.getAttribute('href'),location.href);if(linked?.page===route.page)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});document.title=`${isReading?learningPages[route.page].title:chapter().title} — NoGuru`;
    if(scroll)requestAnimationFrame(()=>{const anchor=route.anchor&&document.getElementById(isReading?`learning-${route.anchor}`:route.anchor);if(anchor)anchor.scrollIntoView({block:'start',behavior:media.matches?'instant':'smooth'});else if(isReading)scrollTo({top:0,behavior:'instant'});else{const title=$('#scene-title'),rect=title.getBoundingClientRect();if(rect.top<0||rect.top>innerHeight*.5)title.scrollIntoView({block:'start',behavior:'instant'});}});
  }
  function navigateRoute(route,{replace=false,scroll=true}={}){if(routeReady&&!replace)history.replaceState(routeSnapshot(),'',location.href);applyingRoute=true;applyRoute(route,{scroll});applyingRoute=false;history[replace?'replaceState':'pushState'](routeSnapshot(),'',routeURL(route));}
  function navigateChapter(index){if(!Number.isInteger(index)||index<0||index>=chapters.length)return;navigateRoute({page:index===3?'evidence':index===5?'setup':'story',chapter:chapters[index].id});}
  function saveCueRoute(){if(routeReady&&!applyingRoute&&!learningPages[state.page])history.replaceState(routeSnapshot(),'',routeURL({page:state.page}));}
  const stepLabels={'buy-one':'First purchase','buy-two':'Buying lower',target:'The intended exit',proceeds:'Sale proceeds',wait:'Positions still held',select:'The maintained plan',orbit:'The idea',personalize:'Your guide',setup:'Before you connect',evidence:'Read the evidence'};
  function stepTitle(item,index){const specific={'meet-01':'What it does','meet-02':'Capital returns','meet-03':'Room for waiting','choose-01':'Your allocation','choose-02':'Ongoing review','choose-03':'A planning choice','evidence-01':'Completed cycles','evidence-02':'Still held','evidence-03':'Market context','yours-01':'Name and accent','yours-02':'Learn along the way','yours-03':'Understand the risks','begin-01':'Capital and costs','begin-02':'Separate trial clocks','begin-03':'Your next step'};return specific[item.id]||stepLabels[item.world]||`Step ${index+1}`;}
  function renderSteps(){const nav=$('#cue-nav');nav.replaceChildren();chapter().cues.forEach((item,index)=>{const b=document.createElement('button');b.type='button';b.dataset.cueIndex=String(index);b.textContent=`${index+1}. ${stepTitle(item,index)}`;if(index===state.cue)b.setAttribute('aria-current','step');nav.append(b);});text('#current-reading',cue().text);$('#current-reading').hidden=state.chapter===0&&state.cue===0;}
  function voiceStatus(){
    text('#audio-label',state.audioUnavailable?'Captions mode':state.audioEnabled?'Voice on':'Voice off');
    $('#audio-toggle')?.setAttribute('aria-pressed',String(state.audioEnabled&&!state.audioUnavailable));
    text('#voice-note',(resumeNotice?'Welcome back. Your place is saved; press Play when you’re ready. ':'')+(state.audioUnavailable?'Voice is unavailable. Captions mode is active; use Voice to retry.':!state.audioEnabled?'Captions mode · voice is off.':'Editorial preview · temporary Daniel narration.'));
  }
  function syncMotion(){
    const paused=!state.playing||Boolean(state.dialog)||document.hidden||media.matches||!state.motionEnabled||state.waiting;
    character?.setPaused(paused);
    $('#world-overlay')?.classList.toggle('is-playing',!paused&&state.worldVisible);
    $('#world-overlay')?.classList.toggle('reduced-motion',media.matches||!state.motionEnabled);
    $('#motion-toggle')?.setAttribute('aria-pressed',String(state.motionEnabled&&!media.matches));
    $('#motion-toggle')?.setAttribute('aria-label',media.matches?'Motion off: reduced motion preference':state.motionEnabled?'Pause scene motion':'Enable scene motion');
    if($('#motion-toggle'))$('#motion-toggle').disabled=media.matches;
    const motionLabel=$('#motion-toggle [data-label]')||$('#motion-toggle');if(motionLabel)motionLabel.textContent=media.matches?'Motion off':state.motionEnabled?'Motion on':'Motion off';
  }
  function syncControls(){
    const last=state.chapter===chapters.length-1;
    text('#play-label',state.playing?'Pause':state.complete?(last?'Replay':'Continue'):'Listen');
    $('#play').setAttribute('aria-label',state.playing?'Pause narration':state.complete?(last?'Replay this chapter':'Continue to the next chapter'):'Listen to this chapter');
    $('#play').setAttribute('aria-pressed',String(state.playing));
    if($('#previous'))$('#previous').disabled=state.chapter===0;
    if($('#next'))$('#next').disabled=last;
    text('#chapter-counter',`${state.chapter+1} / ${chapters.length} · ${state.cue+1} / ${chapter().cues.length}`);
    $$('button[data-chapter]').forEach(button=>{const selected=Number(button.dataset.chapter)===state.chapter;button.classList.toggle('is-current',selected);if(selected)button.setAttribute('aria-current','step');else button.removeAttribute('aria-current');});
    voiceStatus();syncMotion();renderProgress();
  }
  function renderCaption(){if(state.hasStarted)text('#caption',innerWidth<760?captionChunk(cue().text,currentTime(),clock.duration):cue().text);}
  function renderProgress(){
    renderCaption();
    const durations=chapter().cues.map(c=>Math.max(.1,Number(c.duration)||8));
    const elapsed=durations.slice(0,state.cue).reduce((a,b)=>a+b,0)+Math.min(currentTime(),durations[state.cue]);
    const percent=state.complete?100:elapsed/durations.reduce((a,b)=>a+b,0)*100,bar=$('#progress-bar');
    if(bar){if(bar.tagName==='PROGRESS'){bar.max=100;bar.value=percent;}else bar.style.width=`${percent}%`;bar.setAttribute('aria-valuenow',String(Math.round(percent)));}
  }
  function pause({hidden=false}={}){
    state.elapsed=currentTime();clock.seek(state.elapsed,now());clock.pause(now());state.playing=false;state.waiting=false;state.playAttempt++;audio.pause();cancelAnimationFrame(raf);raf=0;
    if(hidden&&state.dialog)state.dialog.resume=false;
    syncControls();
  }
  function startTicker(){cancelAnimationFrame(raf);raf=requestAnimationFrame(tick);}
  function tick(){
    if(!state.playing||disposed)return;
    state.elapsed=currentTime();renderProgress();if(state.worldVisible)animateWorld(state.elapsed/Math.max(.1,clock.duration));
    if(state.mode==='captions'&&state.elapsed>=clock.duration-.02){finishCue();return;}
    raf=requestAnimationFrame(tick);
  }
  function captionsFallback(){
    state.audioUnavailable=true;state.mode='captions';audio.pause();clock.seek(state.elapsed,now());clock.play(now());state.waiting=false;voiceStatus();syncMotion();startTicker();
  }
  async function play(){
    if(state.playing||state.dialog||document.hidden||disposed)return;
    if(state.complete){if(state.chapter<chapters.length-1){navigateChapter(state.chapter+1);document.body.classList.add('is-listening');}else enterCue(0);}
    const epoch=state.epoch,attempt=++state.playAttempt;state.hasStarted=true;text('#caption',cue().text);resumeNotice=false;state.playing=true;state.mode=hasAudio()?'audio':'captions';state.waiting=state.mode==='audio';
    if(!cue().audio&&state.audioEnabled)state.audioUnavailable=true;
    syncControls();
    if(state.mode==='audio'){
      try{
        if(Math.abs(audio.currentTime-state.elapsed)>.08)audio.currentTime=state.elapsed;
        await audio.play();
        if(epoch!==state.epoch||attempt!==state.playAttempt||!state.playing){if(!state.playing)audio.pause();return;}
        if(audio.currentTime<state.elapsed-.15){captionsFallback();return;}
        clock.seek(state.elapsed,now());clock.play(now());state.waiting=false;syncMotion();startTicker();
      }catch{
        if(epoch===state.epoch&&attempt===state.playAttempt&&state.playing)captionsFallback();
      }
    }else{clock.seek(state.elapsed,now());clock.play(now());state.waiting=false;syncMotion();startTicker();}
  }
  function finishCue(){
    if(!state.playing||state.dialog||document.hidden)return;
    if(state.cue+1<chapter().cues.length){enterCue(state.cue+1);void play();}
    else{state.elapsed=clock.duration;pause();clock.seek(clock.duration,now());state.complete=true;animateWorld(1);syncControls();}
  }
  function enterCue(index){
    pause();state.epoch++;state.cue=index;state.elapsed=0;state.complete=false;state.waiting=false;
    const item=cue();document.body.dataset.cue=item.id;clock.set(Number(item.duration)||8);audio.onended=null;audio.onerror=null;audio.onwaiting=null;audio.onplaying=null;
    expectedAudio=item.audio?new URL(item.audio,location.href).href:'';
    if(expectedAudio){audio.src=expectedAudio;audio.load();}else{audio.removeAttribute('src');audio.load();}
    const epoch=state.epoch;
    audio.onended=()=>{if(epoch===state.epoch&&state.mode==='audio'&&audio.currentTime>=Math.min(audio.duration,clock.duration)-.15)finishCue();};
    audio.onerror=()=>{if(epoch!==state.epoch)return;if(state.playing&&state.mode==='audio')captionsFallback();else{state.audioUnavailable=true;voiceStatus();}};
    audio.onwaiting=()=>{if(epoch===state.epoch&&state.playing&&state.mode==='audio'){state.waiting=true;syncMotion();}};
    audio.onplaying=()=>{if(epoch===state.epoch&&state.playing){state.waiting=false;syncMotion();}};
    text('#caption',!state.hasStarted&&state.chapter===0&&state.cue===0?'Press Play when you’re ready. I’ll walk you through the idea, one step at a time.':item.text);character?.setState(item.gesture||'idle');renderWorld(item.world||'orbit');setHighlight(item.highlight);renderSteps();syncControls();savePreferences();saveCueRoute();
  }
  function enterChapter(index,{scroll=false}={}){
    if(!Number.isInteger(index)||index<0||index>=chapters.length)return;
    pause();state.chapter=index;const item=chapter();document.body.dataset.chapter=item.id;for(const entry of chapters)document.body.classList.toggle(`chapter-${entry.id}`,entry.id===item.id);text('#eyebrow',item.eyebrow);text('#scene-title',item.title);text('#scene-summary',item.summary);
    const visible={evidence:item.id==='evidence',personalize:item.id==='yours',setup:item.id==='begin'};
    for(const [key,value] of Object.entries(visible)){const panel=$(`#${key}-panel`);if(panel)panel.hidden=!value;}
    enterCue(0);
    if(scroll&&innerWidth<760){const heading=$('#scene-title'),rect=heading?.getBoundingClientRect();if(rect&&(rect.top<0||rect.top>innerHeight*.6))heading.scrollIntoView({behavior:media.matches?'instant':'smooth',block:'start'});}
  }
  function setHighlight(value){
    document.body.dataset.highlight=value||'';
    $$('.cue-highlight,.is-highlighted,[data-highlight].active').forEach(el=>{el.classList.remove('cue-highlight','is-highlighted','active');});
    const names={profit:'#metric-profit',closed:'#metric-closed',open:'#metric-open',loss:'#metric-open-loss',market:'#market-summary',evidence:'#evidence-panel'};
    if(value){const target=$(names[value]||`#${String(value).replace(/[^a-zA-Z0-9_-]/g,'')}`);(target?.closest('[data-highlight]')||target)?.classList.add('cue-highlight','is-highlighted');}
  }
  // Every number below is a labeled arithmetic illustration, isolated from live evidence.
  function renderWorld(world){
    const el=$('#world-overlay');if(!el)return;el.dataset.world=world;document.body.dataset.world=world;worldToken=null;
    const example=cycleExample();
    const card=(title,body,note='Illustrative mechanics · no connected account')=>`<div class="pilot-world"><p class="world-heading">${title}</p>${body}<p class="world-note">${note}</p></div>`;
    const coin=(x,y,label='')=>`<g transform="translate(${x} ${y})"><circle r="22" fill="#E5A07C" stroke="#B97557" stroke-width="1.5"/><path d="M-8 0h16M0-9v18" fill="none" stroke="#8B5F4C" stroke-width="2"/>${label?`<text y="43" text-anchor="middle" fill="#263E3A" font-size="15">${label}</text>`:''}</g>`;
    const chart=(second=false,target=false)=>`<svg class="world-chart" viewBox="0 0 560 250" role="img" aria-label="${second?'Illustrative purchases at 100 and 80; quantity-weighted average 88.89.':'One illustrative purchase at 100.'} ${target?'A conditional trailing exit is shown, not a guaranteed fill.':''}"><path d="M50 195H525M50 30V195" fill="none" stroke="#9AAA9E"/><path d="${target?'M55 72L110 84L165 80L220 126L265 143L320 130L365 98L410 65L460 40L500 68':second?'M55 72L110 84L165 80L220 126L265 143':'M55 72L110 84'}" fill="none" stroke="#617D71" stroke-width="3"/><circle cx="110" cy="84" r="8" fill="#E5A07C"/><text x="65" y="48" fill="#263E3A" font-size="28">Buy at 100</text>${second?'<circle cx="265" cy="143" r="8" fill="#E5A07C"/><text x="220" y="185" fill="#263E3A" font-size="28">Buy at 80</text><path d="M60 115H520" stroke="#263E3A" stroke-dasharray="5 5"/><text x="520" y="107" text-anchor="end" fill="#263E3A" font-size="28">Average 88.89</text>':''}${target?'<path d="M370 88L410 55L460 30L500 55" fill="none" stroke="#B97557" stroke-width="2" stroke-dasharray="5 4"/><text x="520" y="238" text-anchor="end" fill="#263E3A" font-size="26">Illustrative trailing exit</text>':''}</svg>`;
    const worlds={
      orbit:()=>'<div class="orbit-world"><svg viewBox="0 0 560 560" role="img" aria-label="Decorative coin candidates, not current holdings"><ellipse cx="280" cy="280" rx="220" ry="165" transform="rotate(-22 280 280)" fill="none" stroke="#A7B49E" stroke-width="1" opacity=".4"/>'+[['BTC',78,220,'#E5A07C'],['ETH',165,95,'#DCDCE8'],['SOL',453,163,'#DBE3D5'],['LINK',470,362,'#E6DDCA'],['AVAX',115,430,'#E5D7C9']].map(([label,x,y,fill])=>`<g transform="translate(${x} ${y})"><circle r="24" fill="${fill}" stroke="#A7B49E" stroke-width="1"/><text text-anchor="middle" y="4" font-size="11" fill="#263E3A">${label}</text></g>`).join('')+'</svg><span class="orbit-note">Illustrative candidates</span></div>',
      select:()=>card('Several coins. One maintained plan.','<svg viewBox="0 0 560 140" role="img" aria-label="Three illustrative coins reviewed for sizing, spacing and concentration">'+coin(100,55,'Review')+coin(280,55,'Size')+coin(460,55,'Space')+'</svg><p class="world-label">Shared risks and available cash still matter.</p>'),
      'buy-one':()=>card('First planned purchase',chart()+'<p class="world-equation">100 USDT ÷ 100 = <strong>1 unit</strong></p>'),
      'buy-two':()=>card('Buying lower changes this cycle’s average',chart(true)+`<p class="world-equation">100 ÷ 80 = 1.25 more units<br>200 USDT ÷ ${example.quantity} units = <strong>88.89 average cost</strong></p>`),
      target:()=>card('An intended exit can follow a rise',chart(true,true)+'<p class="world-label">Target and trailing rules do not guarantee a fill or profit.</p>'),
      proceeds:()=>card('A completed sale returns proceeds',`<svg viewBox="0 0 560 170" role="img" aria-label="Illustrative sale proceeds return to available cash"><path d="M70 65Q280 10 455 93" fill="none" stroke="#617D71" stroke-width="2" stroke-dasharray="6 6"/><path d="M390 95Q455 150 520 95L505 135Q455 165 405 135Z" fill="#E6DDCA" stroke="#9AAA9E"/><g class="world-token" data-token>${coin(0,0)}</g><text x="455" y="165" text-anchor="middle" fill="#263E3A" font-size="15">Available cash</text></svg><p class="world-equation"><strong>+3.5% gross</strong> on this 200-USDT cycle = 7 USDT<br>207 USDT proceeds include the original 200.</p>`,'Illustrative completed sale · before fees · not a return forecast'),
      wait:()=>card('Other holdings can still be waiting.','<div class="world-positions"><p>Cycle A · still held</p><p>Cycle B · still held</p><p>Cash · only what is available</p></div><p class="world-label">Held coins can fall and tie up capital. Each cycle keeps its own average.</p>'),
      evidence:()=>card('Completed results are one part of the picture.','<p class="world-label">Inspect the same published rows, their dates and their limits below.</p>','Public-signal record · before fees · not customer equity'),
      personalize:()=>card('A familiar guide. The same strategy.','<p class="world-label">Choose a name and a gentle accent below. These preferences stay on this device.</p>','No account connection or financial data stored'),
      setup:()=>card('Understand the steps before connecting.','<div class="world-roles"><p>Plan your capital</p><p>Understand costs and risks</p><p>Review separate trial clocks</p></div>','Preview only · no connection, trade or trial activation')
    };
    el.innerHTML=(worlds[world]||worlds.orbit)();worldToken=el.querySelector('[data-token]');animateWorld(1);syncMotion();
  }
  function animateWorld(progress){
    if(!worldToken)return;const t=media.matches||!state.motionEnabled?1:Math.max(0,Math.min(1,(progress-.12)/.65));
    const x=70+385*t,y=65-110*t*(1-t)+28*t;worldToken.setAttribute('transform',`translate(${x} ${y})`);
  }
  function paragraph(value){const p=document.createElement('p');p.textContent=value;return p;}
  function externalLink(label,value){const url=safeExternalURL(value);if(!url)return null;const a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener noreferrer';a.textContent=`${label} ↗`;return a;}
  function fillDetail(title,build){
    text('#detail-title',title);const body=$('#detail-body');body.replaceChildren();build(body);
    if(state.dialog?.stack?.length){const back=document.createElement('button');back.type='button';back.className='button detail-back';back.textContent=state.dialog.stack.at(-1).setup?'Back to setup':'Back to the previous explanation';back.addEventListener('click',()=>{const previous=state.dialog.stack.pop();text('#detail-title',previous.title);body.replaceChildren(...previous.nodes);dialog.scrollTop=previous.scrollTop;previous.element?.focus({preventScroll:true});});body.append(back);}
    dialog.scrollTop=0;
  }
  function openDetail(title,build){
    if(!dialog)return;
    if(dialog.open&&state.dialog){
      const body=$('#detail-body');state.dialog.stack.push({title:$('#detail-title').textContent,nodes:[...body.childNodes],element:document.activeElement,scrollTop:dialog.scrollTop,setup:Boolean(body.querySelector('#setup-panel'))});fillDetail(title,build);return;
    }
    const snapshot={resume:state.playing,element:document.activeElement,chapter:state.chapter,cue:state.cue,elapsed:currentTime(),scrollX,scrollY,stack:[]};pause();snapshot.elapsed=state.elapsed;state.dialog=snapshot;
    fillDetail(title,build);dialog.showModal();dialog.scrollTop=0;syncMotion();
  }
  function openSetupReview(){
    const panel=$('#setup-panel');if(!panel||dialog.open)return;
    const marker=document.createComment('setup-panel-return'),parent=panel.parentNode,wasHidden=panel.hidden;panel.before(marker);
    openDetail('Review capital, costs and risks',body=>{panel.hidden=false;body.append(panel);state.dialog.restore=()=>{if(marker.isConnected)marker.replaceWith(panel);else parent.append(panel);panel.hidden=wasHidden;};});
  }
  function closeDetail(){dialog?.close();}
  dialog?.addEventListener('close',()=>{const snapshot=state.dialog;state.dialog=null;if(!snapshot)return;snapshot.restore?.();if(snapshot.navigating){syncControls();return;}
    if(state.chapter===snapshot.chapter&&state.cue===snapshot.cue){state.elapsed=snapshot.elapsed;clock.seek(state.elapsed,now());try{if(Math.abs(audio.currentTime-state.elapsed)>.08)audio.currentTime=state.elapsed;}catch{}}
    snapshot.element?.focus({preventScroll:true});scrollTo({left:snapshot.scrollX,top:snapshot.scrollY,behavior:'instant'});syncControls();if(snapshot.resume&&!document.hidden)void play();
  });
  $('#detail-close')?.addEventListener('click',closeDetail);
  $('#open-setup-review')?.addEventListener('click',openSetupReview);
  function showHelp(key){const item=help[key];if(!item)return;if(key!=='privacy'){const link=(item.links||[]).find(link=>resolveInternalRoute(link.url,location.href));if(link){navigateRoute(resolveInternalRoute(link.url,location.href));return;}}openDetail(item.title,body=>{for(const part of Array.isArray(item.body)?item.body:[item.body])body.append(paragraph(part));for(const link of item.links||[]){const node=contentLink(link.label,link.url);if(node)body.append(node);}});}
  function showTrial(){openDetail('Review the two trial clocks',body=>{
    body.append(paragraph('NoGuru advertises 14 days free. New Cornix users receive a separate 14-day Premium trial. Their clocks need not start together. Review the current terms and eligibility; nothing is activated here.'),paragraph('The Cornix trial can start with the first created trade, including a demo or backtest. Open positions may outlast a trial; a trial cannot establish future returns.'));
    for(const [label,url] of [['Start NoGuru free trial',externalLinks.trial||externalLinks.pricing],['Register with Cornix',externalLinks.cornix],['Read Cornix’s official trial terms','https://help.cornix.io/en/articles/5814827-cornix-free-trial'],['Review NoGuru’s offer and eligibility',externalLinks.pricing]]){const a=contentLink(label,url);if(a)body.append(a);}
    body.append(paragraph('Provider links open in a new tab; pricing stays here.'));
  });}
  function inspectEvidence(){const data=state.evidence;openDetail('Inspect the published cycles',body=>{
    if(!data||data.status==='unavailable'){body.append(paragraph('The published record is unavailable. No saved or invented figures are substituted.'));return;}
    body.append(paragraph(`${data.closed} completed signal cycles · ${data.windowStart} to ${data.windowEnd}. Before fees; not actual customer executions. Reported buys are not independently verified exchange order counts.`));
    const table=document.createElement('table');table.className='evidence-rows';const head=document.createElement('thead'),row=document.createElement('tr');
    for(const title of ['Opened','Closed','Buys','Gross result']){const th=document.createElement('th');th.scope='col';th.textContent=title;row.append(th);}head.append(row);table.append(head);const tbody=document.createElement('tbody');
    const filterLabel=document.createElement('label'),filter=document.createElement('select'),filterNote=document.createElement('p');filterLabel.className='evidence-filter';filterLabel.textContent='Show completed cycles: ';filter.setAttribute('aria-label','Filter completed cycles');
    const rows=data.rows||[],below=rows.filter(item=>Number.isFinite(item.pct)&&item.pct<0);
    for(const [value,label] of [['all',`All (${rows.length})`],['below',`Below cost (${below.length})`]]){const option=document.createElement('option');option.value=value;option.textContent=label;filter.append(option);}filterLabel.append(filter);body.append(filterLabel,filterNote);
    const renderRows=()=>{const shown=filter.value==='below'?below:rows;tbody.replaceChildren();for(const item of shown){const tr=document.createElement('tr');for(const value of [String(item.openedAt||'').slice(0,10),String(item.closedAt||'').slice(0,10),item.rungs??'—',pct(item.pct)]){const td=document.createElement('td');td.textContent=String(value);tr.append(td);}tbody.append(tr);}filterNote.textContent=`${shown.length} of ${rows.length} completed cycles. Results are before fees; ${data.open} still-open cycles are excluded from this table.`;};
    filter.addEventListener('change',renderRows);renderRows();table.append(tbody);body.append(table);
    const a=externalLink('Open the source record',data.sourceUrl);if(a)body.append(a);
  });}
  function savePreferences(){try{localStorage.setItem(storageKey,JSON.stringify({name:state.name,accent:state.accent,chapter:state.chapter,cue:state.cue}));}catch{}}
  function applyPreferences(){text('#name-preview',state.name);if($('#guide-name'))$('#guide-name').value=state.name;document.documentElement.style.setProperty('--guide-accent',state.accent);character?.setAccent(state.accent);$$('[data-accent]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.accent.toLowerCase()===state.accent.toLowerCase())));}
  try{const saved=JSON.parse(localStorage.getItem(storageKey)||'null');if(saved){if(typeof saved.name==='string'&&saved.name.trim())state.name=saved.name.trim().slice(0,20);if(/^#[0-9a-f]{6}$/i.test(saved.accent))state.accent=saved.accent;if(Number.isInteger(saved.chapter)&&chapters[saved.chapter]&&Number.isInteger(saved.cue)&&chapters[saved.chapter].cues[saved.cue])restoredProgress={chapter:saved.chapter,cue:saved.cue};}}catch{}
  function checkSetup(){const value=parseCapital($('#capital')?.value||''),ack=Boolean($('#risk-ack')?.checked);if($('#setup-next'))$('#setup-next').disabled=!value||!ack;
    text('#capital-feedback',!value?'Enter a positive USDT amount with at most two decimal places.':value.belowMinimum?`Planning only: below the supplier-stated ${money(costs.supplierCapitalGuidance)} USDT operating minimum. This does not establish setup eligibility.`:'A plan only. No money is reserved, moved or trading. Confirm current setup requirements.');return value;
  }
  async function refreshData(){
    text('#evidence-status','Loading the public signal record…');text('#market-summary','Loading separate market context…');
    const results=await Promise.allSettled([loadEvidence({signal:aborter.signal}),loadMarket({signal:aborter.signal})]);if(disposed)return;
    state.evidence=results[0].status==='fulfilled'?results[0].value:{status:'unavailable'};state.market=results[1].status==='fulfilled'?results[1].value:{status:'unavailable'};
    const e=state.evidence,m=state.market;
    if($('#evidence-panel'))$('#evidence-panel').dataset.status=e.status;
    const marketParent=$('#market-summary')?.parentElement;if(marketParent)marketParent.dataset.status=m.status;if($('#market-summary')?.closest('.market-panel'))$('#market-summary').closest('.market-panel').dataset.status=m.status;
    if(e.status==='unavailable'){
      text('#evidence-status','Public signal record unavailable. No old figures substituted.');for(const id of ['#metric-profit','#metric-closed','#metric-open','#metric-open-loss'])text(id,'Unavailable');text('#metric-period','');text('#metric-results','Unavailable');text('#metric-open-date','Source unavailable.');text('#evidence-fetched','');
    }else{
      text('#evidence-status',`${e.status==='stale'?'Stale record · ':''}${e.sourceType||'Published-signal replay · before fees · not customer equity'}`);
      text('#metric-profit',pct(e.grossSinceStart));text('#metric-period',`On allocated funds · ${e.windowStart} to ${e.windowEnd} · before fees`);text('#metric-closed',String(e.closed));text('#metric-results',`${e.up} above cost · ${e.down} below cost`);text('#metric-open',String(e.open));text('#metric-open-loss',pct(e.openVsCost));text('#metric-open-date',`Fetched ${stamp(e.checkedAt)} · source observation time not supplied.`);
      const fetched=$('#evidence-fetched');if(fetched){fetched.replaceChildren(paragraph(`Fetched ${stamp(e.checkedAt)}. Fetch time is not a source-generation timestamp.${e.latestClose?' Latest completed cycle: '+stamp(e.latestClose)+'.':''}`));const a=externalLink('Inspect the public source',e.sourceUrl);if(a)fetched.append(a);}
    }
    if(m.status==='unavailable'){text('#market-summary','Market context unavailable. It is separate from the trading record.');text('#market-asof','');}
    else{text('#market-summary',`${m.status==='stale'||m.stale?'Stale market context. ':''}${m.summary}`);text('#market-asof',`Market observation: ${stamp(m.asOf)} · fetched ${stamp(m.checkedAt)}. Context, not account performance.`);}
  }
  function userStart(){document.body.classList.add('is-listening');void play();if(innerWidth<760){const scene=$('#scene-explainer');if(scene.getBoundingClientRect().top>1)scene.scrollIntoView({behavior:media.matches?'instant':'smooth',block:'start'});}}
  $('#play').addEventListener('click',()=>state.playing?pause():userStart());
  $('#replay')?.addEventListener('click',()=>{state.audioUnavailable=false;character?.setState('idle');enterCue(0);userStart();});
  $('#leave-story')?.addEventListener('click',()=>{pause();document.body.classList.remove('story-focused','is-listening');});
  $('#read-chapter')?.addEventListener('click',()=>openDetail(chapter().title,body=>{for(const item of chapter().cues)body.append(paragraph(item.text));}));
  window.addEventListener('resize',renderCaption);
  $('#previous')?.addEventListener('click',()=>navigateChapter(state.chapter-1));
  $('#next')?.addEventListener('click',()=>navigateChapter(state.chapter+1));
  document.addEventListener('click',event=>{const anchor=event.target.closest('a[href]');if(anchor&&!anchor.classList.contains('skip-link')&&!event.metaKey&&!event.ctrlKey&&!event.shiftKey&&!event.altKey){const route=resolveInternalRoute(anchor.getAttribute('href'),location.href);if(route){event.preventDefault();navigateRoute(route);return;}}
    const target=event.target.closest('button[data-chapter],button[data-cue-index],[data-help],[data-start-story],.trial-open,#trial-open');if(!target)return;
    if(target.matches('button[data-chapter]'))navigateChapter(Number(target.dataset.chapter));
    else if(target.matches('[data-cue-index]')){pause();document.body.classList.remove('is-listening');const index=Number(target.dataset.cueIndex);if(Number.isInteger(index)&&chapter().cues[index])enterCue(index);}
    else if(target.matches('[data-help]'))showHelp(target.dataset.help);else if(target.matches('[data-start-story]')){event.preventDefault();userStart();}else showTrial();
  });
  window.addEventListener('popstate',event=>{applyingRoute=true;applyRoute(resolveInternalRoute(location.href,location.href)||{page:'story'},{restore:event.state,scroll:true});applyingRoute=false;});
  $('#audio-toggle')?.addEventListener('click',()=>{const resume=state.playing;pause();if(state.audioUnavailable){state.audioUnavailable=false;state.audioEnabled=true;}else state.audioEnabled=!state.audioEnabled;voiceStatus();if(resume)void play();});
  $('#motion-toggle')?.addEventListener('click',()=>{state.motionEnabled=!state.motionEnabled;syncMotion();animateWorld(state.elapsed/Math.max(.1,clock.duration));});
  $('#inspect-evidence')?.addEventListener('click',inspectEvidence);$('#explain-evidence')?.addEventListener('click',()=>showHelp('evidence'));
  $('#guide-name')?.addEventListener('input',event=>{state.name=event.target.value.trim().slice(0,20)||'Your guide';text('#name-preview',state.name);savePreferences();});
  $('#guide-name')?.addEventListener('blur',()=>{if(!$('#guide-name').value.trim()){state.name='Your guide';applyPreferences();savePreferences();}});
  $$('[data-accent]').forEach(button=>button.addEventListener('click',()=>{if(/^#[0-9a-f]{6}$/i.test(button.dataset.accent)){state.accent=button.dataset.accent;applyPreferences();savePreferences();}}));
  $('#reset-personalization')?.addEventListener('click',()=>{try{localStorage.removeItem(storageKey);}catch{}state.name='Your guide';state.hasStarted=false;state.accent='#d4a17c';resumeNotice=false;applyPreferences();navigateChapter(0);try{localStorage.removeItem(storageKey);}catch{}});
  $('#capital')?.addEventListener('input',checkSetup);$('#risk-ack')?.addEventListener('change',checkSetup);
  $('#setup-next')?.addEventListener('click',()=>{if(!checkSetup()||!$('#risk-ack')?.checked)return;const account=$('#account-preview');if(account){account.hidden=false;account.scrollIntoView({behavior:media.matches?'instant':'smooth',block:'nearest'});}});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)pause({hidden:true});});
  media.addEventListener('change',()=>{syncMotion();animateWorld(state.elapsed/Math.max(.1,clock.duration));});
  if('IntersectionObserver' in window&&$('#world-overlay'))new IntersectionObserver(entries=>{state.worldVisible=entries[0].isIntersecting;syncMotion();},{threshold:.02}).observe($('#world-overlay'));
  window.addEventListener('pagehide',event=>{pause({hidden:true});if(!event.persisted){disposed=true;aborter.abort();character?.dispose();}});
  text('#cost-total',`$${(costs.noGuruFounding+costs.cornixMonthly).toFixed(2)}`);$('#cost-total')?.setAttribute('title',`Founding combined monthly subscriptions. Standard combined: $${(costs.noGuruStandard+costs.cornixMonthly).toFixed(2)}. Before trading fees; checked ${costs.checkedDate}.`);
  applyPreferences();enterChapter(restoredProgress?.chapter||0);if(restoredProgress){enterCue(restoredProgress.cue);resumeNotice=true;voiceStatus();}checkSetup();routeReady=true;navigateRoute(resolveInternalRoute(location.href,location.href)||{page:'story'},{replace:true,scroll:Boolean(location.hash)});void refreshData();
  window.NoGuruPilot={getState:()=>({page:state.page,chapter:state.chapter,chapterId:chapter().id,cue:state.cue,cueId:cue().id,playing:state.playing,elapsed:currentTime(),duration:clock.duration,complete:state.complete,mode:state.mode,audioEnabled:state.audioEnabled,audioUnavailable:state.audioUnavailable,motionEnabled:state.motionEnabled,reducedMotion:media.matches,focused:document.body.classList.contains('is-listening'),dialog:state.dialog?{chapter:state.dialog.chapter,cue:state.dialog.cue,elapsed:state.dialog.elapsed,resume:state.dialog.resume}:null,preferences:{name:state.name,accent:state.accent},evidenceStatus:state.evidence?.status,marketStatus:state.market?.status,character:character?.getState?.()}),pause};
  try{character=await createCharacter($('#character'),{reducedMotion:media.matches});if(disposed){character.dispose();return;}character.setAccent(state.accent);character.setState(cue().gesture||'idle');syncMotion();}
  catch{const host=$('#character');if(host){const notice=paragraph('The guide’s motion is unavailable. The explanation and controls still work.');notice.className='character-unavailable';host.append(notice);}}
}
