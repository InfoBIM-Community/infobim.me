(function(){let e=e=>e.split(`/`).length;function t(t,n){let r=[],i=[],a=[];for(let[e,a]of n){let n=t.get(e);a.kind===`dir`?n?.kind!==`dir`&&r.push(e):(n?.kind!==`file`||n.mtime!==a.mtime||n.size!==a.size)&&i.push(e)}for(let[e,r]of t)n.get(e)?.kind!==r.kind&&a.push(e);return r.sort((t,n)=>e(t)-e(n)),a.sort((t,n)=>e(n)-e(t)),{createDirs:r,writeFiles:i,remove:a}}let n=new URL(`/python/`,self.location.origin).href,r=null,i=null,a=e=>self.postMessage(e);async function o(){a({type:`status`,phase:`loading`});let{loadPyodide:e}=await import(
/* @vite-ignore */
`${n}pyodide/pyodide.mjs`),t=await e({indexURL:`${n}pyodide/`,stdout:e=>i?.(`stdout`,e),stderr:e=>i?.(`stderr`,e)}),r=await(await fetch(`${n}packages.json`)).json();await t.loadPackage(r,{messageCallback:()=>{}});let o=await(await fetch(`${n}wheels.json`)).json();return t.globals.set(`WHEELS`,t.toPy(o.map(e=>`${n}wheels/${e}`))),await t.runPythonAsync(`import micropip
await micropip.install(WHEELS, deps=False)
del WHEELS`),a({type:`status`,phase:`ready`}),t}async function s(e){let{id:t,entry:n,argv:s,mount:l}=e;i=(e,n)=>a({type:e,id:t,text:n});try{r??=o().catch(e=>{throw r=null,e});let e=await r;e.FS.mkdirTree(l.path);let i=null;if(l.handle)await e.mountNativeFS(l.path,l.handle),i=c(e,l.path);else for(let t of l.files??[]){let n=`${l.path}/${t.path}`;e.FS.mkdirTree(n.slice(0,n.lastIndexOf(`/`))),e.FS.writeFile(n,new Uint8Array(t.data))}let d;try{e.globals.set(`CWD`,l.path),e.globals.set(`ARGV`,e.toPy(s)),e.globals.set(`ENTRY`,n),d=Number(await e.runPythonAsync(`
import os, sys, importlib
os.chdir(CWD)
sys.argv = list(ARGV)
module_name, _, func_name = ENTRY.partition(':')
code = 0
try:
    getattr(importlib.import_module(module_name), func_name)()
except SystemExit as exit_:
    code = exit_.code if isinstance(exit_.code, int) else (0 if exit_.code is None else 1)
code
`))}finally{if(l.handle&&i)try{await u(e,l.path,l.handle,i)}finally{e.FS.unmount(l.path)}else e.globals.set(`MOUNT`,l.path),await e.runPythonAsync(`import shutil, os
os.chdir("/")
shutil.rmtree(MOUNT, ignore_errors=True)`)}a({type:`exit`,id:t,code:d})}catch(e){a({type:`error`,id:t,message:e instanceof Error?e.message:String(e)})}finally{i=null}}function c(e,t){let n=/* @__PURE__ */ new Map,r=i=>{let a=i?`${t}/${i}`:t;for(let o of e.FS.readdir(a)){if(o===`.`||o===`..`)continue;let a=i?`${i}/${o}`:o,s=e.FS.stat(`${t}/${a}`),c=e.FS.isDir(s.mode);n.set(a,{kind:c?`dir`:`file`,mtime:new Date(s.mtime).getTime(),size:c?0:s.size}),c&&r(a)}};return r(``),n}async function l(e,t,n){let r=e;for(let e of t)r=await r.getDirectoryHandle(e,{create:n});return r}async function u(e,n,r,i){let a=t(i,c(e,n));for(let e of a.remove){let t=e.split(`/`);try{await(await l(r,t.slice(0,-1),!1)).removeEntry(t[t.length-1])}catch(e){if(!(e instanceof DOMException))throw e;if(e.name===`NotFoundError`||e.name===`InvalidModificationError`)continue;throw e}}for(let e of a.createDirs)await l(r,e.split(`/`),!0);for(let t of a.writeFiles){let i=t.split(`/`),a=await(await(await l(r,i.slice(0,-1),!0)).getFileHandle(i[i.length-1],{create:!0})).createWritable();await a.write(e.FS.readFile(`${n}/${t}`)),await a.close()}}let d=Promise.resolve();self.onmessage=({data:e})=>{e.type===`run`&&(d=d.then(()=>s(e)))}})();