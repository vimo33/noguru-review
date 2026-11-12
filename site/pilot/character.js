/* NoGuru ceramic guide — procedural 3D study, Three.js r180 (MIT).
 * Locally rendered geometry; no video, remote assets, tracking or audio.
 * The geometry is a design prototype, not a scanned/production character asset.
 */
const VALID_STATES = new Set(['greet','idle','select','buy','target','acknowledge','wait','explain']);
const FALLBACK_URL = new URL('./character-fallback.png', import.meta.url).href;
const clamp = (v,a,b) => Math.max(a,Math.min(b,v));
const smooth = t => {t=clamp(t,0,1);return t*t*(3-2*t);};

export async function createCharacter(container, {reducedMotion=false}={}) {
  if (!(container instanceof Element)) throw new TypeError('A character container is required.');
  let renderer, disposed=false, frame=0, visible=true, hidden=document.hidden;
  let paused=true, state='idle', elapsed=0, transitionTime=1, lastTime=0, reduced=!!reducedMotion;
  let contextLost=false;
  let scene, camera, model, rig, targetPose, fromPose, currentPose, canvas, width=1, height=1;
  let resizeObserver, intersectionObserver, mediaQuery, meshCount=0, materials=[], geometries=[], textures=[];
  const fallback = document.createElement('img');
  fallback.alt='NoGuru, a warm ceramic robot guide';
  Object.assign(fallback.style,{width:'100%',height:'100%',objectFit:'contain',display:'block'});
  const showFallback = () => { if(disposed)return;fallback.src=FALLBACK_URL; renderer?.domElement?.remove(); if(!fallback.isConnected)container.append(fallback); container.dataset.characterMode='static'; };
  const api={ready:false,setState,setPaused,setAccent,dispose,getState:diagnostics};
  try {
    const THREE = await import('./vendor/three.module.min.js');
    if(disposed)return api;
    renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,premultipliedAlpha:true,powerPreference:'low-power',preserveDrawingBuffer:false});
    renderer.setClearColor(0x000000,0);renderer.outputColorSpace=THREE.SRGBColorSpace;
    renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;
    renderer.shadowMap.enabled=false;
    canvas=renderer.domElement;canvas.setAttribute('aria-label','NoGuru ceramic guide');canvas.setAttribute('role','img');
    Object.assign(canvas.style,{width:'100%',height:'100%',display:'block'});
    container.append(canvas);container.dataset.characterMode='3d';
    scene=new THREE.Scene();camera=new THREE.OrthographicCamera(-3,3,3,-3,.1,40);
    camera.position.set(2.7,3.35,11);camera.lookAt(0,2.25,0);
    scene.add(new THREE.HemisphereLight(0xfff6e5,0x7e9386,2.25));
    const key=new THREE.DirectionalLight(0xfff2da,3.0);key.position.set(-3.5,7,5.0);key.castShadow=true;
    key.shadow.mapSize.set(1024,1024);key.shadow.camera.left=-4;key.shadow.camera.right=4;key.shadow.camera.top=6;key.shadow.camera.bottom=-2;
    key.shadow.normalBias=.025;key.shadow.bias=-.0004;key.shadow.radius=4;scene.add(key);
    const fill=new THREE.DirectionalLight(0xe4e6ef,1.4);fill.position.set(4,4,-2);scene.add(fill);
    const front=new THREE.DirectionalLight(0xfff8ed,.6);front.position.set(0,3,8);scene.add(front);
    function material(opts){const m=new THREE.MeshPhysicalMaterial(opts);materials.push(m);return m;}
    const ceramic=material({color:0xe9dec8,roughness:.68,metalness:0,clearcoat:.12,clearcoatRoughness:.6});
    const sage=material({color:0x526d62,roughness:.7,metalness:0,clearcoat:.08});
    const browMaterial=material({color:0x6c8677,roughness:1,metalness:0});
    const pupilMaterial=material({color:0x173b34,roughness:.85,metalness:0});
    const cheekMaterial=new THREE.MeshBasicMaterial({color:0xd4a17c,transparent:true,opacity:.13,depthWrite:false});materials.push(cheekMaterial);
    const face=material({color:0x294a43,roughness:.85,metalness:0,clearcoat:0});
    const accent=material({color:0xe5a07c,roughness:.56,metalness:0});
    const seam=material({color:0x9c927c,roughness:.9});
    const glow=material({color:0xffedc4,emissive:0xffdf9c,emissiveIntensity:.4,roughness:.4});
    // Subtle seeded grain belongs to the material, not the silhouette or alpha.
    const grain=document.createElement('canvas');grain.width=grain.height=256;const ctx=grain.getContext('2d');
    let seed=919;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
    ctx.fillStyle='#e9dec8';ctx.fillRect(0,0,256,256);
    for(let i=0;i<4200;i++){const v=random();ctx.fillStyle=v>.5?'rgba(143,113,77,.10)':'rgba(255,255,255,.18)';ctx.fillRect(random()*256,random()*256,.5+random(),.5+random());}
    const grainMap=new THREE.CanvasTexture(grain);grainMap.colorSpace=THREE.SRGBColorSpace;grainMap.wrapS=grainMap.wrapT=THREE.RepeatWrapping;grainMap.repeat.set(2,2);textures.push(grainMap);ceramic.map=grainMap;
    const unitSphere=new THREE.SphereGeometry(1,48,32),detailSphere=new THREE.SphereGeometry(1,24,16);geometries.push(unitSphere,detailSphere);
    function mesh(g,m,parent,x=0,y=0,z=0){if(!geometries.includes(g))geometries.push(g);const a=new THREE.Mesh(g,m);a.position.set(x,y,z);a.castShadow=true;a.receiveShadow=true;parent.add(a);meshCount++;return a;}
    function ellipsoid(parent,m,x,y,z,sx,sy,sz){const a=mesh(Math.max(sx,sy,sz)<.3?detailSphere:unitSphere,m,parent,x,y,z);a.scale.set(sx,sy,sz);return a;}
    function roundShape(w,h,r){const s=new THREE.Shape();const x=-w/2,y=-h/2;s.moveTo(x+r,y);s.lineTo(x+w-r,y);s.quadraticCurveTo(x+w,y,x+w,y+r);s.lineTo(x+w,y+h-r);s.quadraticCurveTo(x+w,y+h,x+w-r,y+h);s.lineTo(x+r,y+h);s.quadraticCurveTo(x,y+h,x,y+h-r);s.lineTo(x,y+r);s.quadraticCurveTo(x,y,x+r,y);return s;}
    function plate(w,h,r,d,b=.05){const g=new THREE.ExtrudeGeometry(roundShape(w,h,r),{depth:d,bevelEnabled:true,bevelSegments:6,steps:1,bevelSize:b,bevelThickness:b,curveSegments:18});g.translate(0,0,-d/2);return g;}
    function tube(points,r,parent,mat=seam,closed=false){const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)),closed);return mesh(new THREE.TubeGeometry(curve,Math.max(24,points.length*8),r,8,closed),mat,parent);}
    function capsule(parent,m,x,y,z,r,len){return mesh(new THREE.CapsuleGeometry(r,len,8,20),m,parent,x,y,z);}
    model=new THREE.Group();scene.add(model);model.rotation.y=-.13;
    // Feet, ankles and two leg segments: substantial ceramic soles, no floating base.
    const legs=[];
    for(const side of [-1,1]){
      const leg=new THREE.Group();leg.position.set(side*.38,.91,0);model.add(leg);legs.push(leg);
      ellipsoid(leg,sage,0,.19,0,.27,.28,.28);
      const shin=capsule(leg,ceramic,0,-.20,0,.245,.54);shin.rotation.z=side*-.055;
      ellipsoid(leg,sage,0,-.51,.035,.23,.17,.25);
      const foot=new THREE.Group();foot.position.set(side*.025,-.69,.13);leg.add(foot);
      const sole=mesh(plate(.56,.65,.24,.10,.035),sage,foot,0,-.08,0);sole.rotation.x=Math.PI/2;
      ellipsoid(foot,ceramic,0,.055,.035,.325,.25,.405);
      // A quiet seam down each shin reads as a ceramic assembly.
      tube([[side*.06,.02,.246],[side*.07,-.23,.249],[side*.08,-.41,.22]],.007,leg);
    }
    const torso=new THREE.Group();torso.position.y=1.91;model.add(torso);
    const shell=ellipsoid(torso,ceramic,0,0,0,.79,.84,.49);
    // Front access-panel seam follows the bulging belly, not a flat box.
    const panelPath=new THREE.CatmullRomCurve3([[-.45,.52],[-.59,.29],[-.61,-.18],[-.48,-.54],[0,-.62],[.48,-.54],[.61,-.18],[.59,.29],[.45,.52],[.25,.64],[0,.66],[-.25,.64]].map(([x,y])=>new THREE.Vector3(x,y,0)),true);
    tube(panelPath.getPoints(48).slice(0,-1).map(({x,y})=>[x,y,.49*Math.sqrt(Math.max(.01,1-(x/.79)**2-(y/.84)**2))+.012]),.004,torso,seam,true);
    const chest=mesh(new THREE.CylinderGeometry(.104,.104,.028,40),accent,torso,.27,.39,.443);chest.rotation.x=Math.PI/2;
    const chestRim=mesh(new THREE.TorusGeometry(.108,.009,8,40),seam,torso,.27,.39,.462);
    capsule(model,sage,0,2.78,0,.22,.18);
    const headPivot=new THREE.Group();headPivot.position.set(0,3.48,0);headPivot.scale.set(.92,.95,.94);model.add(headPivot);
    // Continuous superellipsoid normals avoid the banded bevels of an extruded box.
    const rx=1.31,ry=.94,rz=.69,n=2.65;
    const headGeometry=unitSphere.clone(), hp=headGeometry.attributes.position, hn=headGeometry.attributes.normal;
    const signedPower=(x,p)=>Math.sign(x)*Math.pow(Math.abs(x),p);
    for(let i=0;i<hp.count;i++){
      const x=rx*signedPower(hp.getX(i),2/n),y=ry*signedPower(hp.getY(i),2/n),z=rz*signedPower(hp.getZ(i),2/n);
      hp.setXYZ(i,x,y,z);const normal=new THREE.Vector3(signedPower(x/rx,n-1)/rx,signedPower(y/ry,n-1)/ry,signedPower(z/rz,n-1)/rz).normalize();hn.setXYZ(i,normal.x,normal.y,normal.z);
    }
    mesh(headGeometry,ceramic,headPivot);
    const surfaceZ=(x,y)=>rz*Math.pow(Math.max(.001,1-Math.pow(Math.abs(x/rx),n)-Math.pow(Math.abs(y/ry),n)),1/n);
    // The face is a curved inset painted on the same sculptural surface.
    const verts=[0,-.02,surfaceZ(0,-.02)+.015],indices=[],rings=14,steps=100;
    for(let ring=1;ring<=rings;ring++)for(let j=0;j<steps;j++){
      const a=j/steps*Math.PI*2,r=ring/rings,x=1.09*signedPower(Math.cos(a),2/2.7)*r,y=.665*signedPower(Math.sin(a),2/2.7)*r-.02;
      verts.push(x,y,surfaceZ(x,y)+.016);
    }
    for(let j=0;j<steps;j++)indices.push(0,1+j,1+(j+1)%steps);
    for(let ring=1;ring<rings;ring++)for(let j=0;j<steps;j++){
      const a=1+(ring-1)*steps+j,b=1+(ring-1)*steps+(j+1)%steps,c=1+ring*steps+j,d=1+ring*steps+(j+1)%steps;indices.push(a,c,b,b,c,d);
    }
    const fg=new THREE.BufferGeometry();fg.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));fg.setIndex(indices);fg.computeVertexNormals();mesh(fg,face,headPivot);
    // Small perimeter seam and apricot ear discs preserve the approved guide's identity.
    for(const side of [-1,1]){
      const ear=mesh(new THREE.CylinderGeometry(.15,.15,.045,40),accent,headPivot,side*1.31,-.17,.02);ear.rotation.z=Math.PI/2;
      const rim=mesh(new THREE.TorusGeometry(.152,.008,8,40),seam,headPivot,side*1.335,-.17,.02);rim.rotation.y=Math.PI/2;
    }
    tube([.932,.91,.88,.84,.79].map(y=>[.17,y,surfaceZ(.17,y)+.009]),.004,headPivot);
    const eyes=[],pupils=[],brows=[];
    for(const side of [-1,1]){
      const x=side*.43,y=.115;
      const eye=new THREE.Group();eye.position.set(x,y,surfaceZ(x,y)+.026);eye.rotation.y=side*.07;headPivot.add(eye);
      ellipsoid(eye,glow,0,0,0,.145,.105,.025);
      const pupil=new THREE.Group();pupil.position.set(.015,0,.028);eye.add(pupil);
      ellipsoid(pupil,pupilMaterial,0,0,0,.047,.062,.012);
      ellipsoid(pupil,glow,-.012,.023,.013,.012,.014,.006);
      eyes.push(eye);pupils.push(pupil);
      const points=[[-.13,.285],[0,.325],[.13,.30]].map(([dx,yy])=>{const xx=x+dx,by=yy+(side===-1?.015:0);return[xx,by,surfaceZ(xx,by)+.022];});
      const brow=tube(points,.010,headPivot,browMaterial);brows.push(brow);
      ellipsoid(headPivot,cheekMaterial,side*.63,-.14,surfaceZ(side*.63,-.14)+.018,.10,.035,.007);
    }
    // A small asymmetric smile, with an attentive open gaze rather than sleepy dashes.
    const mouth=tube([[-.16,-.255],[-.10,-.307],[0,-.33],[.115,-.29],[.18,-.225]].map(([x,y])=>[x,y,surfaceZ(x,y)+.025]),.020,headPivot,glow);
    const arms=[];
    for(const side of [-1,1]){
      const shoulder=new THREE.Group();shoulder.position.set(side*.72,2.35,0);model.add(shoulder);
      ellipsoid(shoulder,sage,side*.05,-.015,0,.245,.255,.255);
      capsule(shoulder,ceramic,0,-.32,0,.205,.30);
      const elbow=new THREE.Group();elbow.position.y=-.64;shoulder.add(elbow);
      ellipsoid(elbow,sage,0,0,0,.207,.19,.205);
      capsule(elbow,ceramic,0,-.26,0,.187,.25);
      const wrist=new THREE.Group();wrist.position.set(0,-.54,0);elbow.add(wrist);
      ellipsoid(wrist,sage,0,0,0,.155,.135,.16);
      const palm=ellipsoid(wrist,ceramic,0,-.17,.025,.18,.20,.115);
      // Three rounded fingers and a thumb, each with its own local joint.
      const fingers=[];
      for(let f=0;f<3;f++){
        const joint=new THREE.Group();joint.position.set((f-1)*.112,-.29,.035);wrist.add(joint);
        capsule(joint,ceramic,0,-.065,.025,.057,.075);
        const tip=ellipsoid(joint,ceramic,0,-.155,.07,.057,.08,.058);fingers.push(joint);
      }
      const thumb=new THREE.Group();thumb.position.set(-side*.155,-.12,.04);wrist.add(thumb);thumb.rotation.z=-side*.55;
      capsule(thumb,ceramic,0,-.065,.02,.066,.08);
      arms.push({shoulder,elbow,wrist,fingers,thumb,side});
    }
    const contact=document.createElement('canvas');contact.width=contact.height=128;const cctx=contact.getContext('2d');const gradient=cctx.createRadialGradient(64,64,4,64,64,62);gradient.addColorStop(0,'rgba(38,62,58,.22)');gradient.addColorStop(.45,'rgba(38,62,58,.10)');gradient.addColorStop(1,'rgba(38,62,58,0)');cctx.fillStyle=gradient;cctx.fillRect(0,0,128,128);
    const contactTexture=new THREE.CanvasTexture(contact);textures.push(contactTexture);const shadowMat=new THREE.MeshBasicMaterial({map:contactTexture,transparent:true,depthWrite:false});materials.push(shadowMat);
    const shadow=mesh(new THREE.PlaneGeometry(2.5,1.55),shadowMat,scene,0,.018,.04);shadow.rotation.x=-Math.PI/2;shadow.castShadow=false;
    rig={headPivot,torso,legs,arms,eyes,pupils,brows,mouth,accent};
    currentPose=basePose();targetPose=poseFor(state);fromPose={...currentPose};
    applyPose(targetPose);resize();render();api.ready=true;
    resizeObserver=new ResizeObserver(resize);resizeObserver.observe(container);
    intersectionObserver=new IntersectionObserver(entries=>{visible=entries[0]?.isIntersecting??true;lastTime=0;if(visible)schedule();else cancelFrame();},{threshold:.01});intersectionObserver.observe(container);
    document.addEventListener('visibilitychange',onVisibility);
    mediaQuery=window.matchMedia('(prefers-reduced-motion: reduce)');reduced=reduced||mediaQuery.matches;
    mediaQuery.addEventListener?.('change',onReduced);
    canvas.addEventListener('webglcontextlost',onContextLost);
    container.dataset.characterReady='true';
  } catch(error) { api.ready=false;container.dataset.characterError='render-unavailable';showFallback(); }
  return api;

  function basePose(){return {headX:0,headY:0,headZ:.035,bodyY:0,bodyZ:-.012,leftZ:-.19,leftX:0,leftElbow:-.18,leftElbowZ:0,leftWrist:0,rightZ:.12,rightX:0,rightElbow:-.10,rightElbowZ:0,rightWrist:0,rightWristRoll:0,eyeY:1,gazeX:.015,gazeY:0,browLift:0};}
  function poseFor(name){
    const p=basePose();
    if(name==='greet')Object.assign(p,{headZ:.09,headY:-.045,leftZ:-.24,browLift:.012,rightZ:1.25,rightElbow:-.10,rightElbowZ:1.55,rightWrist:-.15});
    if(name==='select')Object.assign(p,{headY:.16,headZ:-.035,gazeX:.028,gazeY:.008,rightZ:.88,rightX:-.08,rightElbow:-.18,rightElbowZ:.66,rightWrist:-.35,rightWristRoll:.18});
    if(name==='buy')Object.assign(p,{headX:.11,headY:.10,headZ:-.03,gazeY:-.02,rightZ:.45,rightElbow:-.22,rightElbowZ:.38,rightWrist:-.26});
    if(name==='target')Object.assign(p,{headX:-.045,headY:.17,gazeY:.02,browLift:.015,rightZ:1.12,rightElbow:-.12,rightElbowZ:1.02,rightWrist:-.40});
    if(name==='acknowledge')Object.assign(p,{headX:.025,headZ:.05,browLift:.018,leftZ:-.22,rightZ:.48,rightElbow:-.25,rightElbowZ:.75,rightWristRoll:.20});
    if(name==='wait')Object.assign(p,{headZ:.05,headX:.015,leftZ:-.20,rightZ:.13,leftElbow:-.18,rightElbow:-.18});
    if(name==='explain')Object.assign(p,{headY:.08,headZ:-.045,gazeX:.025,browLift:.008,rightZ:.90,rightElbow:-.20,rightElbowZ:.70,rightWrist:-.30,rightWristRoll:.25,leftZ:-.29,leftElbow:-.32});
    return p;
  }
  function applyPose(p){
    if(!rig)return;currentPose={...p};rig.headPivot.rotation.set(p.headX,p.headY,p.headZ);model.position.y=p.bodyY;model.rotation.z=p.bodyZ;
    const [left,right]=rig.arms;
    left.shoulder.rotation.set(p.leftX,0,p.leftZ);right.shoulder.rotation.set(p.rightX,0,p.rightZ);
    left.elbow.rotation.set(p.leftElbow,0,p.leftElbowZ);right.elbow.rotation.set(p.rightElbow,0,p.rightElbowZ);
    left.wrist.rotation.set(0,p.leftWrist,-.06);right.wrist.rotation.set(0,p.rightWrist,.06+p.rightWristRoll);
    for(const a of rig.arms){for(const f of a.fingers)f.rotation.x=(['select','target','explain','greet'].includes(state)&&a.side===1)?-.10:.28;}
    for(const eye of rig.eyes)eye.scale.y=p.eyeY;
    for(const pupil of rig.pupils)pupil.position.set(p.gazeX,p.gazeY,.028);
    for(const brow of rig.brows)brow.position.y=p.browLift;
  }
  function setState(name){
    if(!VALID_STATES.has(name)||disposed||name===state)return;
    state=name;elapsed=0;transitionTime=0;lastTime=0;fromPose={...(currentPose||basePose())};targetPose=poseFor(name);
    if(reduced||paused){applyPose(targetPose);fromPose={...targetPose};render();}else schedule();
    container.dataset.characterState=state;
  }
  function setPaused(value){paused=!!value;lastTime=0;if(paused)cancelFrame();else schedule();}
  function setAccent(hex){if(!/^#[\da-f]{6}$/i.test(hex)||!rig||disposed)return;rig.accent.color.set(hex);render();}
  function onVisibility(){hidden=document.hidden;lastTime=0;if(hidden)cancelFrame();else schedule();}
  function onReduced(event){reduced=!!reducedMotion||!!event.matches;lastTime=0;if(reduced){cancelFrame();applyPose(targetPose||poseFor(state));render();}else schedule();}
  function onContextLost(event){event.preventDefault();contextLost=true;cancelFrame();api.ready=false;showFallback();}
  function resize(){
    if(!renderer||disposed||contextLost)return;const b=container.getBoundingClientRect();width=Math.max(1,b.width);height=Math.max(1,b.height);
    const ratio=width/height;const vertical=Math.max(5.25,4.35/ratio);camera.left=-vertical*ratio/2;camera.right=vertical*ratio/2;camera.top=vertical/2;camera.bottom=-vertical/2;camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75));renderer.setSize(width,height,false);render();
  }
  function render(){if(renderer&&scene&&!disposed&&!contextLost)renderer.render(scene,camera);}
  function canAnimate(){return !disposed&&api.ready&&!paused&&!hidden&&visible&&!reduced;}
  function schedule(){if(canAnimate()&&!frame)frame=requestAnimationFrame(tick);}
  function cancelFrame(){if(frame)cancelAnimationFrame(frame);frame=0;}
  function tick(ms){
    frame=0;if(!canAnimate())return;
    const dt=lastTime?Math.min((ms-lastTime)/1000,.05):0;lastTime=ms;elapsed+=dt;transitionTime+=dt;
    const target={...targetPose};const t=smooth(transitionTime/.65);const p={};for(const k in target)p[k]=(fromPose[k]??target[k])+(target[k]-(fromPose[k]??target[k]))*t;
    // All gestures are analytic in the paused local clock. Welcome and acknowledgement settle.
    if(state==='greet'){
      const wave=Math.sin(Math.min(elapsed,3.0)*7)*Math.sin(Math.PI*clamp(elapsed/3,0,1));
      p.rightWristRoll+=wave*.23;p.headZ+=Math.sin(elapsed*1.4)*.035*(1-smooth((elapsed-2.4)/1.0));
      const settle=smooth((elapsed-3.1)/1.1);const base=basePose();for(const k in p)p[k]=p[k]+(base[k]-p[k])*settle;
    }else if(state==='acknowledge'){p.headX+=Math.sin(Math.PI*clamp(elapsed/1.4,0,1))*.09;}
    else if(state==='explain'||state==='select'||state==='target'||state==='buy'){
      const emphasis=Math.sin(Math.PI*clamp(elapsed/2.2,0,1));p.rightZ+=emphasis*.06;p.headZ-=emphasis*.025;
    }
    // Very slow breathing and infrequent soft blink; no locomotion or trading effect.
    if(state==='idle'||state==='wait'){p.bodyY=Math.sin(elapsed*1.15)*.006;p.headZ+=Math.sin(elapsed*.55)*.012;}
    const blink=elapsed%6.8;if(blink>5.9&&blink<6.12)p.eyeY=.12+.88*Math.abs((blink-6.01)/.11);
    applyPose(p);render();schedule();
  }
  function diagnostics(){return {ready:api.ready,mode:api.ready?'procedural-3d':'static',state,paused,reducedMotion:reduced,hidden,offscreen:!visible,animating:canAnimate(),elapsed:Number(elapsed.toFixed(4)),width,height,pixelRatio:renderer?.getPixelRatio()||0,meshes:meshCount,triangles:renderer?.info.render.triangles||0,drawCalls:renderer?.info.render.calls||0,pose:currentPose?{...currentPose}:null};}
  function dispose(){
    if(disposed)return;disposed=true;cancelFrame();resizeObserver?.disconnect();intersectionObserver?.disconnect();document.removeEventListener('visibilitychange',onVisibility);mediaQuery?.removeEventListener?.('change',onReduced);canvas?.removeEventListener('webglcontextlost',onContextLost);
    for(const g of new Set(geometries))g.dispose();for(const m of new Set(materials))m.dispose();for(const t of textures)t.dispose();renderer?.dispose();canvas?.remove();fallback.remove();
  }
}
