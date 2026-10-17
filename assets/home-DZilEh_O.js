import{t as e}from"./event-bus-DF2J4VGH.js";import{n as t,s as n}from"./i18n-B0QjT_nZ.js";var r=!1,i=!1;e.subscribe(`presentation.main.panel.closed`,({payload:t})=>{t?.id!==`home`||i||(i=!0,queueMicrotask(()=>{i=!1,r=!0,e.publish(`presentation.project.state.requested`,`home`)}))}),e.subscribe(`presentation.project.state.reported`,({payload:t})=>{r&&t&&(r=!1,!t.project&&e.publish(`presentation.main.panel.open.requested`,`home`,{container:`surface`,id:`home`,component:`home`,title:n(`home.tab`)}))});var a=`
  <section class="home-start" aria-labelledby="home-start-title">
    <h1 id="home-start-title" data-i18n="home.start"></h1>
    <button type="button" class="home-action" data-action="new">
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M14 27H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h9l7 8v4M15 2v8h8"/>
        <circle cx="22" cy="23" r="8" fill="currentColor" stroke="none"/>
        <path d="M22 18v10m-5-5h10" stroke="var(--background)"/>
      </svg>
      <span data-i18n="home.newProject"></span>
    </button>
    <button type="button" class="home-action" data-action="open">
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M3 25V7a3 3 0 0 1 3-3h5l5 5h8a3 3 0 0 1 3 3v2M3 25l5-11h19a3 3 0 0 1 3 4l-4 8a4 4 0 0 1-3 2H6a3 3 0 0 1-3-3Z"/>
      </svg>
      <span data-i18n="home.openProject"></span>
    </button>
    <button type="button" class="home-action" data-action="connect">
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 10H9a6 6 0 0 0 0 12h3m8-12h3a6 6 0 0 1 0 12h-3M10 16h12"/>
      </svg>
      <span data-i18n="home.connectTo"></span>
    </button>
  </section>
`,o=`
  <form class="home-create" aria-labelledby="home-create-title">
    <h1 id="home-create-title" data-i18n="home.create.title"></h1>
    <label class="home-create-field">
      <span data-i18n="home.create.name"></span>
      <input name="name" required autocomplete="off" />
    </label>
    <p class="home-create-hint" data-i18n="home.create.hint"></p>
    <p class="home-create-error" role="alert" hidden></p>
    <div class="home-create-actions">
      <button type="submit" class="home-create-submit" data-i18n="home.create.submit"></button>
      <button type="button" class="home-create-cancel" data-i18n="home.create.cancel"></button>
    </div>
  </form>
`,s=`
  <form class="home-create" aria-labelledby="home-connect-title" novalidate>
    <h1 id="home-connect-title" data-i18n="home.connect.title"></h1>
    <label class="home-create-field">
      <span data-i18n="home.connect.url"></span>
      <input name="url" type="url" required autocomplete="off" inputmode="url" />
    </label>
    <label class="home-create-field">
      <span data-i18n="home.connect.accessCode"></span>
      <input name="accessCode" type="password" autocomplete="off" />
    </label>
    <p class="home-create-hint" data-i18n="home.connect.hint"></p>
    <p class="home-create-error" role="alert" hidden></p>
    <div class="home-create-actions">
      <button type="submit" class="home-create-submit" data-i18n="home.connect.submit"></button>
      <button type="button" class="home-create-cancel" data-i18n="home.create.cancel"></button>
    </div>
  </form>
`,c=()=>`showDirectoryPicker`in window,l=e=>{try{let t=new URL(e);return t.protocol===`http:`||t.protocol===`https:`?t.href:null}catch{return null}};function u(){let r=document.createElement(`div`);r.className=`panel-content home`;let i=!1,u=`start`,d=``,f=`home.loading.project`,p=i=>{if(u=`start`,r.innerHTML=a,t(r),i){let e=document.createElement(`p`);e.className=`home-create-error`,e.setAttribute(`role`,`alert`),e.textContent=i,r.append(e)}let o=r.querySelector(`.home-action[data-action="new"]`);o&&!c()&&(o.disabled=!0,o.dataset.i18nTitle=`home.newProject.unsupported`,o.title=n(`home.newProject.unsupported`)),o?.addEventListener(`click`,()=>m()),r.querySelector(`.home-action[data-action="connect"]`)?.addEventListener(`click`,()=>h()),r.querySelector(`.home-action[data-action="open"]`)?.addEventListener(`click`,()=>{e.publish(`presentation.project.open.requested`,`home`)})},m=(n=null)=>{u=`form`,r.innerHTML=o,t(r);let i=r.querySelector(`.home-create`),a=r.querySelector(`input[name="name"]`),s=r.querySelector(`.home-create-error`);i&&a&&s&&(a.value=d,n&&(s.hidden=!1,s.textContent=n),i.addEventListener(`submit`,t=>{t.preventDefault(),d=a.value.trim(),d&&e.publish(`presentation.project.new.requested`,`home`,{name:d})}),r.querySelector(`.home-create-cancel`)?.addEventListener(`click`,()=>{d=``,p()}),a.focus())},h=()=>{u=`form`,r.innerHTML=s,t(r);let i=r.querySelector(`.home-create`),a=r.querySelector(`input[name="url"]`),o=r.querySelector(`input[name="accessCode"]`),c=r.querySelector(`.home-create-error`);i&&a&&o&&c&&(i.addEventListener(`submit`,t=>{t.preventDefault();let r=l(a.value.trim());if(!r){c.hidden=!1,c.textContent=n(`home.connect.invalidUrl`);return}c.hidden=!0;let i=o.value.trim();e.publish(`presentation.project.connect.requested`,`home`,i?{url:r,apiToken:i}:{url:r})}),r.querySelector(`.home-create-cancel`)?.addEventListener(`click`,()=>p()),a.focus())},g=e=>{u=`loading`,f=e;let n=document.createElement(`div`);n.className=`home-loading`,n.setAttribute(`role`,`status`),n.setAttribute(`aria-live`,`polite`);let a=document.createElement(`span`);a.className=`home-spinner`,a.setAttribute(`aria-hidden`,`true`);let o=document.createElement(`span`);o.className=`home-loading-label`,o.dataset.i18n=i?e:`home.loading.python`,n.append(a,o),r.replaceChildren(n),t(r)},_=e=>{let t=r.querySelector(`.home-loading-label`);t&&(t.dataset.i18n=e,t.textContent=n(e))},v=e=>{i=e,u===`loading`&&_(e?f:`home.loading.python`)},y=()=>{u=`cleared`,d=``,r.replaceChildren()},b=[e.subscribe(`presentation.python.state.reported`,({payload:e})=>v(e?.ready??!1)),e.subscribe(`presentation.python.loading`,()=>v(!1)),e.subscribe(`presentation.python.failed`,()=>v(!1)),e.subscribe(`presentation.python.disconnected`,()=>v(!1)),e.subscribe(`presentation.project.state.reported`,({payload:e})=>{e?.project&&y()}),e.subscribe(`presentation.project.create.started`,()=>g(`home.loading.create`)),e.subscribe(`presentation.project.create.failed`,e=>{let t=e.payload;if(!t)return;let r=t.reason===`permission-denied`?n(`home.create.permissionDenied`):n(`home.create.error`,{message:t.message??t.reason});m(r)}),e.subscribe(`presentation.project.inspect.started`,()=>g(`home.loading.project`)),e.subscribe(`presentation.python.ready`,()=>v(!0)),e.subscribe(`presentation.project.local.opened`,y),e.subscribe(`presentation.project.remote.opened`,y),e.subscribe(`presentation.project.open.failed`,({payload:e})=>{let t=e?.reason,r=t===`unsupported`?`home.open.unsupported`:t===`permission-denied`?`home.open.permissionDenied`:t===`crate-not-found`||t===`crate-invalid`||t===`location-not-found`?`home.open.invalidProject`:t===`inspect-failed`?`home.open.inspectFailed`:`home.open.readError`,i=e?.message??n(r);p(n(`home.open.error`,{message:i}))})];return p(),e.publish(`presentation.python.state.requested`,`home`),e.publish(`presentation.project.state.requested`,`home`),{element:r,dispose:()=>{b.forEach(e=>e()),r.remove()}}}export{u as default,u as makeHome};