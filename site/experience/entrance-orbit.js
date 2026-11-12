/* Decorative coin orbit. No market, account or transaction meaning. */
(() => {
  'use strict';
  const stage=document.querySelector('.entrance-art');
  if(!stage)return;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const PERIOD_MS=24000, FRAME_MS=1000/24;
  const coins=[...stage.querySelectorAll('.coin')].slice(0,2);
  const third=document.createElement('span');
  third.className='coin coin-orbit-third';
  third.innerHTML='<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="8"/><path d="M13 12a5 5 0 0 1 6 0M12 19a5 5 0 0 0 8 0"/></svg>';
  stage.append(third);coins.push(third);
  coins.forEach((coin,index)=>{coin.classList.add('orbit-coin');coin.dataset.orbitCoin=String(index);coin.setAttribute('aria-hidden','true');});
  let paused=true, visible=false, running=false, raf=null;
  let elapsed=0, previousTime=null, previousPaint=null, paints=0;
  let width=0,height=0;
  const phases=[-5*Math.PI/6,-Math.PI/6,Math.PI/2];
  const active=()=>document.body.dataset.view==='entrance';
  function measureVisible(){
    if(!stage.getClientRects().length)return false;
    const r=stage.getBoundingClientRect();
    const w=Math.max(0,Math.min(r.right,innerWidth)-Math.max(r.left,0));
    const h=Math.max(0,Math.min(r.bottom,innerHeight)-Math.max(r.top,0));
    return r.width>0&&r.height>0&&w*h/(r.width*r.height)>.08;
  }
  function paint(){
    const rx=Math.max(0,Math.min(width*.39,width/2-36));
    const ry=Math.min(height*(innerWidth<=760?.055:.075),54);
    const progress=elapsed/PERIOD_MS*Math.PI*2;
    for(let i=0;i<coins.length;i++){
      const angle=phases[i]+progress,depth=Math.sin(angle);
      const scale=.82+(depth+1)*.09;
      coins[i].style.transform=`translate(-50%,-50%) translate3d(${(Math.cos(angle)*rx).toFixed(2)}px,${(depth*ry).toFixed(2)}px,0) scale(${scale.toFixed(3)}) rotate(${(-8+depth*7).toFixed(2)}deg)`;
      const z=depth>0?'3':'1';
      if(coins[i].style.zIndex!==z)coins[i].style.zIndex=z;
    }
    paints++;
  }
  function stop(){if(raf!==null)cancelAnimationFrame(raf);raf=null;running=false;previousTime=null;previousPaint=null;}
  function frame(time){
    raf=null;
    if(paused||!active()||!visible||document.hidden||reduced.matches){stop();return;}
    if(previousTime!==null)elapsed=(elapsed+Math.min(time-previousTime,100))%PERIOD_MS;
    previousTime=time;
    if(previousPaint===null||time-previousPaint>=FRAME_MS){paint();previousPaint=time;}
    raf=requestAnimationFrame(frame);
  }
  function refresh(){
    const r=stage.getBoundingClientRect();width=r.width;height=r.height;
    visible=measureVisible();
    if(width&&height)paint();
    const shouldRun=!paused&&active()&&visible&&!document.hidden&&!reduced.matches;
    if(!shouldRun){stop();return;}
    if(raf===null){running=true;previousTime=null;previousPaint=null;raf=requestAnimationFrame(frame);}
  }
  const intersection=new IntersectionObserver(()=>refresh(),{threshold:[0,.08,.25]});intersection.observe(stage);
  const resize=new ResizeObserver(()=>refresh());resize.observe(stage);
  const view=new MutationObserver(()=>refresh());view.observe(document.body,{attributes:true,attributeFilter:['data-view']});
  document.addEventListener('visibilitychange',refresh);
  reduced.addEventListener('change',refresh);
  window.NoGuruOrbit={
    setPaused(value){paused=Boolean(value);refresh();},
    refresh,
    getState:()=>({paused,running,active:active(),visible,documentHidden:document.hidden,reducedMotion:reduced.matches,elapsedMs:Math.round(elapsed),paintCount:paints,coinCount:coins.length,periodMs:PERIOD_MS,maximumPaintFPS:24,decorative:true})
  };
  refresh();
})();
