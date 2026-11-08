import {rmSync,mkdirSync,copyFileSync,cpSync,writeFileSync,readFileSync} from 'node:fs';
import {join,dirname} from 'node:path';
import {execFileSync} from 'node:child_process';
import {root,json} from './catalog.mjs';
import {validate,sha} from './validate.mjs';
const c=validate();rmSync(join(root,'dist'),{recursive:true,force:true});mkdirSync(join(root,'dist'),{recursive:true});
for(const file of ['index.html','app.js','style.css','i18n.js','player.js'])copyFileSync(join(root,'web',file),join(root,'dist',file));
cpSync(join(root,'vendor/pixelfx'),join(root,'dist/vendor/pixelfx'),{recursive:true});
const entries=[];
for(const e of c.entries){const a=json(e.manifest),folder=dirname(e.manifest);a.packagePath=folder;
 // Only verified-open resources enter the public build. Existing restricted source remains unchanged in Git.
 if(a.status.rights==='verified-open'&&a.rights.publicDistribution){cpSync(join(root,folder),join(root,'dist',folder),{recursive:true});
 if(a.capabilities?.sourceDownload||a.capabilities?.spriteExport){
 const spec={root,folder,id:a.id,effect:a.capabilities?.effect,notices:a.rights.notices??[]};
 execFileSync('python3',['scripts/package.py',JSON.stringify(spec)],{cwd:root});
 a.downloads={source:`downloads/${a.id}-source.zip`,...(a.capabilities?.spriteExport?{sprites:`downloads/${a.id}-sprites.zip`}:{})};
 }
 }
 if(a.downloads) for(const [kind,url]of Object.entries(a.downloads))a.downloads[kind]={url,sha256:sha(readFileSync(join(root,'dist',url)))};
 entries.push(a);}
let revision;try{revision=execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8'}).trim();}catch{revision='local';}
writeFileSync(join(root,'dist/catalog.json'),JSON.stringify({schemaVersion:1,revision,entries},null,2)+'\n');writeFileSync(join(root,'dist/.nojekyll'),'');writeFileSync(join(root,'dist/revision.json'),JSON.stringify({revision}));
console.log('Production build: '+entries.length+' assets; restricted binaries excluded');
