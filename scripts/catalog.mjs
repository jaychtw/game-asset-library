import {readdirSync,readFileSync,writeFileSync} from 'node:fs';
import {join,relative} from 'node:path';
export const root = new URL('../',import.meta.url).pathname;
export const json = p => JSON.parse(readFileSync(join(root,p),'utf8'));
export function discover(dir='assets') {
  return readdirSync(join(root,dir),{withFileTypes:true}).flatMap(e => e.isDirectory()?discover(join(dir,e.name)):e.name==='asset.json'?[join(dir,e.name)]:[]).sort();
}
export function catalog() {
 return {schemaVersion:1,entries:discover().map(manifest=>{const a=json(manifest); return {id:a.id,name:a.name,type:a.type,tags:a.tags,status:a.status,manifest};})};
}
if(process.argv[1]===new URL(import.meta.url).pathname) {writeFileSync(join(root,'catalog/index.json'),JSON.stringify(catalog(),null,2)+'\n');console.log('Catalog regenerated from asset packages');}
