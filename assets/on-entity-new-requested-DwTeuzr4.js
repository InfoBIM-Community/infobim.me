const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/access_token_recovered-Dp-VSjLf.js","assets/access-token-xtx0hssz.js","assets/access_token_remembered-CC9f5lof.js","assets/folder-DWWCqi5d.js","assets/context_initialized-Cr8B6OBG.js","assets/command-BKxViI1w.js","assets/event-bus-DF2J4VGH.js","assets/command-rewriter-ClGE2hZD.js","assets/rolldown-runtime-COiEfhsA.js","assets/config-DMALD4MD.js","assets/browser-1FW0vQyB.js","assets/context_parameters_set-DCtF273b.js","assets/context-Os3V4n7y.js","assets/container-file-repository-BMy8YMrP.js","assets/N3Parser-B_R4JZXu.js","assets/csv_tab_opened-BC44MCnI.js","assets/file-metadata-CeeWuSbM.js","assets/docx_tab_opened-C5aohAgI.js","assets/entity_dataset_ready-CO-ykYQO.js","assets/entity_dataset_ready-CL9bKIdn.js","assets/entity-repository-CXTIw0GL.js","assets/entity-groups-CbE-al77.js","assets/command-request-DkbIe1Ej.js","assets/container-format-CM_BN7I_.js","assets/container-command-Clg2bOvL.js","assets/entity_new_facade_found-CNCPTj7i.js","assets/entity_new_tab_opened-WtbCeTUR.js","assets/i18n-xwIcjlwN.js","assets/facade-labels-DBpkBQe5.js","assets/preload-helper-BZ1Pz5am.js","assets/entity_type_resolved-BsN1Y-vQ.js","assets/file_metadata_extracted-CzzU6btw.js","assets/container-repository-B-mLdCDo.js","assets/file_opening_strategy_found-CSS0qz1x.js","assets/xstate.esm-DgcPd8j5.js","assets/statechart-converter-C6wOTqeh.js","assets/folder-CmR8YcQ1.js","assets/heic_tab_opened-rc2LMM6K.js","assets/html_tab_opened-BJruiXsQ.js","assets/image_tab_opened-s_CfILuO.js","assets/md_tab_opened-zIOCBrNZ.js","assets/pdf_tab_opened-BiiO8D46.js","assets/remote_container_connected-OM_KmPRZ.js","assets/remote_container_inspected-Ck8QPh0q.js","assets/remote-container-repository-DNlTdJ1W.js","assets/storage-aC2TzhPr.js","assets/storage-C-vMt-Bv.js","assets/storage_container_defined-BiuXVhu1.js","assets/storage-root-CPp71Ych.js","assets/storage_root_defined-BIGjcgdC.js","assets/storage_root_defined_from_container-vBg43TGI.js","assets/temporary_folder_available-BnP0KhFB.js","assets/txt_tab_opened-CKQY-P6A.js","assets/workspace_container_created-nG_x3IyD.js","assets/workspace_container_healthy---ZogSTf.js","assets/xlsx_tab_opened-BuKK5nU6.js"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-helper-BZ1Pz5am.js";import{t}from"./event-bus-DF2J4VGH.js";import{t as n}from"./command-request-DkbIe1Ej.js";import{n as r,t as i}from"./xstate.esm-DgcPd8j5.js";import{t as a}from"./etl-32fpJKfx.js";import{n as o,r as s}from"./statechart-converter-C6wOTqeh.js";import{t as c}from"./capability-executor-rzxA5Pmx.js";var l={UNDEFINED:`undefined`,ENTITY_TYPE_RESOLVED:`entity_type_resolved`,ENTITY_DATASET_READY:`entity_dataset_ready`,ENTITY_NEW_FACADE_FOUND:`entity_new_facade_found`,ENTITY_NEW_TAB_OPENED:`entity_new_tab_opened`},u=`statechart:
  name: StandardNewEntity
  description: "Statechart for starting a new entity of any type: the dataset that holds it, its facade and the tab to fill it in."

  root state:
    name: standard_new_entity
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
          - target: entity_type_resolved
            guard: handler.can_transit_to(to_state = NewEntityStatePort.ENTITY_TYPE_RESOLVED)
            action: handler.perform_state_transition(to_state = NewEntityStatePort.ENTITY_TYPE_RESOLVED)

      - name: entity_type_resolved
        label:
          en: "Entity Type Resolved"
          pt-br: "Tipo da Entidade Resolvido"
        description:
          en: "The type of the entity to create is known, from the request or from the group it names."
          pt-br: "O tipo da entidade a criar é conhecido, pelo pedido ou pelo grupo que ele nomeia."
        transitions:
          - target: entity_dataset_ready
            guard: handler.can_transit_to(to_state = NewEntityStatePort.ENTITY_DATASET_READY)
            action: handler.perform_state_transition(to_state = NewEntityStatePort.ENTITY_DATASET_READY)

      - name: entity_dataset_ready
        label:
          en: "Entity Dataset Ready"
          pt-br: "Dataset da Entidade Pronto"
        description:
          en: "The container has a dataset that holds the entity; one is created, empty, when it had none."
          pt-br: "O contêiner tem um dataset que contém a entidade; se não tinha, um é criado, vazio."
        transitions:
          - target: entity_new_facade_found
            guard: handler.can_transit_to(to_state = NewEntityStatePort.ENTITY_NEW_FACADE_FOUND)
            action: handler.perform_state_transition(to_state = NewEntityStatePort.ENTITY_NEW_FACADE_FOUND)

      - name: entity_new_facade_found
        label:
          en: "Entity New Facade Found"
          pt-br: "Fachada da Nova Entidade Encontrada"
        description:
          en: "The facade of the entity was read and allows creating instances; the form starts with the values of the request."
          pt-br: "A fachada da entidade foi lida e permite criar instâncias; o formulário começa com os valores do pedido."
        transitions:
          - target: entity_new_tab_opened
            guard: handler.can_transit_to(to_state = NewEntityStatePort.ENTITY_NEW_TAB_OPENED)
            action: handler.perform_state_transition(to_state = NewEntityStatePort.ENTITY_NEW_TAB_OPENED)

      - name: entity_new_tab_opened
        label:
          en: "Entity New Tab Opened"
          pt-br: "Aba da Nova Entidade Aberta"
        description:
          en: "The tab where the new entity is filled in was asked of the surface."
          pt-br: "A aba onde a nova entidade é preenchida foi pedida à superfície."
        type: final
`,d=class e{static config(){return o(u)}static sequence(){return s(e.config())}},f=Object.assign({"../../capability/transformation/access_token_recovered.ts":()=>e(()=>import(`./access_token_recovered-Dp-VSjLf.js`),__vite__mapDeps([0,1])),"../../capability/transformation/access_token_remembered.ts":()=>e(()=>import(`./access_token_remembered-CC9f5lof.js`),__vite__mapDeps([2,1,3])),"../../capability/transformation/context_initialized.ts":()=>e(()=>import(`./context_initialized-Cr8B6OBG.js`),__vite__mapDeps([4,3,5,6,7,8,9,10])),"../../capability/transformation/context_parameters_set.ts":()=>e(()=>import(`./context_parameters_set-DCtF273b.js`),__vite__mapDeps([11,3,12,8,6,13,14])),"../../capability/transformation/csv_tab_opened.ts":()=>e(()=>import(`./csv_tab_opened-BC44MCnI.js`),__vite__mapDeps([15,6,16])),"../../capability/transformation/docx_tab_opened.ts":()=>e(()=>import(`./docx_tab_opened-C5aohAgI.js`),__vite__mapDeps([17,6,16])),"../../capability/transformation/entity_dataset_ready.ts":()=>e(()=>import(`./entity_dataset_ready-CO-ykYQO.js`),__vite__mapDeps([18,19,6,20,21,22,23,24])),"../../capability/transformation/entity_new_facade_found.ts":()=>e(()=>import(`./entity_new_facade_found-CNCPTj7i.js`),__vite__mapDeps([25,20,6,21,22,19,23,24])),"../../capability/transformation/entity_new_tab_opened.ts":()=>e(()=>import(`./entity_new_tab_opened-WtbCeTUR.js`),__vite__mapDeps([26,6,27,28,29])),"../../capability/transformation/entity_type_resolved.ts":()=>e(()=>import(`./entity_type_resolved-BsN1Y-vQ.js`),__vite__mapDeps([30,20,6,21])),"../../capability/transformation/file_metadata_extracted.ts":()=>e(()=>import(`./file_metadata_extracted-CzzU6btw.js`),__vite__mapDeps([31,32,6,13])),"../../capability/transformation/file_opening_strategy_found.ts":()=>e(()=>import(`./file_opening_strategy_found-CSS0qz1x.js`),__vite__mapDeps([33,29,6,34,35,10,16])),"../../capability/transformation/folder.ts":()=>e(()=>import(`./folder-CmR8YcQ1.js`),__vite__mapDeps([36,3])),"../../capability/transformation/heic_tab_opened.ts":()=>e(()=>import(`./heic_tab_opened-rc2LMM6K.js`),__vite__mapDeps([37,6,16])),"../../capability/transformation/html_tab_opened.ts":()=>e(()=>import(`./html_tab_opened-BJruiXsQ.js`),__vite__mapDeps([38,6,16])),"../../capability/transformation/image_tab_opened.ts":()=>e(()=>import(`./image_tab_opened-s_CfILuO.js`),__vite__mapDeps([39,6,16])),"../../capability/transformation/md_tab_opened.ts":()=>e(()=>import(`./md_tab_opened-zIOCBrNZ.js`),__vite__mapDeps([40,6,16])),"../../capability/transformation/pdf_tab_opened.ts":()=>e(()=>import(`./pdf_tab_opened-BiiO8D46.js`),__vite__mapDeps([41,6,16])),"../../capability/transformation/remote_container_connected.ts":()=>e(()=>import(`./remote_container_connected-OM_KmPRZ.js`),__vite__mapDeps([42,3,5,6,7,8,9,10])),"../../capability/transformation/remote_container_inspected.ts":()=>e(()=>import(`./remote_container_inspected-Ck8QPh0q.js`),__vite__mapDeps([43,9,10,44,1])),"../../capability/transformation/storage.ts":()=>e(()=>import(`./storage-aC2TzhPr.js`),__vite__mapDeps([45,46,23])),"../../capability/transformation/storage_container_defined.ts":()=>e(()=>import(`./storage_container_defined-BiuXVhu1.js`),__vite__mapDeps([47,6,46,23,48,13,5,7,8,9,10])),"../../capability/transformation/storage_root_defined.ts":()=>e(()=>import(`./storage_root_defined-BIGjcgdC.js`),__vite__mapDeps([49,6,46,23,48,13,5,7,8,9,10])),"../../capability/transformation/storage_root_defined_from_container.ts":()=>e(()=>import(`./storage_root_defined_from_container-vBg43TGI.js`),__vite__mapDeps([50,48,13,23,5,6,7,8,9,10,46])),"../../capability/transformation/temporary_folder_available.ts":()=>e(()=>import(`./temporary_folder_available-BnP0KhFB.js`),__vite__mapDeps([51,13])),"../../capability/transformation/txt_tab_opened.ts":()=>e(()=>import(`./txt_tab_opened-CKQY-P6A.js`),__vite__mapDeps([52,6,16])),"../../capability/transformation/workspace_container_created.ts":()=>e(()=>import(`./workspace_container_created-nG_x3IyD.js`),__vite__mapDeps([53,48,13,23,5,6,7,8,9,10,46])),"../../capability/transformation/workspace_container_healthy.ts":()=>e(()=>import(`./workspace_container_healthy---ZogSTf.js`),__vite__mapDeps([54,48,13,23,5,6,7,8,9,10,46])),"../../capability/transformation/xlsx_tab_opened.ts":()=>e(()=>import(`./xlsx_tab_opened-BuKK5nU6.js`),__vite__mapDeps([55,6,16]))}),p=`NewEntityStatePort`,m=e=>{let[t,n]=e.split(`.`),r=l[n];if(t!==p||r===void 0)throw Error(`Unknown state constant: ${e}`);return r},h=class e{request;etl;static NAME=`new_entity`;static CAPABILITY_ID_PREFIX=`org.ontobdc.container.plugin.capability.transformation.target.`;static FINAL_STATE=l.ENTITY_NEW_TAB_OPENED;active=l.UNDEFINED;capabilities=new c(f);constructor(e,t=new a){this.request=e,this.etl=t}canTransitTo(e){let t=d.sequence();return t[t.indexOf(this.active)+1]===e}performStateTransition(e){this.active=e}async execute(){let t=crypto.randomUUID(),n=d.config(),a=d.sequence(),o=e=>{let t=m(e.params.to_state);if(e.type===`handler.can_transit_to`)return()=>this.canTransitTo(t)!==e.negated;if(e.type===`handler.perform_state_transition`)return()=>this.performStateTransition(t);throw Error(`Unknown statechart call: ${e.type}`)},s=i({id:n.id,initial:n.initial,states:Object.fromEntries(Object.entries(n.states).map(([e,t])=>[e,{...t.type?{type:t.type}:{},meta:t.meta,...t.on?{on:{STEP:t.on.STEP.map(e=>({target:e.target,...e.guard?{guard:o(e.guard)}:{},...e.actions?{actions:e.actions.map(e=>o(e))}:{}}))}}:{}}]))}),c=r(s);c.start();try{for(;c.getSnapshot().status!==`done`;){let e=String(c.getSnapshot().value),n=a[a.indexOf(e)+1];if(n===void 0)throw Error(`The statechart has no state after ${e}.`);if(await this.runCapability(t,n),c.send({type:`STEP`}),String(c.getSnapshot().value)===e)throw Error(`The statechart stayed in ${e} after the capability of ${n} ran.`)}}finally{c.stop(),this.etl.clear(e.NAME,t)}return this.active}async runCapability(t,n){await this.capabilities.execute(`${e.CAPABILITY_ID_PREFIX}${n}`,{requestId:t,state:n,machine:e.NAME,etl:this.etl,parameters:{entityType:this.request.entityType,group:this.request.group,values:JSON.stringify(this.request.values??{})}})}},g=`presentation.entity.new.requested`,_=`container_on_entity_new_requested`,v=class{static METADATA={id:_,logical_component:`container`,description:`Starts a new entity of any type: makes sure the container has its dataset, reads its facade and opens the tab to fill it in.`,arguments:[{listen:[g],valued:!0,parameter:`entityType`,description:`Type of the entity to create. Optional when the request names a group.`,type:`str`},{listen:[g],valued:!0,parameter:`group`,description:`Path, in the container, of a dataset that holds entities of the type. Optional when the request names the type.`,type:`str`}]};request;constructor(e){this.request=e.payload}async run(){if(!this.request?.entityType&&!this.request?.group)throw Error(`The request for a new entity carries neither a type nor a group.`);try{await new h(this.request).execute()}catch(e){t.publish(`presentation.entity.new.failed`,_,{message:n(e)})}}};export{v as OnEntityNewRequested};