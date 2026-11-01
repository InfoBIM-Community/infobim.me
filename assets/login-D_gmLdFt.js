import{t as e}from"./event-bus-DF2J4VGH.js";import{n as t,s as n}from"./i18n-xwIcjlwN.js";import{n as r}from"./session-e_Cwzs9k.js";var i=`
  <div class="login-skeleton" role="status" aria-busy="true">
    <span class="login-skeleton-line login-skeleton-title"></span>
    <span class="login-skeleton-line"></span>
    <span class="login-skeleton-line"></span>
    <span class="login-skeleton-line login-skeleton-short"></span>
    <span class="login-skeleton-label" data-i18n="login.loading"></span>
  </div>
`;function a(){let a=document.createElement(`div`);a.className=`panel-content login-panel`,a.innerHTML=i,t(a);let o=e.subscribe(`presentation.user.login.requested`,()=>{a.innerHTML=i,t(a)}),s=e.subscribe(`presentation.user.login.failed`,({payload:t})=>{let r=document.createElement(`p`);r.className=`login-welcome login-failed`,r.textContent=t?.cancelled?n(`login.cancelled`):n(`login.failed`,{message:t?.message??``});let i=document.createElement(`button`);i.type=`button`,i.className=`login-retry`,i.textContent=n(`login.retry`),i.addEventListener(`click`,()=>e.publish(`presentation.user.login.requested`,`login`)),a.replaceChildren(r,i)}),c=e.subscribe(`presentation.user.login.succeeded`,({payload:e})=>{let t=r(e?.profile),i=document.createElement(`h1`);i.className=`login-greeting`,i.textContent=n(`login.greeting`,{name:t??n(`login.guest`)});let o=document.createElement(`p`);o.className=`login-welcome`,o.textContent=n(`login.welcome`),a.replaceChildren(i,o)});return{element:a,dispose:()=>{o(),s(),c(),a.remove()}}}export{a as default};