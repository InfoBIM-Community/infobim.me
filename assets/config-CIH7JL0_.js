import{n as e,t}from"./browser-tmivFPXG.js";var n=`
metadata:
  name: InfoBIM
  brand: 
    plain: Info
    colored: BIM
    color: "#008bd2"
  version: 0.0.1
  description: A web application for managing BIM projects.

`,r=`/assets/logo-system-D5lG-lGR.png`,i=`# The addresses the application talks to. Read through the config adapter.
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
  logo: org.infobim
  title: InfoBIM
  subtitle:
    en: A web application for managing BIM projects.
    pt-BR: Uma aplicação web para gerenciar projetos BIM.
    es-ES: Una aplicación web para gestionar proyectos BIM.
  metadata:
    description:
      en: A web application for managing BIM projects.
      pt-BR: Uma aplicação web para gerenciar projetos BIM.
      es-ES: Una aplicación web para gestionar proyectos BIM.
`,a=`/assets/logo-system-O0vHocZU.png`,o={plain:`Onto`,colored:`BDC`,color:`#00c8e8`},s=Object.assign({"/addon/org.infobim/asset/config.yaml":n}),c=Object.assign({"/addon/org.infobim/asset/logo-system.png":r}),l=e=>typeof e==`object`&&!!e&&!Array.isArray(e),u=e=>{let n=t(e);return l(n)?n:{}};function d(e,t){let n={...e};for(let[r,i]of Object.entries(t))n[r]=l(i)&&l(e[r])?d(e[r],i):i;return n}var f;function p(e){let t=e.override,n=l(t)?t.addon:void 0;if(n!==void 0){if(typeof n!=`string`||!n.trim())throw Error(`The config has no addon name at "override.addon".`);return n}}function m(e){let t=e.override,n=l(t)?t.command:void 0;if(n===void 0)return[];let r=Array.isArray(n)?n:[n];if(r.some(e=>typeof e!=`string`||!e.trim()))throw Error(`The config has no addon name at "override.command".`);return r}function h(e,t){let n=[...e].sort();if(t===void 0)return n;let r=`/addon/${t}/asset/config.yaml`,i=n.filter(e=>e.includes(r));if(i.length===0)throw Error(`The config asks for the addon "${t}", which has no asset/config.yaml.`);return[...n.filter(e=>!e.includes(r)),...i]}var g=u(i),_=p(g),v=m(g);function y(){if(f===void 0){let e=g;for(let t of h(Object.keys(s),_))e=d(e,u(s[t]));f=e}return f}function b(e){let t=y();for(let n of e.split(`.`))t=l(t)?t[n]:void 0;return t}function x(e,t){let n=b(e);if(n===void 0)return t;if(typeof n!=`string`||!n.trim())throw Error(`The config has no text at "${e}".`);return n}var S=class{static url(e){let t=b(e);if(typeof t!=`string`||!t.trim())throw Error(`The config has no URL at "${e}".`);let n;try{n=new URL(t)}catch{throw Error(`The config has an invalid URL at "${e}".`)}if(n.protocol!==`https:`&&n.protocol!==`http:`)throw Error(`The config URL at "${e}" is not http or https.`);return t}static brand(){return{plain:x(`metadata.brand.plain`,o.plain),colored:x(`metadata.brand.colored`,o.colored),color:x(`metadata.brand.color`,o.color)}}static constraintBody(){let t=b(`constraint`);if(t!==void 0&&!l(t))throw Error(`The config has "constraint" as something other than a mapping.`);return e({constraint:t??{}})}static commandAddons(){return[...v]}static logo(){if(_===void 0)return a;let e=`/addon/${_}/asset/logo-system.png`,t=Object.keys(c).find(t=>t.includes(e));return t===void 0?a:c[t]}};export{S as t};