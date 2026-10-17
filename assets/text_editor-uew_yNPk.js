import{t as e}from"./editor-cdBJo9rd.js";var t=80;function n({value:n,label:r}){let i=n.includes(`
`)||n.length>t?document.createElement(`textarea`):document.createElement(`input`);return i instanceof HTMLInputElement?i.type=`text`:i.rows=Math.min(8,Math.max(3,n.split(`
`).length)),i.className=`entity-editor`,i.value=n,i.setAttribute(`aria-label`,r),e(i)}export{n as default};