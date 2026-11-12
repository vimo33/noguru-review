(() => {
  'use strict';
  const state = {view:'entrance',previousView:'entrance',stage:'buy',motion:false,captions:true,sound:false,entrancePaused:false,entranceMotion:false,timer:null,preferences:{name:'NoGuru',accent:'apricot',narration:'text',cadence:'request'},journey:{step:'meet',allocationDraft:'',amountMinor:null,amountUSDT:null,amountDisplay:null,belowMinimum:null,editingFromReview:false,connectionPreviewed:false,completed:false}};
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const stages = {
    buy: {title:'A little at<br>a time.', kicker:'A maintained plan', description:'NoGuru reviews coins, purchase sizes and spacing. Planned lower buys can reduce this cycle’s average cost.', caption:'“Let’s follow one coin. I buy in stages at planned levels. Buying lower can reduce this cycle’s average cost, while putting more capital at risk.”', cycle:'Building a position', average:'moves lower ↓', cash:'Ready when rules allow'},
    wait: {title:'Some things<br>take time.', kicker:'Room for patience', description:'Held coins can fall in value and tie up capital. Other cycles can continue only when rules and cash allow.', caption:'“Some positions wait. A separate lower cycle keeps its own average. The older cycle’s cost stays unchanged, and recovery is not guaranteed.”', cycle:'Holding a position', average:'this cycle’s own', cash:'Reserves can run low'},
    sell: {title:'Back to<br>possibility.', kicker:'An intended exit', description:'After exit conditions are met, profit-taking can follow a rising price. A completed sale returns proceeds to cash.', caption:'“When a sale completes, the proceeds return to cash. The next opportunity may be in the same coin, if it still meets the rules.”', cycle:'Target illustration', average:'target above cost', cash:'Replenished by a sale'}
  };
  const body=document.body;
  const $=selector=>document.querySelector(selector);
  const $$=selector=>Array.from(document.querySelectorAll(selector));
  const dialog=$('#join-dialog');
  const learningDialog=$('#learning-dialog');
  const learningState={open:false,context:null};
  let learningReturn=null;
  const siteMenuDialog=$('#site-menu-dialog');
  const menuState={open:false,openedFrom:null};
  let menuReturn=null;
  const stageOrder=Object.keys(stages);
  const journeyOrder=['meet','capital','imagine','expectations','risks','preferences','review'];
  const journeyCopy={
    meet:{label:'Meet your guide',heading:'Let’s make this<br><em>feel like you.</em>',narration:'“You can give me a familiar name and choose the atmosphere around us. The same NoGuru strategy stays behind it.”'},
    capital:{label:'Your intended capital',heading:'A place in<br><em>your portfolio.</em>',narration:'“We can take this one step at a time. You choose what you would like to plan for. Nothing moves here.”'},
    imagine:{label:'Imagine how it works',heading:'One strategy.<br><em>A few clear roles.</em>',narration:'“You choose the capital. I maintain the trading approach. Cornix carries out the instructions in your own exchange.”'},
    expectations:{label:'What to expect',heading:'Different rhythms.<br><em>One whole picture.</em>',narration:'“Some positions will be active. Others may wait. A quiet day is something to understand, too.”'},
    risks:{label:'Know the risks',heading:'A little time<br><em>for the honest part.</em>',narration:'“You should have room to understand the risks as clearly as the idea. Take your time with this part.”'},
    preferences:{label:'Your preferences',heading:'Your guide.<br><em>Your pace.</em>',narration:'“A short explanation when you ask, or a summary to return to. You can choose what would be useful to you.”'},
    review:{label:'Review your plan',heading:'Your choices,<br><em>in one place.</em>',narration:'“Let’s look over what you’ve chosen. You can change any part before exploring the connection preview.”'}
  };
  // Primary public destinations checked by root on 11 November 2026. Summaries are brief contextual explanations, not copied lesson claims.
  const academyContexts={
    story_buy:{kind:'Strategy context',topic:'One cycle, several planned buys',intro:'“Let’s slow this buying step down.”',summary:'A cycle groups purchases with the sale that closes that holding. A planned price level is often called a rung. Orders, partial fills and completed cycles are different units.',details:[{title:'Which average changes?',body:'Lower-priced purchases inside one cycle reduce its quantity-weighted average cost: total purchase cost divided by the units bought. More buying also puts more capital at risk.'},{title:'A plan that is maintained',body:'The supplier describes reviewing coins, volatility and concentration to adjust future purchase sizes and spacing. Reducing future buying does not turn an existing holding back into cash.'}],title:'Ladder / rung',url:'https://noguru.io/glossary.html#ladder-rung',action:'Read this glossary entry',secondary:{title:'Academy: Five alt longs is one bet',url:'https://noguru.io/academy/correlation-one-bet.html'}},
    story_wait:{kind:'Strategy context',topic:'Waiting does not remove a loss',intro:'“Patience still has a cost.”',summary:'Held coins can keep falling, and the capital in them is unavailable for other purchases. Further buying can slow or stop when cash runs low. Recovery is not guaranteed.',details:[{title:'A separate cycle, a separate average',body:'A new lower cycle may open if rules and cash allow. It has its own average. Across all units of the same coin, the combined weighted cost may fall; the earlier cycle’s average stays unchanged.'},{title:'Cash is finite',body:'Completed sales can replenish cash; further buys use it. More capital may allow more purchases, but does not guarantee a higher percentage return or recovery.'}],title:'Losing months, and following a system you didn’t invent',url:'https://noguru.io/academy/losing-months.html',action:'Continue with this lesson',secondary:{title:'Academy: The arithmetic of losses',url:'https://noguru.io/academy/arithmetic-of-losses.html'}},
    story_sell:{kind:'Strategy context',topic:'An exit can follow the rise',intro:'“A completed sale makes room again.”',summary:'The supplier describes profit-taking that can follow a rising price after exit conditions are met, then sell after a retreat. A target or trailing rule does not guarantee a fill or net profit.',details:[{title:'Proceeds return to cash',body:'A sale returns the proceeds, including the capital used for that holding. Completed profit is already included in the account; it is not extra cash to add again.'},{title:'The next cycle',body:'The same coin may still be an opportunity if it remains approved and the rules and available cash allow. Re-entry is not a promise of immediate or continuous trading.'}],title:'Expectancy: why win rate isn’t the score',url:'https://noguru.io/academy/expectancy.html',action:'Continue with this lesson'},
    capital:{kind:'Academy lesson',topic:'Shared exposure',intro:'“Several coins can still share the same risks.”',summary:'Different tickers do not always mean different risks. Crypto assets can move together. This is useful context for an allocation decision that remains yours.',title:'Five alt longs is one bet',url:'https://noguru.io/academy/correlation-one-bet.html',action:'Continue with this lesson'},
    imagine:{kind:'Related glossary',topic:'Price levels inside one cycle',intro:'“Let’s slow down that buying step.”',summary:'Purchases can be planned at different price levels. Buying lower within one cycle can reduce its weighted average purchase cost. A sell target is an aim; reaching it is not guaranteed.',title:'Ladder / rung',url:'https://noguru.io/glossary.html#ladder-rung',action:'Read this glossary entry'},
    expectations:{kind:'Academy lesson',topic:'Variation, patience and judgment',intro:'“A system can have difficult stretches, too.”',summary:'Activity and results vary over time. A quiet period or a losing month does not promise a recovery. You can inspect the evidence and decide whether the approach still fits.',title:'Losing months, and following a system you didn’t invent',url:'https://noguru.io/academy/losing-months.html',action:'Continue with this lesson'},
    risks:{kind:'Academy lesson',topic:'Losses and recovery',intro:'“A fall and a recovery aren’t mirror images.”',summary:'After a loss, the same percentage gain does not restore the starting value. Prices can keep falling, and some positions may never recover. Historical recovery examples are not forecasts.',title:'The arithmetic of losses',url:'https://noguru.io/academy/arithmetic-of-losses.html',action:'Continue with this lesson'},
    review:{kind:'Related setup guide',topic:'Separate roles and permissions',intro:'“Understanding the connection comes before making it.”',summary:'Review the roles of NoGuru, Cornix and your exchange. Reading account data, trading, transferring funds and making payments are separate permissions. This preview connects nothing.',title:'How it works',url:'https://noguru.io/how-it-works.html',action:'Open this website guide',secondary:{title:'Glossary: API key',url:'https://noguru.io/glossary.html#api-key'}},
    account_update:{kind:'Academy lesson',topic:'Beyond the win count',intro:'“A completed sale is one piece of the result.”',summary:'The lesson explains why win frequency alone is insufficient. In this guide, account value also includes cash and the current value of open holdings. Completed profit is already included.',title:'Expectancy: why win rate isn’t the score',url:'https://noguru.io/academy/expectancy.html',action:'Continue with this lesson'}
  };
  const MAX_MINOR=9007199254740991n;
  const MINIMUM_MINOR=300000n;
  function validatePlanningAmount(raw){
    const value=String(raw).trim();
    if(!value)return {valid:false,error:'Enter the amount you would like to plan for.'};
    if(!/^\d+(?:\.\d{1,2})?$/.test(value))return {valid:false,error:'Use digits and an optional decimal point, with up to two decimal places. No commas, signs or exponent notation.'};
    const [whole,fraction='']=value.split('.');
    const minor=BigInt(whole)*100n+BigInt(fraction.padEnd(2,'0'));
    if(minor<=0n)return {valid:false,error:'Enter an amount greater than zero.'};
    if(minor>MAX_MINOR)return {valid:false,error:'This preview supports up to 90,071,992,547,409.91 USDT so amounts stay exact to two decimal places. This is a technical limit, not an investment limit.'};
    const canonicalWhole=(minor/100n).toString();
    const canonicalFraction=(minor%100n).toString().padStart(2,'0');
    return {valid:true,minor:minor.toString(),amountUSDT:`${canonicalWhole}.${canonicalFraction}`,display:`${canonicalWhole.replace(/\B(?=(\d{3})+(?!\d))/g,',')}.${canonicalFraction} USDT`,belowMinimum:minor<MINIMUM_MINOR};
  }
  function syncURL(){
    const url=new URL(location.href);
    url.searchParams.set('view',state.view);
    url.searchParams.delete('personalize');
    if(state.view==='onboarding')url.searchParams.set('step',state.journey.step);else url.searchParams.delete('step');
    if(state.view==='story')url.searchParams.set('stage',state.stage);else url.searchParams.delete('stage');
    history.replaceState({view:state.view,step:state.journey.step},'',url);
  }
  function stopTimer(){if(state.timer)clearInterval(state.timer);state.timer=null;}
  function syncEntrance(){
    const element=$('[data-robot-layer=entrance]');const r=element.getBoundingClientRect();
    const visible=element.getClientRects().length&&r.height>0&&Math.min(r.bottom,innerHeight)-Math.max(r.top,0)>Math.min(r.height,innerHeight)*.08;
    state.entranceMotion=state.view==='entrance'&&!state.entrancePaused&&!reducedMotion.matches&&!document.hidden&&!siteMenuDialog.open&&!learningDialog.open&&!dialog.open&&Boolean(visible);
    window.NoGuruRobots?.entrance(state.entranceMotion);window.NoGuruOrbit?.setPaused(!state.entranceMotion);
    const button=$('#entrance-motion-toggle');button.disabled=reducedMotion.matches;
    button.setAttribute('aria-pressed',String(state.entranceMotion));
    button.setAttribute('aria-label',reducedMotion.matches?'Animation is off because reduced motion is enabled':state.entranceMotion?'Pause animation':'Resume animation');
    button.textContent=reducedMotion.matches?'Animation off':state.entranceMotion?'Pause animation':'Resume animation';
  }
  function sceneInView(){const r=$('#scene-panel').getBoundingClientRect();return r.height>0&&Math.min(r.bottom,innerHeight)-Math.max(r.top,0)>Math.min(r.height,innerHeight)*.08;}
  function setMotion(play){
    state.motion=play&&!reducedMotion.matches&&state.view==='story'&&!document.hidden&&sceneInView();
    body.dataset.motion=state.motion?'playing':'paused';
    $('#motion-toggle').classList.toggle('playing',state.motion);
    $('#motion-toggle').setAttribute('aria-pressed',String(state.motion));
    $('#motion-toggle').setAttribute('aria-label',reducedMotion.matches?'Motion is off because reduced motion is enabled':state.motion?'Pause illustrative motion':'Play illustrative motion');
    $('#motion-text').textContent=state.motion?'Pause motion':'Play motion';
    stopTimer();
    if(!state.motion){window.NoGuruRobots?.pause();window.NoGuruOrbit?.setPaused(true);}
    window.NoGuruRobots?.story(state.stage,state.motion);
    if(state.motion)state.timer=setInterval(()=>setStage(stageOrder[(stageOrder.indexOf(state.stage)+1)%stageOrder.length]),9000);
  }
  function setStage(stage){
    if(!stages[stage])return;
    state.stage=stage;body.dataset.stage=stage;
    const selected=stages[stage];
    $('#stage-title').innerHTML=selected.title;
    $('.stage-kicker').textContent=selected.kicker;
    $('#stage-description').textContent=selected.description;
    $('#caption').textContent=selected.caption;
    $('#cycle-state').textContent=selected.cycle;
    $('#average-direction').textContent=selected.average;
    $('#cash-label').textContent=selected.cash;
    $$('.stage-tabs button').forEach(button=>{const active=button.dataset.stage===stage;button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;});
    $('#scene-panel').setAttribute('aria-labelledby',`tab-${stage}`);
    $('.price-chart').setAttribute('aria-label',stage==='sell'?'Illustrative price movement toward a sell target above average purchase cost; this is not actual market data':stage==='wait'?'Illustrative open position with its own average purchase cost while another cycle waits':'Illustrative staged buys at lower price levels, lowering this cycle’s average purchase cost');
    window.NoGuruRobots?.story(stage,state.motion,{restart:true});
    if(state.view==='story')syncURL();
  }
  function updatePlanDisplay(){
    const j=state.journey;
    $$('[data-planned-amount]').forEach(el=>el.textContent=j.amountDisplay||'Not set');
    $('#account-planned-amount').textContent=j.amountDisplay||'Not set';
    $('#account-plan-note').textContent=j.amountMinor?(j.belowMinimum?'Planning only. Below the supplier-stated operating minimum of 3,000 USDT; verify before setup. No funds are allocated.':'Planning only. No funds are reserved, deposited or trading. Actual balances remain separate.'):'A planning amount is separate from actual account balances.';
    $('#review-minimum-note').textContent=j.amountMinor?(j.belowMinimum?'Below the supplier-stated 3,000 USDT minimum. This plan does not establish setup eligibility.':'No funds are allocated. Confirm costs, the current minimum and setup requirements before proceeding.'): 'Choose a planning amount before the connection preview.';
    $('#capital-minimum-state').textContent=j.amountMinor?(j.belowMinimum?'This plan is below that supplier-stated minimum. You can keep it here; it does not establish setup eligibility.':'This is a plan, not an allocated balance. Confirm the current minimum and setup requirements before proceeding.'):'You can keep a lower planning amount here; that does not make it eligible for setup.';
  }
  function setAllocation(raw,{showError=false}={}){
    state.journey.allocationDraft=String(raw);
    const result=validatePlanningAmount(raw);
    state.journey.amountMinor=result.valid?result.minor:null;
    state.journey.amountUSDT=result.valid?result.amountUSDT:null;
    state.journey.amountDisplay=result.valid?result.display:null;
    state.journey.belowMinimum=result.valid?result.belowMinimum:null;
    $('#capital-error').hidden=!showError||result.valid;
    $('#capital-error').textContent=result.valid?'':result.error;
    $('#planned-capital').setAttribute('aria-invalid',String(showError&&!result.valid));
    updatePlanDisplay();return result;
  }
  function invalidateReview(){state.journey.connectionPreviewed=false;state.journey.completed=false;}
  function applyPreferences(){
    const p=state.preferences;
    body.dataset.accent=p.accent;
    $$('[data-guide-name]').forEach(el=>el.textContent=p.name||'NoGuru');
    const narration=p.narration==='voice'?'Text + voice preference':'Text only';
    const cadence={request:'Updates on request',daily:'Daily summary preference',completed:'After completed trades'}[p.cadence];
    $('#preference-summary').textContent=`${narration} · ${cadence}`;
    $('#name-count').textContent=`${$('#guide-name').value.length} / 20`;
    $('#review-guide').textContent=`${p.name} · ${p.accent.charAt(0).toUpperCase()+p.accent.slice(1)}`;
    $('#review-preferences').textContent=`${p.narration==='voice'?'Text + voice (preview not produced)':'Text only'} · ${{request:'On request',daily:'Daily summary',completed:'After completed trades'}[p.cadence]}`;
  }
  function normalizeStep(value){
    if(journeyOrder.includes(value))return value;
    if(/^[1-7]$/.test(String(value)))return journeyOrder[Number(value)-1];
    return 'meet';
  }
  function renderJourney(){
    const step=state.journey.step,index=journeyOrder.indexOf(step),copy=journeyCopy[step];
    body.dataset.journeyStep=step;
    $('#journey-title').innerHTML=copy.heading;
    $('#journey-narration').textContent=copy.narration;
    $('#journey-progress-text').textContent=`${index+1} of 7 · ${copy.label}`;
    $$('#journey-progress-bars li').forEach((el,i)=>{el.classList.toggle('is-current',i===index);el.classList.toggle('is-complete',i<index);el.setAttribute('aria-label',`${i+1}: ${journeyCopy[journeyOrder[i]].label}`);if(i===index)el.setAttribute('aria-current','step');else el.removeAttribute('aria-current');});
    $$('[data-journey-panel]').forEach(el=>el.hidden=el.dataset.journeyPanel!==step);
    $('#journey-back').innerHTML=state.journey.editingFromReview?'<span aria-hidden="true">←</span> Back to review':index===0?'<span aria-hidden="true">←</span> Back to the story':'<span aria-hidden="true">←</span> Back';
    $('#journey-continue').hidden=step==='review';
    $('#journey-explain').hidden=!academyContexts[step];
    $('#journey-continue').innerHTML=state.journey.editingFromReview?'Back to review <span aria-hidden="true">→</span>':'Continue <span aria-hidden="true">→</span>';
    $('#connection-preview').hidden=!state.journey.connectionPreviewed;
    $('#preview-connection').hidden=state.journey.connectionPreviewed;
    $('#finish-journey').hidden=!state.journey.connectionPreviewed;
    $('#review-action-note').textContent=state.journey.connectionPreviewed?'Your personal guide will still show an unconnected account.':'Nothing is submitted or connected.';
    applyPreferences();updatePlanDisplay();
  }
  function showView(view,options={}){
    if(!['entrance','story','evidence','account','onboarding'].includes(view))view='entrance';
    if(view==='evidence'&&state.view!=='evidence')state.previousView=state.view;
    state.view=view;body.dataset.view=view;
    refreshNavigation();
    $$('[data-page]').forEach(page=>page.hidden=page.dataset.page!==view);
    window.NoGuruRobots?.setView(view);
    setMotion(false);
    if(view==='onboarding')renderJourney();
    if(options.url!==false)syncURL();
    if(options.scroll!==false)window.scrollTo({top:0,behavior:'instant'});
    if(options.focus){const heading=$(`[data-page="${view}"] h1`);heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true});}
    syncEntrance();
  }
  function goJourney(step,{editing=false,focus=true}={}){
    state.journey.step=normalizeStep(step);state.journey.editingFromReview=editing;
    showView('onboarding',{focus});
  }
  function refreshNavigation(){
    const evidenceButton=$('.site-header .evidence-link');
    if(state.view==='evidence')evidenceButton.setAttribute('aria-current','page');else evidenceButton.removeAttribute('aria-current');
    $$('[data-menu-go]').forEach(button=>{if(button.dataset.menuGo===state.view)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current');});
    const hasJourney=state.journey.step!=='meet'||state.journey.allocationDraft!==''||state.preferences.name!=='NoGuru'||state.preferences.accent!=='apricot';
    $('#menu-journey-title').textContent=state.journey.completed?'Revisit your journey':hasJourney?'Continue your journey':'Your personal guide';
    $('#menu-journey-detail').textContent=hasJourney?`${journeyOrder.indexOf(state.journey.step)+1} of ${journeyOrder.length} · ${journeyCopy[state.journey.step].label}`:'Meet your guide, at your pace';
  }
  function captureOverflow(element){
    const props={};
    ['overflow','overflow-x','overflow-y'].forEach(property=>{props[property]={value:element.style.getPropertyValue(property),priority:element.style.getPropertyPriority(property)};});
    return {element,props};
  }
  function restoreOverflow(record){
    ['overflow','overflow-x','overflow-y'].forEach(property=>record.element.style.removeProperty(property));
    Object.entries(record.props).forEach(([property,saved])=>{if(saved.value)record.element.style.setProperty(property,saved.value,saved.priority);});
  }
  function finishMenuClose({restore=true}={}){
    menuState.open=false;
    $('#site-menu-toggle').setAttribute('aria-expanded','false');
    const back=menuReturn;menuReturn=null;
    if(!back)return;
    back.overflow.forEach(restoreOverflow);
    if(back.page){back.page.scrollTop=back.pageTop;back.page.scrollLeft=back.pageLeft;}
    if(restore){
      if(back.element&&back.element.isConnected&&back.element.getClientRects().length)back.element.focus({preventScroll:true});
      window.scrollTo({left:back.x,top:back.y,behavior:'instant'});
    }
  }
  function openSiteMenu(){
    if(siteMenuDialog.open)return;
    const page=$(`[data-page="${state.view}"]`);
    menuReturn={element:document.activeElement,x:window.scrollX,y:window.scrollY,page,pageTop:page? page.scrollTop:0,pageLeft:page? page.scrollLeft:0,overflow:[captureOverflow(document.documentElement),captureOverflow(document.body),...(page?[captureOverflow(page)]:[])]};
    setMotion(false);refreshNavigation();
    menuReturn.overflow.forEach(record=>record.element.style.setProperty('overflow','hidden'));
    menuState.open=true;menuState.openedFrom=state.view;
    $('#site-menu-toggle').setAttribute('aria-expanded','true');
    siteMenuDialog.showModal();syncEntrance();
  }
  function closeSiteMenu({restore=true}={}){
    if(siteMenuDialog.open)siteMenuDialog.close();
    finishMenuClose({restore});
    syncEntrance();
  }
  $('#site-menu-toggle').addEventListener('click',openSiteMenu);
  $('#close-site-menu').addEventListener('click',()=>closeSiteMenu());
  $('#return-from-menu').addEventListener('click',()=>closeSiteMenu());
  siteMenuDialog.addEventListener('close',()=>finishMenuClose());
  siteMenuDialog.addEventListener('click',event=>{if(event.target===siteMenuDialog){const r=siteMenuDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closeSiteMenu();}});
  $$('[data-menu-go]').forEach(button=>button.addEventListener('click',()=>{const destination=button.dataset.menuGo;closeSiteMenu({restore:false});showView(destination,{focus:true});}));
  $$('[data-go]').forEach(button=>button.addEventListener('click',event=>{event.preventDefault();showView(button.dataset.go,{focus:true});}));
  $$('[data-back]').forEach(button=>button.addEventListener('click',()=>showView(state.previousView==='evidence'?'story':state.previousView,{focus:true})));
  $$('.stage-tabs button').forEach(button=>button.addEventListener('click',()=>{setStage(button.dataset.stage);if(state.motion)setMotion(true);}));
  $('.stage-tabs').addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;event.preventDefault();let i=stageOrder.indexOf(state.stage);i=event.key==='Home'?0:event.key==='End'?stageOrder.length-1:(i+(event.key==='ArrowRight'?1:-1)+stageOrder.length)%stageOrder.length;setStage(stageOrder[i]);$(`#tab-${state.stage}`).focus();});
  $('#motion-toggle').addEventListener('click',()=>setMotion(!state.motion));
  $('#entrance-motion-toggle').addEventListener('click',()=>{state.entrancePaused=state.entranceMotion;syncEntrance();});
  $('#sound-toggle').addEventListener('click',async()=>{state.sound=await window.NoGuruRobots.enableSound(!state.sound);$('#sound-toggle').setAttribute('aria-pressed',String(state.sound));$('#sound-toggle').setAttribute('aria-label',state.sound?'Turn off sound effects':'Turn on gentle sound effects');$('#sound-toggle').textContent=state.sound?'Sound on':'Sound off';});
  $('#skip-stage').addEventListener('click',()=>{setStage(stageOrder[(stageOrder.indexOf(state.stage)+1)%stageOrder.length]);if(state.motion)setMotion(true);});
  $('#captions-toggle').addEventListener('click',()=>{state.captions=!state.captions;$('#caption').classList.toggle('is-hidden',!state.captions);$('#caption').setAttribute('aria-hidden',String(!state.captions));$('#captions-toggle').setAttribute('aria-pressed',String(state.captions));$('#captions-toggle').setAttribute('aria-label',state.captions?'Hide captions':'Show captions');});
  $$('[data-join]').forEach(button=>button.addEventListener('click',()=>{setMotion(false);dialog.showModal();}));
  $$('[data-close]').forEach(button=>button.addEventListener('click',()=>dialog.close()));
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
  $('#preview-personal-guide').addEventListener('click',()=>{dialog.close();goJourney('meet');});
  $$('[data-personalize]').forEach(button=>button.addEventListener('click',()=>goJourney('meet')));
  $('#revisit-journey').addEventListener('click',()=>goJourney('meet'));
  $('#edit-capital-plan').addEventListener('click',()=>goJourney('capital',{editing:true}));
  $('#guide-name').addEventListener('input',event=>{state.preferences.name=event.target.value.trim().slice(0,20)||'NoGuru';invalidateReview();applyPreferences();});
  $$('#journey-form input[type=radio]').forEach(input=>input.addEventListener('change',()=>{state.preferences[input.name]=input.value;invalidateReview();applyPreferences();}));
  $('#update-cadence').addEventListener('change',event=>{state.preferences.cadence=event.target.value;invalidateReview();applyPreferences();});
  $('#planned-capital').addEventListener('input',event=>{invalidateReview();setAllocation(event.target.value);});
  $('#planned-capital').addEventListener('blur',event=>{if(event.target.value.trim())setAllocation(event.target.value,{showError:true});});
  $('#journey-form').addEventListener('submit',event=>{
    event.preventDefault();
    if(state.journey.step==='review')return;
    if(state.journey.step==='capital'&&!setAllocation($('#planned-capital').value,{showError:true}).valid){$('#planned-capital').focus();return;}
    if(state.journey.step==='meet'){$('#guide-name').value=state.preferences.name;applyPreferences();}
    if(state.journey.editingFromReview){goJourney('review');return;}
    goJourney(journeyOrder[Math.min(journeyOrder.indexOf(state.journey.step)+1,6)]);
  });
  $('#journey-back').addEventListener('click',()=>{if(state.journey.editingFromReview){goJourney('review');return;}const index=journeyOrder.indexOf(state.journey.step);if(index===0)showView('story',{focus:true});else goJourney(journeyOrder[index-1]);});
  $$('[data-edit-step]').forEach(button=>button.addEventListener('click',()=>goJourney(button.dataset.editStep,{editing:true})));
  $('#preview-connection').addEventListener('click',()=>{
    if(!setAllocation($('#planned-capital').value,{showError:true}).valid){goJourney('capital',{editing:true});$('#planned-capital').focus();return;}
    state.journey.connectionPreviewed=true;renderJourney();$('#connection-preview').scrollIntoView({behavior:reducedMotion.matches?'instant':'smooth',block:'nearest'});
  });
  $('#finish-journey').addEventListener('click',()=>{if(!state.journey.connectionPreviewed)return;state.journey.completed=true;showView('account',{focus:true});});
  $('#preview-update').addEventListener('click',()=>{const open=$('#account-update').hidden;$('#account-update').hidden=!open;$('#preview-update').setAttribute('aria-expanded',String(open));$('#preview-update').innerHTML=open?'Hide example <span aria-hidden="true">−</span>':'Preview an update <span aria-hidden="true">↗</span>';if(open){$('#account-update').style.scrollMarginTop='16px';$('#account-update').scrollIntoView({behavior:reducedMotion.matches?'instant':'smooth',block:'start'});}});
  $('#close-update').addEventListener('click',()=>{$('#account-update').hidden=true;$('#preview-update').setAttribute('aria-expanded','false');$('#preview-update').innerHTML='Preview an update <span aria-hidden="true">↗</span>';$('#preview-update').focus();});
  function openLearning(context){
    const content=academyContexts[context];if(!content)return;
    learningReturn={element:document.activeElement,x:window.scrollX,y:window.scrollY};
    setMotion(false);learningState.open=true;learningState.context=context;
    $('#learning-source-kind').textContent=content.kind;
    $('#learning-intro').textContent=content.intro;
    $('#learning-topic').textContent=content.topic;
    $('#learning-summary').textContent=content.summary;
    const mechanics=$('#learning-mechanics');mechanics.replaceChildren();mechanics.hidden=!content.details?.length;
    (content.details||[]).forEach(detail=>{const section=document.createElement('section'),heading=document.createElement('h3'),paragraph=document.createElement('p');heading.textContent=detail.title;paragraph.textContent=detail.body;section.append(heading,paragraph);mechanics.append(section);});
    $('#learning-lesson-title').textContent=content.title;
    $('#learning-link-action').textContent=content.action;
    $('#learning-lesson').href=content.url;
    $('#academy-all').href='https://noguru.io/academy/';
    $('#learning-secondary').hidden=!content.secondary;
    if(content.secondary){$('#learning-secondary').textContent=content.secondary.title+' ↗';$('#learning-secondary').href=content.secondary.url;}else $('#learning-secondary').removeAttribute('href');
    learningDialog.showModal();learningDialog.scrollTop=0;syncEntrance();
  }
  function closeLearning(){learningDialog.close();}
  learningDialog.addEventListener('close',()=>{learningState.open=false;const back=learningReturn;learningReturn=null;if(back){if(back.element&&back.element.isConnected&&back.element.getClientRects().length)back.element.focus({preventScroll:true});window.scrollTo({left:back.x,top:back.y,behavior:'instant'});}});
  learningDialog.addEventListener('click',event=>{if(event.target===learningDialog){const r=learningDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closeLearning();}});
  $('#close-learning').addEventListener('click',closeLearning);
  $('#return-from-learning').addEventListener('click',closeLearning);
  $('#journey-explain').addEventListener('click',()=>openLearning(state.journey.step));
  $('#account-update-explain').addEventListener('click',()=>openLearning('account_update'));
  $('#story-explain').addEventListener('click',()=>openLearning(`story_${state.stage}`));
  reducedMotion.addEventListener('change',()=>{setMotion(false);syncEntrance();});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)setMotion(false);syncEntrance();});
  const entranceVisibility=new IntersectionObserver(()=>syncEntrance(),{threshold:[0,.08]});entranceVisibility.observe($('[data-robot-layer=entrance]'));
  [siteMenuDialog,learningDialog,dialog].forEach(modal=>modal.addEventListener('close',()=>syncEntrance()));
  const storyVisibility=new IntersectionObserver(entries=>{if(state.motion&&(!entries[0].isIntersecting||entries[0].intersectionRatio<.08))setMotion(false);},{threshold:[0,.08]});
  storyVisibility.observe($('#scene-panel'));
  const controlVisibility=new IntersectionObserver(entries=>{if(state.motion&&!entries[0].isIntersecting)setMotion(false);},{threshold:0});
  controlVisibility.observe($('.playback-controls'));
  const params=new URLSearchParams(location.search);
  setStage(params.get('stage')||'buy');applyPreferences();updatePlanDisplay();
  const legacyPersonalize=params.get('view')==='account'&&params.get('personalize')==='1';
  state.journey.step=normalizeStep(legacyPersonalize?'meet':params.get('step'));
  showView(legacyPersonalize?'onboarding':params.get('view')||'entrance',{url:legacyPersonalize,scroll:false});
  window.NoGuruPreview={
    getState:()=>({view:state.view,stage:state.stage,motion:state.motion,captions:state.captions,sound:state.sound,entrancePaused:state.entrancePaused,entranceMotion:state.entranceMotion,orbit:window.NoGuruOrbit?.getState(),robot:window.NoGuruRobots?.getState(),reducedMotion:reducedMotion.matches,preferences:{...state.preferences},accountConnected:false,updateExampleVisible:!$('#account-update').hidden,onboarding:{...state.journey,stepNumber:journeyOrder.indexOf(state.journey.step)+1,stepCount:journeyOrder.length},actualAccount:{value:null,cash:null,openPositions:null,completedTrades:null},learning:{...learningState},menu:{...menuState,scrollLocked:menuReturn!==null}}),
    validatePlanningAmount,
    config:Object.freeze({joinDestination:null,audioProduced:false,optionalNativeSFX:true,robotIsRigged:false,liveData:false,storage:false,updatesSent:false,minimum:{supplierStatedUSDT:3000,recordedDate:'2026-11-09',verifyBeforeSetup:true},technicalMaximumMinor:MAX_MINOR.toString(),academy:{index:'https://noguru.io/academy/',checkedDate:'2026-11-11',contexts:Object.keys(academyContexts)},permissions:{read:false,trade:false,transfer:false,payment:false}})
  };
})();
