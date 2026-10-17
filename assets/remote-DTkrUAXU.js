const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/access_token_recovered-N0Q7ysHQ.js","assets/access-token-CLIkSexa.js","assets/access_token_remembered-CIyMtfrA.js","assets/folder-C9MGXqv7.js","assets/context_initialized-Cd06Lltm.js","assets/command-THxSJB_I.js","assets/event-bus-DF2J4VGH.js","assets/context_parameters_set-BE1PIvfn.js","assets/context-CMYPiSAh.js","assets/rolldown-runtime-COiEfhsA.js","assets/N3Parser-B_R4JZXu.js","assets/csv_tab_opened-CyJSDQQ3.js","assets/file-metadata-CeeWuSbM.js","assets/docx_tab_opened-1BAEOphh.js","assets/dwg_tab_opened-DpZzf_lK.js","assets/dxf_tab_opened-8K06kygy.js","assets/file_metadata_extracted-S4npp3Qn.js","assets/project-repository-BFVnnBAI.js","assets/project-file-CLbrwvEX.js","assets/file_opening_strategy_found-eqUpvaQ4.js","assets/preload-helper-BZ1Pz5am.js","assets/xstate.esm-DgcPd8j5.js","assets/statechart-converter-NGU8bmeG.js","assets/folder-BHuCeBQc.js","assets/heic_tab_opened-CplcSy5s.js","assets/html_tab_opened-BSyQddHv.js","assets/ifc_element_highlighted-CVcF6tcc.js","assets/ifc-view-repository-CDXubQh2.js","assets/ifc_element_identified-Coj_Rg5e.js","assets/ifc_element_selected-Clengjaq.js","assets/ifc_mesh_picked-DtYpj53p.js","assets/ifc_tab_opened-CWViFHZf.js","assets/ifc_view_found-D_so514I.js","assets/image_tab_opened-D6uj0Zyk.js","assets/md_tab_opened-CkPe14I0.js","assets/pdf_tab_opened-C60h9ufV.js","assets/remote_project_connected-DPuOaydd.js","assets/txt_tab_opened-C3h70K0_.js","assets/xlsx_tab_opened-L_l7fzdE.js"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-helper-BZ1Pz5am.js";import{t}from"./access-token-CLIkSexa.js";import{n,t as r}from"./xstate.esm-DgcPd8j5.js";import{n as i,r as a}from"./statechart-converter-NGU8bmeG.js";import{t as o}from"./etl-32fpJKfx.js";var s={UNDEFINED:`undefined`,ACCESS_TOKEN_RECOVERED:`access_token_recovered`,TEMPORARY_FOLDER_AVAILABLE:`temporary_folder_available`,CONTEXT_INITIALIZED:`context_initialized`,CONTEXT_PARAMETERS_SET:`context_parameters_set`,REMOTE_PROJECT_CONNECTED:`remote_project_connected`,ACCESS_TOKEN_REMEMBERED:`access_token_remembered`},c=`statechart:
  name: StandardRemoteProjectConnection
  description: "Statechart for connecting to a remote InfoBIM project from the browser."

  root state:
    name: standard_remote_project_connection
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
          - target: access_token_recovered
            guard: handler.can_transit_to(to_state = RemoteProjectConnectionStatePort.ACCESS_TOKEN_RECOVERED)
            action: handler.perform_state_transition(to_state = RemoteProjectConnectionStatePort.ACCESS_TOKEN_RECOVERED)

      - name: access_token_recovered
        label:
          en: "Access Token Recovered"
          pt-br: "Token de Acesso Recuperado"
        description:
          en: "The access token is the one given or, if none was given, the one remembered in the cookie."
          pt-br: "O token de acesso é o informado ou, se nenhum foi informado, o lembrado no cookie."
        transitions:
          - target: temporary_folder_available
            guard: handler.can_transit_to(to_state = RemoteProjectConnectionStatePort.TEMPORARY_FOLDER_AVAILABLE)
            action: handler.perform_state_transition(to_state = RemoteProjectConnectionStatePort.TEMPORARY_FOLDER_AVAILABLE)

      - name: temporary_folder_available
        label:
          en: "Temporary Folder Available"
          pt-br: "Pasta Temporária Disponível"
        description:
          en: "A temporary folder the browser can access was created."
          pt-br: "Uma pasta temporária que o navegador consegue acessar foi criada."
        transitions:
          - target: context_initialized
            guard: handler.can_transit_to(to_state = RemoteProjectConnectionStatePort.CONTEXT_INITIALIZED)
            action: handler.perform_state_transition(to_state = RemoteProjectConnectionStatePort.CONTEXT_INITIALIZED)

      - name: context_initialized
        label:
          en: "Context Initialized"
          pt-br: "Contexto Inicializado"
        description:
          en: "infobim init ran in the temporary folder."
          pt-br: "O infobim init rodou na pasta temporária."
        transitions:
          - target: context_parameters_set
            guard: handler.can_transit_to(to_state = RemoteProjectConnectionStatePort.CONTEXT_PARAMETERS_SET)
            action: handler.perform_state_transition(to_state = RemoteProjectConnectionStatePort.CONTEXT_PARAMETERS_SET)

      - name: context_parameters_set
        label:
          en: "Context Parameters Set"
          pt-br: "Parâmetros do Contexto Definidos"
        description:
          en: "The parameters of the connection are in context.ttl."
          pt-br: "Os parâmetros da conexão estão no context.ttl."
        transitions:
          - target: remote_project_connected
            guard: handler.can_transit_to(to_state = RemoteProjectConnectionStatePort.REMOTE_PROJECT_CONNECTED)
            action: handler.perform_state_transition(to_state = RemoteProjectConnectionStatePort.REMOTE_PROJECT_CONNECTED)

      - name: remote_project_connected
        label:
          en: "Remote Project Connected"
          pt-br: "Projeto Remoto Conectado"
        description:
          en: "infobim project --remote finished successfully."
          pt-br: "O infobim project --remote terminou com sucesso."
        transitions:
          - target: access_token_remembered
            guard: handler.can_transit_to(to_state = RemoteProjectConnectionStatePort.ACCESS_TOKEN_REMEMBERED)
            action: handler.perform_state_transition(to_state = RemoteProjectConnectionStatePort.ACCESS_TOKEN_REMEMBERED)

      - name: access_token_remembered
        label:
          en: "Access Token Remembered"
          pt-br: "Token de Acesso Lembrado"
        description:
          en: "The token that worked was saved in the cookie, to be used again after a reload."
          pt-br: "O token que funcionou foi salvo no cookie, para ser usado de novo após um reload."
        type: final
`,l=class e{static config(){return i(c)}static sequence(){return a(e.config())}},u=Object.assign({"../../capability/transformation/access_token_recovered.ts":()=>e(()=>import(`./access_token_recovered-N0Q7ysHQ.js`),__vite__mapDeps([0,1])),"../../capability/transformation/access_token_remembered.ts":()=>e(()=>import(`./access_token_remembered-CIyMtfrA.js`),__vite__mapDeps([2,1,3])),"../../capability/transformation/context_initialized.ts":()=>e(()=>import(`./context_initialized-Cd06Lltm.js`),__vite__mapDeps([4,3,5,6])),"../../capability/transformation/context_parameters_set.ts":()=>e(()=>import(`./context_parameters_set-BE1PIvfn.js`),__vite__mapDeps([7,3,8,9,10])),"../../capability/transformation/csv_tab_opened.ts":()=>e(()=>import(`./csv_tab_opened-CyJSDQQ3.js`),__vite__mapDeps([11,6,12])),"../../capability/transformation/docx_tab_opened.ts":()=>e(()=>import(`./docx_tab_opened-1BAEOphh.js`),__vite__mapDeps([13,6,12])),"../../capability/transformation/dwg_tab_opened.ts":()=>e(()=>import(`./dwg_tab_opened-DpZzf_lK.js`),__vite__mapDeps([14,6,12])),"../../capability/transformation/dxf_tab_opened.ts":()=>e(()=>import(`./dxf_tab_opened-8K06kygy.js`),__vite__mapDeps([15,6,12])),"../../capability/transformation/file_metadata_extracted.ts":()=>e(()=>import(`./file_metadata_extracted-S4npp3Qn.js`),__vite__mapDeps([16,17,6,18])),"../../capability/transformation/file_opening_strategy_found.ts":()=>e(()=>import(`./file_opening_strategy_found-eqUpvaQ4.js`),__vite__mapDeps([19,20,21,22])),"../../capability/transformation/folder.ts":()=>e(()=>import(`./folder-BHuCeBQc.js`),__vite__mapDeps([23,3])),"../../capability/transformation/heic_tab_opened.ts":()=>e(()=>import(`./heic_tab_opened-CplcSy5s.js`),__vite__mapDeps([24,6,12])),"../../capability/transformation/html_tab_opened.ts":()=>e(()=>import(`./html_tab_opened-BSyQddHv.js`),__vite__mapDeps([25,6,12])),"../../capability/transformation/ifc_element_highlighted.ts":()=>e(()=>import(`./ifc_element_highlighted-CVcF6tcc.js`),__vite__mapDeps([26,27])),"../../capability/transformation/ifc_element_identified.ts":()=>e(()=>import(`./ifc_element_identified-Coj_Rg5e.js`),__vite__mapDeps([28,27])),"../../capability/transformation/ifc_element_selected.ts":()=>e(()=>import(`./ifc_element_selected-Clengjaq.js`),__vite__mapDeps([29,6])),"../../capability/transformation/ifc_mesh_picked.ts":()=>e(()=>import(`./ifc_mesh_picked-DtYpj53p.js`),__vite__mapDeps([30,27])),"../../capability/transformation/ifc_tab_opened.ts":()=>e(()=>import(`./ifc_tab_opened-CWViFHZf.js`),__vite__mapDeps([31,6,12])),"../../capability/transformation/ifc_view_found.ts":()=>e(()=>import(`./ifc_view_found-D_so514I.js`),__vite__mapDeps([32,27])),"../../capability/transformation/image_tab_opened.ts":()=>e(()=>import(`./image_tab_opened-D6uj0Zyk.js`),__vite__mapDeps([33,6,12])),"../../capability/transformation/md_tab_opened.ts":()=>e(()=>import(`./md_tab_opened-CkPe14I0.js`),__vite__mapDeps([34,6,12])),"../../capability/transformation/pdf_tab_opened.ts":()=>e(()=>import(`./pdf_tab_opened-C60h9ufV.js`),__vite__mapDeps([35,6,12])),"../../capability/transformation/remote_project_connected.ts":()=>e(()=>import(`./remote_project_connected-DPuOaydd.js`),__vite__mapDeps([36,3,5,6])),"../../capability/transformation/temporary_folder_available.ts":()=>e(()=>import(`./temporary_folder_available-DwI6nn7L.js`),[]),"../../capability/transformation/txt_tab_opened.ts":()=>e(()=>import(`./txt_tab_opened-C3h70K0_.js`),__vite__mapDeps([37,6,12])),"../../capability/transformation/xlsx_tab_opened.ts":()=>e(()=>import(`./xlsx_tab_opened-L_l7fzdE.js`),__vite__mapDeps([38,6,12]))}),d=`RemoteProjectConnectionStatePort`,f=e=>{let[t,n]=e.split(`.`),r=s[n];if(t!==d||r===void 0)throw Error(`Unknown state constant: ${e}`);return r},p=class e{request;etl;static NAME=`remote_project_connection`;static CAPABILITY_ID_PREFIX=`org.infobim.project.plugin.capability.transformation.target.`;static FINAL_STATE=s.ACCESS_TOKEN_REMEMBERED;active=s.UNDEFINED;constructor(e,t=new o){this.request=e,this.etl=t}canTransitTo(e){let t=l.sequence();return t[t.indexOf(this.active)+1]===e}performStateTransition(e){this.active=e}async execute(){let i=crypto.randomUUID(),a=l.config(),o=l.sequence(),s=e=>{let t=f(e.params.to_state);if(e.type===`handler.can_transit_to`)return()=>this.canTransitTo(t)!==e.negated;if(e.type===`handler.perform_state_transition`)return()=>this.performStateTransition(t);throw Error(`Unknown statechart call: ${e.type}`)},c=r({id:a.id,initial:a.initial,states:Object.fromEntries(Object.entries(a.states).map(([e,t])=>[e,{...t.type?{type:t.type}:{},meta:t.meta,...t.on?{on:{STEP:t.on.STEP.map(e=>({target:e.target,...e.guard?{guard:s(e.guard)}:{},...e.actions?{actions:e.actions.map(e=>s(e))}:{}}))}}:{}}]))}),u=n(c);u.start();try{for(;u.getSnapshot().status!==`done`;){let e=String(u.getSnapshot().value),t=o[o.indexOf(e)+1];if(t===void 0)throw Error(`The statechart has no state after ${e}.`);if(await this.runCapability(i,t),u.send({type:`STEP`}),String(u.getSnapshot().value)===e)throw Error(`The statechart stayed in ${e} after the capability of ${t} ran.`)}}catch(e){throw await this.discardFolder(i),new t().forget(this.request.url),e}finally{u.stop(),this.etl.clear(e.NAME,i)}return this.active}async discardFolder(t){let n=this.etl.read(e.NAME,t,s.TEMPORARY_FOLDER_AVAILABLE)?.result;if(n?.storage&&n.name)try{await n.storage.removeEntry(n.name,{recursive:!0})}catch{}}async runCapability(t,n){let r=`${e.CAPABILITY_ID_PREFIX}${n}`;await new(await(this.capabilityFor(r)))().execute({requestId:t,state:n,etl:this.etl,parameters:{url:this.request.url,apiToken:this.request.apiToken}})}async capabilityFor(e){for(let t of Object.values(u))for(let n of Object.values(await t())){let t=n?.METADATA;if(typeof n==`function`&&t?.id===e)return n}throw Error(`Remote project connection capability not found: ${e}`)}},m=`presentation.project.connect.requested`,h=class{static METADATA={id:`project_connect_remote`,logical_component:`project`,description:`Connect to a remote InfoBIM Project by its URL.`,arguments:[{listen:[m],valued:!0,parameter:`url`,description:`Address of the remote project to connect to. It must be an http or https URL.`,type:`str`},{listen:[m],valued:!0,parameter:`apiToken`,description:`API token the remote project is accessed with. Optional.`,type:`str`}]};request;constructor(e){this.request=e.payload}async run(){if(!this.request?.url)throw Error(`The connect request carries no URL.`);await new p(this.request).execute()}};export{h as RemoteProjectInitializationListener};