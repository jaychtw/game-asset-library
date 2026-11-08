// Deterministic default exports. Imported source bytes are never rewritten.
import {mkdirSync,writeFileSync,readFileSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {join} from 'node:path';
import {loadEffect,renderFrames} from '../vendor/pixelfx/tools/lib/fxlib.mjs';
import {encodePNG} from '../vendor/pixelfx/tools/lib/png.mjs';
const pin='a84159688af3ca37a4be05a0d422b94451b2e24e';
const choices=[
 ['fire/torch','火炬','鐵架上的火炬：火舌、煙霧、餘燼與閃爍的暖光。'],
 ['ice/ice-shatter','冰塊碎裂','冰塊受擊後裂開，碎片翻滾、彈跳並化為冰塵。'],
 ['melee/sword-slash','劍刃揮斬','明亮的弧形劍光、殘影與撞擊火花。'],
 ['scifi/energy-core','能量核心','持續脈動的科幻能量核心與電弧。']
];
const sha=b=>createHash('sha256').update(b).digest('hex');
for(const [key,zh,description] of choices){
 const fx=await loadEffect(key),r=renderFrames(fx,{bg:'none'}),m=fx.meta;
 const id='pixelfx-'+key.split('/')[1],dir=join('assets/effects',id);mkdirSync(dir,{recursive:true});
 const cols=Math.ceil(Math.sqrt(r.n*r.h/r.w)),rows=Math.ceil(r.n/cols),w=cols*r.w,h=rows*r.h;
 const rgba=new Uint8Array(w*h*4);
 const frames=r.frames.map((f,i)=>{const x=i%cols*r.w,y=Math.floor(i/cols)*r.h;for(let yy=0;yy<r.h;yy++)rgba.set(f.clear.subarray(yy*r.w*4,(yy+1)*r.w*4),((y+yy)*w+x)*4);return {frame:{x,y,w:r.w,h:r.h},timeMs:i*1000/r.fps,durationMs:1000/r.fps,pivot:m.origin};});
 const timing={schemaVersion:1,id,image:'sprites.png',origin:{repo:'patch-gg/pixelfx',commit:pin,path:'src/fx/'+key+'.js'},fps:r.fps,loop:m.loop,durationMs:r.n*1000/r.fps,effectDurationMs:m.duration*1000,size:[w,h],frameSize:[r.w,r.h],pivot:m.origin,coordinates:'pixels; x right, y down; pivot relative to frame top-left',options:m.options,frames,license:'MIT',notices:['LICENSE','NOTICE.md'],rendering:'Upstream renderFrames with transparent RGBA and upstream edge fade; no actor stand-in. Includes terminal frame for one-shots.'};
 writeFileSync(join(dir,'sprites.png'),encodePNG(w,h,rgba));writeFileSync(join(dir,'timing.json'),JSON.stringify(timing,null,2)+'\n');
 writeFileSync(join(dir,'README.md'),`# ${m.name}\n\nPinned PixelFX effect: ${key} at ${pin}.\n\nRun \`npm run assets\` from the library root to reproduce the default transparent sprite sheet and frame/timing/pivot metadata. Native JavaScript source and runtime dependencies are preserved under \`vendor/pixelfx\`. Preview uses the same source and 30 fps stepping. No actor performance is included. See the source bundle for MIT LICENSE and third-party NOTICE.\n\nCoordinates: x right, y down, art pixels and seconds; nearest-neighbor scaling. Playback is ${m.loop?'looped':'one-shot'}. Defaults, palette/seed/mirror are reversible preview options. Exports always contain upstream default options, unaffected by preview controls.\n\nCreative status: candidate, not owner-frozen art. Isolated demo verification is not integration into another game.\n`);
 const a={schemaVersion:1,id,name:m.name,type:'effect',localized:{en:{name:m.name,description:m.desc},'zh-TW':{name:zh,description}},description:m.desc,tags:{roles:['vfx',key.split('/')[0]],styles:['pixel-art','procedural'],views:['side'],features:[...m.tags,'animated','transparent'],formats:['js','png','json']},status:{creative:'candidate',integration:'demo-verified',rights:'verified-open'},approval:{scope:'Library v1 technical import; no asset creative freeze',evidence:'docs/FINAL-GDD.md',crossProjectApproval:false},origin:{repo:'patch-gg/pixelfx',author:'Patch; Hugo Duprez; third-party contributors per NOTICE',referenceCommit:pin,path:'src/fx/'+key+'.js',editableSourceUrl:`https://github.com/patch-gg/pixelfx/blob/${pin}/src/fx/${key}.js`},rights:{license:'MIT',reuse:'Reuse and adapt with MIT copyright/license and applicable NOTICE preserved.',publicDistribution:true,notices:['vendor/pixelfx/LICENSE','vendor/pixelfx/NOTICE.md']},files:{runtime:[],metadata:['timing.json'],preview:null,exports:['sprites.png','timing.json']},capabilities:{adapter:'pixelfx',effect:key,preview:true,sourceDownload:true,spriteExport:true,controls:['play','replay','speed','background','palette','seed','mirror']},integration:{entryPoint:`vendor/pixelfx/src/fx/${key}.js`,framePixels:m.size,pivot:m.origin,duration:m.duration,fps:m.fps,loop:m.loop,coordinates:'pixels, x right, y down; seconds',allowed:['MIT permits modification and reuse with notices'],needsReview:['Creative suitability and target-game integration'],instructions:`Import createFx/createFrame/clearFrame/composite from vendor/pixelfx/src/core/index.js and this effect module. createFx(module, {x: ${m.origin[0]}, y: ${m.origin[1]}}); update at 1/${m.fps} seconds, clearFrame, draw, composite to RGBA. Preserve LICENSE and NOTICE. Pin the library commit; do not auto-update.`},dependencies:['vendor/pixelfx/provenance.json'],limits:['No independent target-game integration verified','Default sprite exports do not include preview customizations','Additive glow is encoded as RGBA; looks most faithful on dark backgrounds'],checksums:{}};
 for(const file of ['sprites.png','timing.json','README.md'])a.checksums[file]=sha(readFileSync(join(dir,file)));
 writeFileSync(join(dir,'asset.json'),JSON.stringify(a,null,2)+'\n');console.log(id,r.n+' frames',w+'×'+h);
}
