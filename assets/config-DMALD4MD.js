import{t as e}from"./browser-1FW0vQyB.js";var t=`
metadata:
  name: InfoBIM
  brand: 
    plain: Info
    colored: BIM
    color: "#008bd2"
  version: 0.0.1
  description: A web application for managing BIM projects.

`,n=`/assets/logo-system-D5lG-lGR.png`,r=`# The addresses the application talks to. Read through the config adapter.
server:
  # The server of Brasidata the person logs in to.
  url: https://api.brasidata.com
  # The page where the person logs in; it sends the authorization code back to the application.
  login: https://api.brasidata.com/login
  # Where the authorization code is exchanged for the access token.
  token: https://api.brasidata.com/token
  # Where the profile of the person who logged in is read, with the access token.
  profile: https://api.brasidata.com/profile
  # The containers of the server; the list is asked with the parameter list=true.
  containers: https://api.brasidata.com/cmd/ontobdc/container
override:
  command: org.infobim
`,i=`/assets/logo-system-O0vHocZU.png`,a={plain:`Onto`,colored:`BDC`,color:`#00c8e8`},o=Object.assign({"/addon/org.infobim/asset/config.yaml":t}),s=Object.assign({"/addon/org.infobim/asset/logo-system.png":n}),c=e=>typeof e==`object`&&!!e&&!Array.isArray(e),l=t=>{let n=e(t);return c(n)?n:{}};function u(e,t){let n={...e};for(let[r,i]of Object.entries(t))n[r]=c(i)&&c(e[r])?u(e[r],i):i;return n}var d;function f(e){let t=e.override,n=c(t)?t.addon:void 0;if(n!==void 0){if(typeof n!=`string`||!n.trim())throw Error(`The config has no addon name at "override.addon".`);return n}}function p(e){let t=e.override,n=c(t)?t.command:void 0;if(n===void 0)return[];let r=Array.isArray(n)?n:[n];if(r.some(e=>typeof e!=`string`||!e.trim()))throw Error(`The config has no addon name at "override.command".`);return r}function m(e,t){let n=[...e].sort();if(t===void 0)return n;let r=`/addon/${t}/asset/config.yaml`,i=n.filter(e=>e.includes(r));if(i.length===0)throw Error(`The config asks for the addon "${t}", which has no asset/config.yaml.`);return[...n.filter(e=>!e.includes(r)),...i]}var h=l(r),g=f(h),_=p(h);function v(){if(d===void 0){let e=h;for(let t of m(Object.keys(o),g))e=u(e,l(o[t]));d=e}return d}function y(e){let t=v();for(let n of e.split(`.`))t=c(t)?t[n]:void 0;return t}function b(e,t){let n=y(e);if(n===void 0)return t;if(typeof n!=`string`||!n.trim())throw Error(`The config has no text at "${e}".`);return n}var x=class{static url(e){let t=y(e);if(typeof t!=`string`||!t.trim())throw Error(`The config has no URL at "${e}".`);let n;try{n=new URL(t)}catch{throw Error(`The config has an invalid URL at "${e}".`)}if(n.protocol!==`https:`&&n.protocol!==`http:`)throw Error(`The config URL at "${e}" is not http or https.`);return t}static brand(){return{plain:b(`metadata.brand.plain`,a.plain),colored:b(`metadata.brand.colored`,a.colored),color:b(`metadata.brand.color`,a.color)}}static commandAddons(){return[..._]}static logo(){if(g===void 0)return i;let e=`/addon/${g}/asset/logo-system.png`,t=Object.keys(s).find(t=>t.includes(e));return t===void 0?i:s[t]}};export{x as t};