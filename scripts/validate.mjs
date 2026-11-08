import {readFileSync,existsSync,realpathSync} from 'node:fs';
import {join,resolve,dirname} from 'node:path';
import {createHash} from 'node:crypto';
import {root,json,catalog} from './catalog.mjs';
export const sha=b=>createHash('sha256').update(b).digest('hex');
export function safePath(p){return typeof p==='string'&&/^[a-zA-Z0-9_./-]+$/.test(p)&&!p.startsWith('/')&&!p.split('/').some(x=>!x||x==='.'||x==='..');}
export function safeURL(p){try{const u=new URL(p);return u.protocol==='https:'&&!u.username&&!u.password;}catch{return false;}}
function assert(ok,msg){if(!ok)throw new Error(msg);}
function file(p){assert(safePath(p),'Unsafe path '+p);const f=join(root,p);assert(existsSync(f),'Missing '+p);assert(realpathSync(f).startsWith(realpathSync(root)+'/'),'Escaping symlink '+p);return f;}
export function validateManifest(a,manifest){
 assert(a.schemaVersion===1,'Schema');assert(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(a.id),'ID');assert(typeof a.name==='string'&&a.name,'Name');assert(/^[a-z][a-z0-9-]*$/.test(a.type),'Type');
 for(const key of ['roles','styles','views','features','formats'])assert(Array.isArray(a.tags?.[key])&&a.tags[key].every(t=>typeof t==='string'),'Tags '+key);
 for(const [axis,values] of Object.entries({creative:['candidate','accepted-for-origin','asset-frozen'],integration:['source-present','demo-verified','cross-project-verified'],rights:['unverified','project-restricted','verified-open']}))assert(values.includes(a.status?.[axis]),'Status '+axis);
 if(a.origin?.referenceCommit)assert(/^[a-f0-9]{40}$/.test(a.origin.referenceCommit),'Origin pin');
 if(a.origin?.editableSourceUrl)assert(safeURL(a.origin.editableSourceUrl),'Source URL');
 for(const u of a.files?.editableExternal??[])assert(safeURL(u),'Editable URL');
 const folder=dirname(manifest);
 for(const p of [...(a.files?.runtime??[]),...(a.files?.metadata??[]),...(a.files?.exports??[]),a.files?.preview].filter(Boolean)){assert(safePath(p),'Unsafe asset path');file(join(folder,p));}
 for(const [p,hash]of Object.entries(a.checksums??{})){assert(safePath(p),'Unsafe checksum path');assert(/^[a-f0-9]{64}$/.test(hash)&&sha(readFileSync(file(join(folder,p))))===hash,'Checksum '+p);}
 if(a.parent){assert(/^[a-z0-9-]+$/.test(a.parent.id)&&a.parent.id!==a.id,'Parent identity');assert(/^[a-f0-9]{40}$/.test(a.parent.revision),'Parent revision');assert(typeof a.parent.summary==='string'&&a.parent.summary.trim(),'Derivative summary');}
 for(const notice of a.rights?.notices??[])file(notice);
 const c=a.capabilities;
 if(c){assert(['pixelfx','image','metadata'].includes(c.adapter),'Unsupported adapter');if(c.sourceDownload||c.spriteExport||c.preview)assert(a.status.rights==='verified-open'&&a.rights.publicDistribution===true,'Distribution gate');
 if(c.adapter==='pixelfx'){assert(['fire/torch','ice/ice-shatter','melee/sword-slash','scifi/energy-core'].includes(c.effect),'Unvetted executable effect');assert(a.origin.referenceCommit==='a84159688af3ca37a4be05a0d422b94451b2e24e','Effect pin');}
 if(c.sourceDownload)assert(a.rights.license&&a.rights.notices?.length,'Source download license/notices');
 if(c.adapter==='image'&&c.preview){assert(safePath(c.image)&&/\.(png|webp|jpg)$/.test(c.image),'Image preview');file(join(folder,c.image));}
 if(c.spriteExport)for(const p of ['sprites.png','timing.json'])assert(a.checksums?.[p],'Export checksum');
 }
 return true;
}
export function validate(){const c=json('catalog/index.json'),expected=catalog();assert(JSON.stringify(c)===JSON.stringify(expected),'Stale catalog; run npm run catalog');const ids=new Set();for(const item of c.entries){assert(!ids.has(item.id),'Duplicate ID');ids.add(item.id);validateManifest(json(item.manifest),item.manifest);}for(const item of c.entries){const a=json(item.manifest);if(a.parent)assert(ids.has(a.parent.id),'Unknown parent');}
 const p=json('vendor/pixelfx/provenance.json');for(const [path,hash]of Object.entries(p.files))assert(sha(readFileSync(file('vendor/pixelfx/'+path)))===hash,'Vendor changed '+path);
 console.log(`Catalog validation passed: ${ids.size} entries; paths, hashes, rights, provenance`);return c;}
if(process.argv[1]===new URL(import.meta.url).pathname)validate();
