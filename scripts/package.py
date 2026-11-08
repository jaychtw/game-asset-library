"""Deterministic ZIP delivery; every download carries the exact upstream terms."""
import sys,json,zipfile,pathlib
s=json.loads(sys.argv[1]);root=pathlib.Path(s['root']);v=root/'vendor/pixelfx';out=root/'dist/downloads';out.mkdir(exist_ok=True)
def archive(suffix,files):
 with zipfile.ZipFile(out/(s['id']+'-'+suffix+'.zip'),'w',compression=zipfile.ZIP_DEFLATED) as z:
  for name,path in sorted(files.items()):
   info=zipfile.ZipInfo(name,date_time=(2026,1,1,0,0,0));info.compress_type=zipfile.ZIP_DEFLATED
   z.writestr(info,path.read_bytes())
terms={p:v/p for p in ['LICENSE','NOTICE.md','provenance.json']}
folder=root/s['folder'];source={**terms,'asset.json':folder/'asset.json','README.md':folder/'README.md'}
if s.get('effect'):
 source.update({str(p.relative_to(v)):p for p in (v/'src/core').glob('*.js')})
 for f in [s['effect']+'.js',s['effect'].split('/')[0]+'/_lib.js']:source['src/fx/'+f]=v/'src/fx'/f
else:
 for p in folder.iterdir():
  if p.is_file():source[p.name]=p
archive('source',source)
if (folder/'sprites.png').exists():archive('sprites',{**terms,**{p:folder/p for p in ['sprites.png','timing.json','asset.json','README.md']}})
