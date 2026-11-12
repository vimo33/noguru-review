/* Transparent frame playback. The scene, events, text and sound remain native code. */
(() => {
  'use strict';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const manifestURL = new URL('assets/robot-layer/manifest.json', document.baseURI);
  const cache = new Map();
  const MAX_BYTES = 32 * 1024 * 1024;
  let manifestPromise, cachedBytes = 0, currentView = 'entrance';
  let saleTimer = null, tapTimer = null, cueSerial = 0, lastStage = null;
  let soundEnabled = false, audioContext = null;
  const sale = {elapsed:0, startedAt:null, completed:false, started:false};
  const voices = new Set();
  const instances = new Map();
  function manifest() {
    return manifestPromise ||= fetch(manifestURL, {cache:'no-cache'}).then(response => {
      if (!response.ok) throw new Error('Robot manifest unavailable');
      return response.json();
    }).then(data => {
      data.width ||= data.frameWidth; data.height ||= data.frameHeight;
      if (!(data.width > 0 && data.height > 0 && data.actions)) throw new Error('Invalid robot manifest');
      return data;
    });
  }
  async function atlas(src) {
    const url = new URL(src, manifestURL).href;
    if (cache.has(url)) {
      const entry = cache.get(url); cache.delete(url); cache.set(url, entry);
      return entry.promise;
    }
    const entry = {bytes:0, image:null, promise:null};
    entry.promise = fetch(url).then(response => {
      if (!response.ok) throw new Error('Robot frame unavailable');
      return response.blob();
    }).then(async blob => {
      let image;
      if (typeof createImageBitmap === 'function') image = await createImageBitmap(blob);
      else {
        const objectURL = URL.createObjectURL(blob);
        try { image = new Image(); image.src = objectURL; await image.decode(); }
        finally { URL.revokeObjectURL(objectURL); }
      }
      const bytes = image.width * image.height * 4;
      if (bytes > MAX_BYTES) { image.close?.(); throw new Error('Robot atlas exceeds memory limit'); }
      entry.bytes = bytes; entry.image = image; cachedBytes += bytes;
      for (const [key, old] of cache) {
        if (cachedBytes <= MAX_BYTES && cache.size <= 2) break;
        if (key === url || !old.image) continue;
        old.image.close?.(); cachedBytes -= old.bytes; cache.delete(key);
      }
      return image;
    }).catch(error => { if (cache.get(url) === entry) cache.delete(url); throw error; });
    cache.set(url, entry);
    return entry.promise;
  }
  class RobotLayer {
    constructor(element) {
      this.element = element; this.name = element.dataset.robotLayer;
      this.canvas = element.querySelector('canvas'); this.context = this.canvas.getContext('2d', {alpha:true});
      this.action = this.name === 'entrance' ? 'welcome' : 'explain';
      this.index = 0; this.elapsed = 0; this.lastTime = null; this.raf = null;
      this.requested = false; this.visible = false; this.active = false; this.finished = false;
      this.ready = false; this.failed = false; this.drawing = false; this.pendingIndex = null; this.version = 0;
      this.observer = new IntersectionObserver(entries => {
        this.visible = entries[0].isIntersecting && entries[0].intersectionRatio > .08;
        this.sync();
      }, {threshold:[0,.08,.25]});
      this.observer.observe(element);
    }
    measureVisible() {
      if(!this.element.getBoundingClientRect)return this.visible;
      if(!this.element.getClientRects().length)return false;
      const r=this.element.getBoundingClientRect();
      const width=Math.max(0,Math.min(r.right,innerWidth)-Math.max(r.left,0));
      const height=Math.max(0,Math.min(r.bottom,innerHeight)-Math.max(r.top,0));
      return r.width>0&&r.height>0&&width*height/(r.width*r.height)>.08;
    }
    canPlay() { return this.requested && this.active && this.visible && !document.hidden && !reduced.matches && !this.failed && !this.finished; }
    async load() {
      if (this.data || this.failed) return;
      try {
        this.data = await manifest();
        this.canvas.width = this.data.width; this.canvas.height = this.data.height;
        this.element.style.setProperty('--robot-aspect', `${this.data.width}/${this.data.height}`);
        if (this.data.poster) {const poster=new Image();poster.onload=()=>{this.element.querySelector('img').src=poster.src;};poster.src=new URL(this.data.poster,manifestURL).href;}
      } catch (_) { this.fail(); }
    }
    fail() { this.failed = true; this.requested = false; this.stop(); this.element.dataset.ready = 'false'; this.element.dataset.unavailable='true';
      let status=this.element.querySelector('.robot-motion-status');if(!status){status=document.createElement('span');status.className='robot-motion-status';status.setAttribute('role','status');status.textContent='Motion is unavailable. Your guide is still here.';this.element.append(status);}
      if(this.name==='entrance'){const button=document.querySelector('#hello-guide');if(button){button.disabled=true;button.textContent='Your guide is here';}}
    }
    set(action, play, {restart=false}={}) {
      const changed = action !== this.action;
      if (changed || restart || (play && this.finished)) {
        this.action = action; this.elapsed = 0; this.index = 0; this.finished = false; this.version++;
      }
      this.requested = Boolean(play) && !reduced.matches;
      this.sync(changed || restart);
    }
    stop() { if (this.raf !== null) cancelAnimationFrame(this.raf); this.raf = null; this.lastTime = null; }
    async paint(index) {
      if (!this.data || this.failed) return false;
      if (this.drawing) { this.pendingIndex = index; return false; }
      const action = this.data.actions[this.action];
      if (!action?.frames?.length) { this.fail(); return false; }
      const frame = action.frames[Math.min(index, action.frames.length - 1)];
      const version = this.version;
      this.drawing = true;
      try {
        const source = frame.src || this.data.atlases?.[frame.atlas]?.src;
        if (!source) throw new Error('Missing robot atlas');
        const image = await atlas(source);
        if (version !== this.version) return false;
        const x=frame.x||0, y=frame.y||0, w=frame.w||this.data.width, h=frame.h||this.data.height;
        if (x < 0 || y < 0 || x+w > image.width || y+h > image.height) throw new Error('Invalid frame crop');
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.context.drawImage(image,x,y,w,h,0,0,this.canvas.width,this.canvas.height);
        this.index = index; this.ready = true; this.element.dataset.ready = 'true';
        return true;
      } catch (_) { this.fail(); return false; }
      finally { this.drawing = false; if (this.pendingIndex !== null) {const pending=this.pendingIndex; this.pendingIndex=null; this.paint(pending);} }
    }
    async sync(repaint=false) {
      this.stop();
      this.visible=this.measureVisible();
      if (!this.active || !this.visible || document.hidden) return;
      await this.load();
      if (!this.data || this.failed) return;
      if (!this.ready || repaint || reduced.matches) await this.paint(reduced.matches ? (this.data.actions[this.action]?.posterFrame || 0) : this.index);
      if (this.canPlay() && this.raf === null) this.raf = requestAnimationFrame(time => this.tick(time));
    }
    tick(time) {
      this.raf = null;
      if (!this.canPlay()) { this.lastTime = null; return; }
      const action = this.data.actions[this.action];
      if (this.lastTime !== null && !this.drawing) this.elapsed += Math.min(time-this.lastTime,100);
      this.lastTime = time;
      const total = action.frames.length;
      let index = Math.floor(this.elapsed * (action.fps || 8) / 1000);
      if (index >= total) {
        if (action.loop) { index %= total; this.elapsed %= total * 1000 / (action.fps || 8); }
        else { index = total-1; this.finished = true; }
      }
      if (index !== this.index) this.paint(index);
      if (!this.finished) this.raf = requestAnimationFrame(next => this.tick(next));
    }
    diagnostics() { return {action:this.action,frame:this.index,playing:this.raf!==null,requested:this.requested,visible:this.visible,active:this.active,ready:this.ready,failed:this.failed,finished:this.finished}; }
  }
  document.querySelectorAll('[data-robot-layer]').forEach(element => instances.set(element.dataset.robotLayer,new RobotLayer(element)));
  function cancelCues() { clearTimeout(saleTimer); clearTimeout(tapTimer); saleTimer=tapTimer=null; cueSerial++; for(const voice of voices){try{voice.stop();}catch(_){}} }
  function sound(kind) {
    if (!soundEnabled || !audioContext || document.hidden || currentView !== 'story') return;
    const now=audioContext.currentTime, oscillator=audioContext.createOscillator(), gain=audioContext.createGain();
    oscillator.type='sine'; oscillator.frequency.value=kind==='tap'?850:660;
    gain.gain.setValueAtTime(0,now); gain.gain.linearRampToValueAtTime(kind==='tap'?.035:.045,now+.015);
    gain.gain.exponentialRampToValueAtTime(.0001,now+(kind==='tap'?.16:.55));
    oscillator.connect(gain); gain.connect(audioContext.destination);
    voices.add(oscillator); oscillator.onended=()=>{voices.delete(oscillator);gain.disconnect();};
    oscillator.start(now); oscillator.stop(now+(kind==='tap'?.18:.6));
  }
  function setView(view) {
    currentView=view; cancelCues();
    for (const [name, instance] of instances) { instance.active=name===view; if (!instance.active) instance.requested=false; instance.sync(); }
  }
  function story(stage, play, {restart=false}={}) {
    const robot=instances.get('story'); if (!robot) return;
    const now=Date.now();
    if(lastStage==='sell'&&sale.startedAt!==null){sale.elapsed=Math.min(2800,sale.elapsed+now-sale.startedAt);sale.startedAt=null;}
    const changed=lastStage!==stage; lastStage=stage;
    cancelCues();
    if(changed){sale.elapsed=0;sale.completed=false;sale.started=false;}
    if(play&&soundEnabled)audioContext?.resume().catch(()=>{});
    const action=stage==='buy'?'explain':stage==='wait'?'wait':sale.completed?'nod':'wait';
    const runCharacter=play&&!(stage==='sell'&&sale.completed&&robot.finished);
    robot.set(action,runCharacter,{restart:changed||(restart&&stage!=='sell')});
    document.body.dataset.saleComplete=stage==='sell'&&sale.completed?'true':'false';
    document.body.dataset.saleStarted=stage==='sell'&&sale.started?'true':'false';
    if (!play || reduced.matches || document.hidden || currentView!=='story') return;
    const serial=cueSerial;
    if (stage==='buy') tapTimer=setTimeout(()=>{if(serial===cueSerial&&robot.canPlay())sound('tap');},1200);
    if (stage==='sell'&&!sale.completed) {
      sale.started=true;sale.startedAt=Date.now();document.body.dataset.saleStarted='true';
      saleTimer=setTimeout(()=>{
        if(serial!==cueSerial||!robot.visible||!robot.active||document.hidden)return;
        sale.elapsed=2800;sale.startedAt=null;sale.completed=true;
        document.body.dataset.saleComplete='true';robot.set('nod',true,{restart:true});sound('complete');
      },Math.max(0,2800-sale.elapsed));
    }
  }
  async function enableSound(enabled) {
    soundEnabled=Boolean(enabled);
    if (soundEnabled) {
      try { const Audio=window.AudioContext||window.webkitAudioContext; if (!Audio) throw new Error(); audioContext ||= new Audio(); await audioContext.resume(); }
      catch (_) { soundEnabled=false; }
    } else { for (const voice of voices) {try{voice.stop();}catch(_){}} }
    return soundEnabled;
  }
  document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelCues();audioContext?.suspend().catch(()=>{});}for(const instance of instances.values())instance.sync();});
  reduced.addEventListener('change',()=>{cancelCues();for(const instance of instances.values()){if(reduced.matches)instance.requested=false;instance.sync(true);}});
  window.NoGuruRobots={setView,story,enableSound,welcome:()=>instances.get('entrance')?.set('welcome',true,{restart:true}),pause:()=>{cancelCues();for(const instance of instances.values()){instance.requested=false;instance.sync();}},getState:()=>({view:currentView,reducedMotion:reduced.matches,soundEnabled,sale:{elapsedMs:sale.elapsed+(sale.startedAt===null?0:Date.now()-sale.startedAt),completed:sale.completed,started:sale.started},decodedAtlasBytes:cachedBytes,cachedAtlases:cache.size,instances:Object.fromEntries([...instances].map(([name,instance])=>[name,instance.diagnostics()]))})};
})();
