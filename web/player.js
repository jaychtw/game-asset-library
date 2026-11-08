import {createFx,createFrame,clearFrame,composite} from './vendor/pixelfx/src/core/index.js';
const registry={
 'fire/torch':()=>import('./vendor/pixelfx/src/fx/fire/torch.js'),
 'ice/ice-shatter':()=>import('./vendor/pixelfx/src/fx/ice/ice-shatter.js'),
 'melee/sword-slash':()=>import('./vendor/pixelfx/src/fx/melee/sword-slash.js'),
 'scifi/energy-core':()=>import('./vendor/pixelfx/src/fx/scifi/energy-core.js')
};
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const players=new Set();let modal=false,raf;
const observer=new IntersectionObserver(es=>{for(const e of es){const p=[...players].find(p=>p.canvas===e.target);if(p)p.visible=e.isIntersecting;}},{threshold:.05});
function tick(now){let cards=0;for(const p of players){try{const active=p.visible&&!document.hidden&&(!modal||p.detail)&&(p.detail||cards++<3);if(active&&p.playing){p.acc+=Math.min(.1,(now-(p.last||now))/1000)*p.speed;const dt=1/p.mod.meta.fps;let changed=false;while(p.acc>=dt){p.acc-=dt;p.fx.update(dt);p.frameIndex++;changed=true;if(!p.mod.meta.loop&&p.fx.done()){if(p.detail){p.playing=false;p.onEnd?.();}else{p.reset();}break;}}if(changed)p.draw();}p.last=now;}catch(error){p.playing=false;p.onError?.(error);p.destroy();}}if(players.size)raf=requestAnimationFrame(tick);else raf=null;}
export function setModal(on){modal=on;}
export async function attach(canvas,effect,{detail=false,onEnd,onError}={}){
 try{
 if(!registry[effect])throw Error('Unvetted effect');const mod=await registry[effect]();if(!canvas.isConnected)return null;
 const [w,h]=mod.meta.size;canvas.width=w;canvas.height=h;
 const ctx=canvas.getContext('2d');if(!ctx)throw Error('Canvas unavailable');const frame=createFrame(w,h),image=ctx.createImageData(w,h);
 const p={canvas,mod,detail,onEnd,onError,visible:false,playing:!reduced.matches,speed:1,options:{},frameIndex:0,acc:0,
 reset(){this.fx=createFx(mod,{x:mod.meta.origin[0],y:mod.meta.origin[1],...this.options});this.frameIndex=0;this.acc=0;},
 draw(){clearFrame(frame);this.fx.draw(frame);
 // Same 8px light-edge fade as upstream tools/lib/fxlib.mjs (MIT).
 for(let y=0;y<h;y++)for(let x=0;x<w;x++){const e=Math.min(x,w-1-x,y,h-1-y);if(e>=8)continue;const i=y*w+x,l=frame.light[i],u=(e+.5)/8,k=u*u*(3-2*u);frame.light[i]=(l&0xff000000)|Math.round((l&255)*k)|(Math.round(((l>>>8)&255)*k)<<8)|(Math.round(((l>>>16)&255)*k)<<16);}
 composite(frame,image.data);ctx.putImageData(image,0,0);canvas.dataset.frame=String(this.frameIndex);canvas.dataset.playing=String(this.playing);},
 configure(options){this.options={...this.options,...options};this.reset();this.draw();},
 replay(){this.reset();this.playing=true;this.draw();},
 destroy(){observer.unobserve(canvas);players.delete(this);}
 };
 p.reset();const still=effect==='melee/sword-slash'?.1:effect==='ice/ice-shatter'?.8:.4;for(let i=0;i<(detail&&!reduced.matches?0:Math.round(still*mod.meta.fps));i++){p.fx.update(1/mod.meta.fps);p.frameIndex++;}p.draw();
 players.add(p);observer.observe(canvas);if(!raf)raf=requestAnimationFrame(tick);return p;
 }catch(e){onError?.(e);return null;}
}
reduced.addEventListener('change',()=>{for(const p of players){p.playing=!reduced.matches;p.draw();p.onEnd?.();}});
