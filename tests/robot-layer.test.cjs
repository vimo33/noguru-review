const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

// In-memory media mocks verify scheduling and memory behavior, not asset fidelity.
function setup() {
  const requests = new Map(), frames = new Map(), listeners = {}, observers = [];
  const draws = []; let nextFrame=1, clock=0, nextTimer=1; const timers=new Map();
  const media = {matches:false, handlers:[], addEventListener(_,fn){this.handlers.push(fn);}};
  const canvas = {width:0,height:0,getContext(){return {clearRect(){},drawImage(image){draws.push(image.url);}};}};
  const poster = {};
  const element = {dataset:{robotLayer:'story'},style:{setProperty(){}},querySelector(selector){return selector==='canvas'?canvas:poster;}};
  const actions = Object.fromEntries(['welcome','explain','wait','nod'].map(action=>[action,{fps:12,loop:action==='wait',frames:Array.from({length:12},(_,i)=>({src:`${action}.webp`,x:i%4*128,y:Math.floor(i/4)*128,w:128,h:128}))}]));
  const manifest = {width:128,height:128,poster:'poster.webp',actions};
  const context = {URL,Map,Set,Image:function(){},console,Date:{now:()=>clock},setTimeout(fn,delay){const id=nextTimer++;timers.set(id,{fn,at:clock+delay});return id;},clearTimeout(id){timers.delete(id);},document:{baseURI:'https://example.test/experience/',hidden:false,body:{dataset:{}},querySelectorAll:()=>[element],addEventListener(event,fn){(listeners[event]||=[]).push(fn);}},matchMedia:()=>media,requestAnimationFrame(fn){const id=nextFrame++;frames.set(id,fn);return id;},cancelAnimationFrame(id){frames.delete(id);},IntersectionObserver:class{constructor(fn){this.fn=fn;observers.push(this);}observe(){}},fetch(url){url=String(url);if(url.endsWith('manifest.json'))return Promise.resolve({ok:true,json:async()=>manifest});return new Promise(resolve=>requests.set(url,()=>resolve({ok:true,blob:async()=>({url})})));},createImageBitmap:async blob=>({width:2048,height:2048,url:blob.url,close(){this.closed=true;}})};
  context.window=context;
  vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../site/experience/robot-layer.js'),'utf8'),context);
  const api=context.NoGuruRobots;
  const flush=async()=>{await new Promise(setImmediate);};
  return {api,context,element,media,draws,frames,requests,flush,advance(ms){clock+=ms;for(const [id,timer]of[...timers]){if(timer.at<=clock){timers.delete(id);timer.fn();}}},visible(value){observers[0].fn([{isIntersecting:value,intersectionRatio:value?1:0}]);},resolve(action){const key=[...requests.keys()].find(x=>x.endsWith(`${action}.webp`));assert.ok(key,`pending ${action}`);requests.get(key)();requests.delete(key);},tick(time){const callbacks=[...frames.values()];frames.clear();callbacks.forEach(fn=>fn(time));}};
}

test('latest paused stage is repainted after an older asynchronous atlas resolves',async()=>{
  const s=setup();s.api.setView('story');s.visible(true);await s.flush();
  s.api.story('wait',false);await s.flush();
  s.resolve('explain');await s.flush();s.resolve('wait');await s.flush();
  assert.match(s.draws.at(-1),/wait.webp$/);
  assert.equal(s.api.getState().instances.story.action,'wait');
  assert.equal(s.frames.size,0,'paused repaint must not start animation');
});

test('explicit playback freezes offscreen and hidden, and reduced motion cancels request',async()=>{
  const s=setup();s.api.setView('story');s.visible(true);await s.flush();s.resolve('explain');await s.flush();
  assert.equal(s.frames.size,0,'initial state is static');
  s.api.story('buy',true);await s.flush();assert.ok(s.frames.size>0);
  s.tick(0);s.tick(120);await s.flush();
  s.visible(false);assert.equal(s.frames.size,0);
  s.visible(true);await s.flush();assert.ok(s.frames.size>0);
  s.context.document.hidden=true;
  // The observer and API expose the same canPlay constraint during background work.
  s.tick(240);assert.equal(s.frames.size,0);
  s.context.document.hidden=false;s.media.matches=true;s.media.handlers.forEach(fn=>fn());await s.flush();
  assert.equal(s.api.getState().instances.story.requested,false);
  assert.equal(s.frames.size,0);
  assert.equal(s.api.getState().soundEnabled,false,'sound defaults off');
});

test('decoded atlas cache stays within two pages and 32 MiB',async()=>{
  const s=setup();s.api.setView('story');s.visible(true);await s.flush();s.resolve('explain');await s.flush();
  s.api.story('wait',false);await s.flush();s.resolve('wait');await s.flush();
  s.api.story('sell',true);s.advance(2800);await s.flush();s.resolve('nod');await s.flush();
  const result=s.api.getState();
  assert.ok(result.decodedAtlasBytes<=32*1024*1024);
  assert.ok(result.cachedAtlases<=2);
  assert.match(s.draws.at(-1),/nod.webp$/);
});


test('pausing a sale preserves elapsed time and cannot mark it complete',async()=>{
  const s=setup();s.api.setView('story');s.visible(true);await s.flush();s.resolve('explain');await s.flush();
  s.api.story('sell',true);await s.flush();s.resolve('wait');await s.flush();
  s.advance(1000);s.api.story('sell',false);
  assert.equal(s.api.getState().sale.completed,false);
  assert.equal(s.context.document.body.dataset.saleComplete,'false');
  assert.equal(s.api.getState().sale.elapsedMs,1000);
  s.advance(5000);assert.equal(s.api.getState().sale.elapsedMs,1000);
  s.api.story('sell',true);s.advance(1799);assert.equal(s.api.getState().sale.completed,false);
  s.advance(1);await s.flush();s.resolve('nod');await s.flush();
  assert.equal(s.api.getState().sale.completed,true);
  assert.equal(s.api.getState().instances.story.action,'nod');
});


test('explicit resume refreshes geometry after a stale observer notification',async()=>{
  const s=setup();s.context.innerWidth=1280;s.context.innerHeight=720;
  s.element.getClientRects=()=>[1];
  s.element.getBoundingClientRect=()=>({left:10,top:10,right:210,bottom:310,width:200,height:300});
  s.api.setView('story');await s.flush();s.resolve('explain');await s.flush();
  s.visible(false); // Simulates an old notification queued while a modal was open.
  s.api.story('buy',true);await s.flush();
  assert.equal(s.api.getState().instances.story.visible,true);
  assert.ok(s.frames.size>0,'actual onscreen geometry permits explicit playback');
  s.api.pause();
});
