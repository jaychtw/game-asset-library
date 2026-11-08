import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync,cpSync,rmSync} from 'node:fs';
import {inflateSync} from 'node:zlib';
import {execFileSync} from 'node:child_process';
import {json} from '../scripts/catalog.mjs';
import {validate,validateManifest,safePath,safeURL,sha} from '../scripts/validate.mjs';
import {loadEffect,renderFrames} from '../vendor/pixelfx/tools/lib/fxlib.mjs';
function decode(png){const w=png.readUInt32BE(16),h=png.readUInt32BE(20),chunks=[];for(let p=8;p<png.length;){const n=png.readUInt32BE(p),kind=png.toString('ascii',p+4,p+8);if(kind==='IDAT')chunks.push(png.subarray(p+8,p+8+n));p+=12+n;}const raw=inflateSync(Buffer.concat(chunks)),stride=w*4,out=Buffer.alloc(w*h*4);for(let y=0;y<h;y++){assert.equal(raw[y*(stride+1)],1);for(let x=0;x<stride;x++)out[y*stride+x]=(raw[y*(stride+1)+x+1]+(x>=4?out[y*stride+x-4]:0))&255;}return{w,h,out};}
test('catalog and preserved battleship identity',()=>{validate();const before=execFileSync('git',['show','b65f6af:assets/vehicles/armorheart-battleship/asset.json']);assert.deepEqual(readFileSync('assets/vehicles/armorheart-battleship/asset.json'),before);assert.equal(existsSync('dist/assets/vehicles/armorheart-battleship/runtime.png'),false);});
test('reject unsafe inputs and unverified public actions',()=>{for(const p of ['../x','a/../../x','/x','a\\x','https://x','a/%2e%2e/x','a//x'])assert.equal(safePath(p),false);for(const u of ['javascript:alert(1)','data:text/html,hi','http://x','https://user:secret@github.com/'])assert.equal(safeURL(u),false);const base=json('assets/effects/pixelfx-torch/asset.json');for(const mutate of [a=>a.status.rights='unverified',a=>a.capabilities.effect='../evil',a=>a.checksums['../evil']='a'.repeat(64),a=>a.files.runtime=['../secret'],a=>a.origin.editableSourceUrl='javascript:evil',a=>a.parent={id:a.id,revision:'bad'}]){const a=structuredClone(base);mutate(a);assert.throws(()=>validateManifest(a,'assets/effects/pixelfx-torch/asset.json'));}});
test('all exported PNG frames exactly match source renderer; timing and package notices',async()=>{for(const item of json('catalog/index.json').entries.filter(a=>a.type==='effect')){const a=json(item.manifest),dir=item.manifest.replace('/asset.json',''),meta=json(dir+'/timing.json'),fx=await loadEffect(a.capabilities.effect),r=renderFrames(fx,{bg:'none'}),png=decode(readFileSync(dir+'/sprites.png'));assert.equal(meta.frames.length,r.n);assert.deepEqual(meta.pivot,fx.meta.origin);assert.equal(meta.origin.commit,a.origin.referenceCommit);for(let i=0;i<r.n;i++){const f=meta.frames[i];assert(Math.abs(f.timeMs-i*1000/r.fps)<1e-8);assert.equal(f.durationMs,1000/r.fps);for(let yy=0;yy<r.h;yy++){const offset=((f.frame.y+yy)*png.w+f.frame.x)*4;assert.deepEqual(png.out.subarray(offset,offset+r.w*4),Buffer.from(r.frames[i].clear.subarray(yy*r.w*4,(yy+1)*r.w*4)));}}assert.equal(new Set(r.frames.map(f=>sha(f.clear))).size>3,true);}
execFileSync('python3',['-c',`import zipfile,pathlib,json
for p in pathlib.Path('dist/downloads').glob('*.zip'):
 with zipfile.ZipFile(p) as z:
  assert z.testzip() is None
  assert b'MIT License' in z.read('LICENSE')
  assert b'Hugo Duprez' in z.read('NOTICE.md')
  assert not any('gallery/fonts' in f for f in z.namelist())
`]);});
test('vetted vendor code has no runtime network/eval and exact source hashes',()=>{const p=json('vendor/pixelfx/provenance.json');for(const [file,hash]of Object.entries(p.files)){const bytes=readFileSync('vendor/pixelfx/'+file);assert.equal(sha(bytes),hash);if(file.startsWith('src/'))assert(!/\b(fetch|eval|XMLHttpRequest|WebSocket)\s*\(|\bimport\s*\(/.test(bytes.toString()),file);}assert(!Object.keys(p.files).some(f=>f.includes('gallery/fonts')));});

test('duplicate package identity is rejected and catalog restored',()=>{const dir='assets/effects/zz-duplicate';try{cpSync('assets/effects/pixelfx-torch',dir,{recursive:true});execFileSync('node',['scripts/catalog.mjs']);assert.throws(()=>validate(),/Duplicate ID/);}finally{rmSync(dir,{recursive:true,force:true});execFileSync('node',['scripts/catalog.mjs']);}validate();});
