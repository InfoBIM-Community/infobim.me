const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/access_token_received-CX2KXQL3.js","assets/event-bus-DF2J4VGH.js","assets/config-DMALD4MD.js","assets/browser-1FW0vQyB.js","assets/login-cancelled-vTYIUJLd.js","assets/login-token-C0szJy2f.js","assets/access_token_remembered-BQ77nJKg.js","assets/access-token-xtx0hssz.js","assets/server_url_identified-B5GyZ4xd.js","assets/user_profile_received-CtxkATm2.js"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-helper-BZ1Pz5am.js";import{t}from"./event-bus-DF2J4VGH.js";import{s as n}from"./i18n-xwIcjlwN.js";import{n as r,t as i}from"./xstate.esm-DgcPd8j5.js";import{t as a}from"./etl-32fpJKfx.js";import{n as o,r as s}from"./statechart-converter-C6wOTqeh.js";import{t as c}from"./capability-executor-rzxA5Pmx.js";import{t as l}from"./login-cancelled-vTYIUJLd.js";var u={UNDEFINED:`undefined`,SERVER_URL_IDENTIFIED:`server_url_identified`,ACCESS_TOKEN_RECEIVED:`access_token_received`,USER_PROFILE_RECEIVED:`user_profile_received`,ACCESS_TOKEN_REMEMBERED:`access_token_remembered`},d=`statechart:
  name: StandardUserLogin
  description: "Statechart for logging the person in."

  root state:
    name: standard_user_login
    initial: undefined

    states:
      - name: undefined
        label:
          en: "Undefined"
          pt-br: "Indefinido"
        description:
          en: "Initial state before anything was prepared."
          pt-br: "Estado inicial antes de qualquer preparação."
        transitions:
          - target: server_url_identified
            guard: handler.can_transit_to(to_state = UserLoginStatePort.SERVER_URL_IDENTIFIED)
            action: handler.perform_state_transition(to_state = UserLoginStatePort.SERVER_URL_IDENTIFIED)

      - name: server_url_identified
        label:
          en: "Server URL Identified"
          pt-br: "URL do Servidor Identificada"
        description:
          en: "The URL of the server to log in to is known."
          pt-br: "A URL do servidor em que se faz o login é conhecida."
        transitions:
          - target: access_token_received
            guard: handler.can_transit_to(to_state = UserLoginStatePort.ACCESS_TOKEN_RECEIVED)
            action: handler.perform_state_transition(to_state = UserLoginStatePort.ACCESS_TOKEN_RECEIVED)

      - name: access_token_received
        label:
          en: "Access Token Received"
          pt-br: "Token de Acesso Recebido"
        description:
          en: "The person logged in on the server and the application holds the access token."
          pt-br: "A pessoa fez o login no servidor e o aplicativo tem o token de acesso."
        transitions:
          - target: user_profile_received
            guard: handler.can_transit_to(to_state = UserLoginStatePort.USER_PROFILE_RECEIVED)
            action: handler.perform_state_transition(to_state = UserLoginStatePort.USER_PROFILE_RECEIVED)

      - name: user_profile_received
        label:
          en: "User Profile Received"
          pt-br: "Perfil do Usuário Recebido"
        description:
          en: "The profile of the person was read and the login succeeded."
          pt-br: "O perfil da pessoa foi lido e o login foi efetuado."
        transitions:
          - target: access_token_remembered
            guard: handler.can_transit_to(to_state = UserLoginStatePort.ACCESS_TOKEN_REMEMBERED)
            action: handler.perform_state_transition(to_state = UserLoginStatePort.ACCESS_TOKEN_REMEMBERED)

      - name: access_token_remembered
        label:
          en: "Access Token Remembered"
          pt-br: "Token de Acesso Memorizado"
        description:
          en: "The access token was kept for the server, for as long as it is valid."
          pt-br: "O token de acesso foi guardado para o servidor, enquanto for válido."
        type: final
`,f=class e{static config(){return o(d)}static sequence(){return s(e.config())}},p=Object.assign({"../../capability/transformation/access_token_received.ts":()=>e(()=>import(`./access_token_received-CX2KXQL3.js`),__vite__mapDeps([0,1,2,3,4,5])),"../../capability/transformation/access_token_remembered.ts":()=>e(()=>import(`./access_token_remembered-BQ77nJKg.js`),__vite__mapDeps([6,2,3,7,5])),"../../capability/transformation/server_url_identified.ts":()=>e(()=>import(`./server_url_identified-B5GyZ4xd.js`),__vite__mapDeps([8,2,3])),"../../capability/transformation/user_profile_received.ts":()=>e(()=>import(`./user_profile_received-CtxkATm2.js`),__vite__mapDeps([9,1,2,3,5]))}),m=`UserLoginStatePort`,h=e=>{let[t,n]=e.split(`.`),r=u[n];if(t!==m||r===void 0)throw Error(`Unknown state constant: ${e}`);return r},g=class e{etl;static NAME=`user_login`;static CAPABILITY_ID_PREFIX=`org.ontobdc.user.plugin.capability.transformation.target.`;static FINAL_STATE=u.ACCESS_TOKEN_REMEMBERED;active=u.UNDEFINED;capabilities=new c(p);constructor(e=new a){this.etl=e}canTransitTo(e){let t=f.sequence();return t[t.indexOf(this.active)+1]===e}performStateTransition(e){this.active=e}async execute(){let a=crypto.randomUUID();t.publish(`presentation.main.panel.open.requested`,`user_login`,{container:`surface`,id:`login`,component:`login`,title:n(`login.tab`)});let o=f.config(),s=f.sequence(),c=e=>{let t=h(e.params.to_state);if(e.type===`handler.can_transit_to`)return()=>this.canTransitTo(t)!==e.negated;if(e.type===`handler.perform_state_transition`)return()=>this.performStateTransition(t);throw Error(`Unknown statechart call: ${e.type}`)},l=i({id:o.id,initial:o.initial,states:Object.fromEntries(Object.entries(o.states).map(([e,t])=>[e,{...t.type?{type:t.type}:{},meta:t.meta,...t.on?{on:{STEP:t.on.STEP.map(e=>({target:e.target,...e.guard?{guard:c(e.guard)}:{},...e.actions?{actions:e.actions.map(e=>c(e))}:{}}))}}:{}}]))}),u=r(l);u.start();try{for(;u.getSnapshot().status!==`done`;){let e=String(u.getSnapshot().value),t=s[s.indexOf(e)+1];if(t===void 0)throw Error(`The statechart has no state after ${e}.`);if(await this.runCapability(a,t),u.send({type:`STEP`}),String(u.getSnapshot().value)===e)throw Error(`The statechart stayed in ${e} after the capability of ${t} ran.`)}}finally{u.stop(),this.etl.clear(e.NAME,a)}return this.active}async runCapability(t,n){await this.capabilities.execute(`${e.CAPABILITY_ID_PREFIX}${n}`,{requestId:t,state:n,machine:e.NAME,etl:this.etl,parameters:{}})}},_=`presentation.user.login.requested`,v=`user_on_login_requested`,y=class{static METADATA={id:v,logical_component:`user`,description:`Logs the person in when they ask to, and says when the login did not finish.`,arguments:[{listen:[_],valued:!1,description:`The person asked to log in.`,type:`str`}]};async run(){try{await new g().execute()}catch(e){let n=e instanceof Error?e.message:String(e);t.publish(`presentation.user.login.failed`,v,{message:n,cancelled:e instanceof l}),e instanceof l||t.publish(`presentation.exception.listener.raised`,v,{message:n})}}};export{y as OnUserLoginRequested};