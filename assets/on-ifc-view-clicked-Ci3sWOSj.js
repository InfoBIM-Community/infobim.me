const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/access_token_recovered-N0Q7ysHQ.js","assets/access-token-CLIkSexa.js","assets/access_token_remembered-CIyMtfrA.js","assets/folder-C9MGXqv7.js","assets/context_initialized-Cd06Lltm.js","assets/command-THxSJB_I.js","assets/event-bus-DF2J4VGH.js","assets/context_parameters_set-BE1PIvfn.js","assets/context-CMYPiSAh.js","assets/rolldown-runtime-COiEfhsA.js","assets/N3Parser-B_R4JZXu.js","assets/csv_tab_opened-CyJSDQQ3.js","assets/file-metadata-CeeWuSbM.js","assets/docx_tab_opened-1BAEOphh.js","assets/dwg_tab_opened-DpZzf_lK.js","assets/dxf_tab_opened-8K06kygy.js","assets/file_metadata_extracted-S4npp3Qn.js","assets/project-repository-BFVnnBAI.js","assets/project-file-CLbrwvEX.js","assets/file_opening_strategy_found-eqUpvaQ4.js","assets/preload-helper-BZ1Pz5am.js","assets/xstate.esm-DgcPd8j5.js","assets/statechart-converter-NGU8bmeG.js","assets/folder-BHuCeBQc.js","assets/heic_tab_opened-CplcSy5s.js","assets/html_tab_opened-BSyQddHv.js","assets/ifc_element_highlighted-CVcF6tcc.js","assets/ifc-view-repository-CDXubQh2.js","assets/ifc_element_identified-Coj_Rg5e.js","assets/ifc_element_selected-Clengjaq.js","assets/ifc_mesh_picked-DtYpj53p.js","assets/ifc_tab_opened-CWViFHZf.js","assets/ifc_view_found-D_so514I.js","assets/image_tab_opened-D6uj0Zyk.js","assets/md_tab_opened-CkPe14I0.js","assets/pdf_tab_opened-C60h9ufV.js","assets/remote_project_connected-DPuOaydd.js","assets/txt_tab_opened-C3h70K0_.js","assets/xlsx_tab_opened-L_l7fzdE.js"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-helper-BZ1Pz5am.js";import{n as t,t as n}from"./xstate.esm-DgcPd8j5.js";import{n as r,r as i}from"./statechart-converter-NGU8bmeG.js";import{t as a}from"./etl-32fpJKfx.js";var o={UNDEFINED:`undefined`,IFC_VIEW_FOUND:`ifc_view_found`,IFC_MESH_PICKED:`ifc_mesh_picked`,IFC_ELEMENT_IDENTIFIED:`ifc_element_identified`,IFC_ELEMENT_HIGHLIGHTED:`ifc_element_highlighted`,IFC_ELEMENT_SELECTED:`ifc_element_selected`},s=`statechart:
  name: IfcElementSelection
  description: "Select the element clicked in the 3D view of an IFC tab and publish the selection."

  root state:
    name: ifc_element_selection
    initial: undefined

    states:
      - name: undefined
        label:
          en: "Undefined"
          pt-br: "Indefinido"
        description:
          en: "Initial state before the view of the clicked tab was found."
          pt-br: "Estado inicial antes de a vista da aba clicada ser encontrada."
        transitions:
          - target: ifc_view_found
            guard: handler.can_transit_to(to_state = IfcElementSelectionStatePort.IFC_VIEW_FOUND)
            action: handler.perform_state_transition(to_state = IfcElementSelectionStatePort.IFC_VIEW_FOUND)

      - name: ifc_view_found
        label:
          en: "IFC View Found"
          pt-br: "Vista IFC Encontrada"
        description:
          en: "The 3D view of the clicked IFC tab was found."
          pt-br: "A vista 3D da aba IFC clicada foi encontrada."
        transitions:
          - target: ifc_mesh_picked
            guard: handler.can_transit_to(to_state = IfcElementSelectionStatePort.IFC_MESH_PICKED)
            action: handler.perform_state_transition(to_state = IfcElementSelectionStatePort.IFC_MESH_PICKED)

      - name: ifc_mesh_picked
        label:
          en: "IFC Mesh Picked"
          pt-br: "Malha IFC Apontada"
        description:
          en: "The element drawn at the click was picked, if there is one."
          pt-br: "O elemento desenhado no clique foi apontado, se houver."
        transitions:
          - target: ifc_element_identified
            guard: handler.can_transit_to(to_state = IfcElementSelectionStatePort.IFC_ELEMENT_IDENTIFIED)
            action: handler.perform_state_transition(to_state = IfcElementSelectionStatePort.IFC_ELEMENT_IDENTIFIED)

      - name: ifc_element_identified
        label:
          en: "IFC Element Identified"
          pt-br: "Elemento IFC Identificado"
        description:
          en: "What the IFC says about the picked element was read from the table of the view."
          pt-br: "O que o IFC diz sobre o elemento apontado foi lido da tabela da vista."
        transitions:
          - target: ifc_element_highlighted
            guard: handler.can_transit_to(to_state = IfcElementSelectionStatePort.IFC_ELEMENT_HIGHLIGHTED)
            action: handler.perform_state_transition(to_state = IfcElementSelectionStatePort.IFC_ELEMENT_HIGHLIGHTED)

      - name: ifc_element_highlighted
        label:
          en: "IFC Element Highlighted"
          pt-br: "Elemento IFC Destacado"
        description:
          en: "The picked element is highlighted in the view, and any other highlight was cleared."
          pt-br: "O elemento apontado está destacado na vista, e qualquer outro destaque foi removido."
        transitions:
          - target: ifc_element_selected
            guard: handler.can_transit_to(to_state = IfcElementSelectionStatePort.IFC_ELEMENT_SELECTED)
            action: handler.perform_state_transition(to_state = IfcElementSelectionStatePort.IFC_ELEMENT_SELECTED)

      - name: ifc_element_selected
        label:
          en: "IFC Element Selected"
          pt-br: "Elemento IFC Selecionado"
        description:
          en: "The selection was published."
          pt-br: "A seleção foi publicada."
        type: final
`,c=class e{static config(){return r(s)}static sequence(){return i(e.config())}},l=Object.assign({"../../capability/transformation/access_token_recovered.ts":()=>e(()=>import(`./access_token_recovered-N0Q7ysHQ.js`),__vite__mapDeps([0,1])),"../../capability/transformation/access_token_remembered.ts":()=>e(()=>import(`./access_token_remembered-CIyMtfrA.js`),__vite__mapDeps([2,1,3])),"../../capability/transformation/context_initialized.ts":()=>e(()=>import(`./context_initialized-Cd06Lltm.js`),__vite__mapDeps([4,3,5,6])),"../../capability/transformation/context_parameters_set.ts":()=>e(()=>import(`./context_parameters_set-BE1PIvfn.js`),__vite__mapDeps([7,3,8,9,10])),"../../capability/transformation/csv_tab_opened.ts":()=>e(()=>import(`./csv_tab_opened-CyJSDQQ3.js`),__vite__mapDeps([11,6,12])),"../../capability/transformation/docx_tab_opened.ts":()=>e(()=>import(`./docx_tab_opened-1BAEOphh.js`),__vite__mapDeps([13,6,12])),"../../capability/transformation/dwg_tab_opened.ts":()=>e(()=>import(`./dwg_tab_opened-DpZzf_lK.js`),__vite__mapDeps([14,6,12])),"../../capability/transformation/dxf_tab_opened.ts":()=>e(()=>import(`./dxf_tab_opened-8K06kygy.js`),__vite__mapDeps([15,6,12])),"../../capability/transformation/file_metadata_extracted.ts":()=>e(()=>import(`./file_metadata_extracted-S4npp3Qn.js`),__vite__mapDeps([16,17,6,18])),"../../capability/transformation/file_opening_strategy_found.ts":()=>e(()=>import(`./file_opening_strategy_found-eqUpvaQ4.js`),__vite__mapDeps([19,20,21,22])),"../../capability/transformation/folder.ts":()=>e(()=>import(`./folder-BHuCeBQc.js`),__vite__mapDeps([23,3])),"../../capability/transformation/heic_tab_opened.ts":()=>e(()=>import(`./heic_tab_opened-CplcSy5s.js`),__vite__mapDeps([24,6,12])),"../../capability/transformation/html_tab_opened.ts":()=>e(()=>import(`./html_tab_opened-BSyQddHv.js`),__vite__mapDeps([25,6,12])),"../../capability/transformation/ifc_element_highlighted.ts":()=>e(()=>import(`./ifc_element_highlighted-CVcF6tcc.js`),__vite__mapDeps([26,27])),"../../capability/transformation/ifc_element_identified.ts":()=>e(()=>import(`./ifc_element_identified-Coj_Rg5e.js`),__vite__mapDeps([28,27])),"../../capability/transformation/ifc_element_selected.ts":()=>e(()=>import(`./ifc_element_selected-Clengjaq.js`),__vite__mapDeps([29,6])),"../../capability/transformation/ifc_mesh_picked.ts":()=>e(()=>import(`./ifc_mesh_picked-DtYpj53p.js`),__vite__mapDeps([30,27])),"../../capability/transformation/ifc_tab_opened.ts":()=>e(()=>import(`./ifc_tab_opened-CWViFHZf.js`),__vite__mapDeps([31,6,12])),"../../capability/transformation/ifc_view_found.ts":()=>e(()=>import(`./ifc_view_found-D_so514I.js`),__vite__mapDeps([32,27])),"../../capability/transformation/image_tab_opened.ts":()=>e(()=>import(`./image_tab_opened-D6uj0Zyk.js`),__vite__mapDeps([33,6,12])),"../../capability/transformation/md_tab_opened.ts":()=>e(()=>import(`./md_tab_opened-CkPe14I0.js`),__vite__mapDeps([34,6,12])),"../../capability/transformation/pdf_tab_opened.ts":()=>e(()=>import(`./pdf_tab_opened-C60h9ufV.js`),__vite__mapDeps([35,6,12])),"../../capability/transformation/remote_project_connected.ts":()=>e(()=>import(`./remote_project_connected-DPuOaydd.js`),__vite__mapDeps([36,3,5,6])),"../../capability/transformation/temporary_folder_available.ts":()=>e(()=>import(`./temporary_folder_available-DwI6nn7L.js`),[]),"../../capability/transformation/txt_tab_opened.ts":()=>e(()=>import(`./txt_tab_opened-C3h70K0_.js`),__vite__mapDeps([37,6,12])),"../../capability/transformation/xlsx_tab_opened.ts":()=>e(()=>import(`./xlsx_tab_opened-L_l7fzdE.js`),__vite__mapDeps([38,6,12]))}),u=`IfcElementSelectionStatePort`,d=e=>{let[t,n]=e.split(`.`),r=o[n];if(t!==u||r===void 0)throw Error(`Unknown state constant: ${e}`);return r},f=class e{request;etl;static NAME=`ifc_element_selection`;static CAPABILITY_ID_PREFIX=`org.infobim.project.plugin.capability.transformation.target.`;static FINAL_STATE=o.IFC_ELEMENT_SELECTED;active=o.UNDEFINED;constructor(e,t=new a){this.request=e,this.etl=t}canTransitTo(e){let t=c.sequence();return t[t.indexOf(this.active)+1]===e}performStateTransition(e){this.active=e}async execute(){let r=crypto.randomUUID(),i=c.config(),a=c.sequence(),o=e=>{let t=d(e.params.to_state);if(e.type===`handler.can_transit_to`)return()=>this.canTransitTo(t)!==e.negated;if(e.type===`handler.perform_state_transition`)return()=>this.performStateTransition(t);throw Error(`Unknown statechart call: ${e.type}`)},s=n({id:i.id,initial:i.initial,states:Object.fromEntries(Object.entries(i.states).map(([e,t])=>[e,{...t.type?{type:t.type}:{},meta:t.meta,...t.on?{on:{STEP:t.on.STEP.map(e=>({target:e.target,...e.guard?{guard:o(e.guard)}:{},...e.actions?{actions:e.actions.map(e=>o(e))}:{}}))}}:{}}]))}),l=t(s);l.start();try{for(;l.getSnapshot().status!==`done`;){let e=String(l.getSnapshot().value),t=a[a.indexOf(e)+1];if(t===void 0)throw Error(`The statechart has no state after ${e}.`);if(await this.runCapability(r,t),l.send({type:`STEP`}),String(l.getSnapshot().value)===e)throw Error(`The statechart stayed in ${e} after the capability of ${t} ran.`)}}finally{l.stop(),this.etl.clear(e.NAME,r)}return this.active}async runCapability(t,n){let r=`${e.CAPABILITY_ID_PREFIX}${n}`;await new(await(this.capabilityFor(r)))().execute({requestId:t,state:n,etl:this.etl,parameters:{item:this.request.item,x:String(this.request.x),y:String(this.request.y)}})}async capabilityFor(e){for(let t of Object.values(l))for(let n of Object.values(await t())){let t=n?.METADATA;if(typeof n==`function`&&t?.id===e)return n}throw Error(`IFC element selection capability not found: ${e}`)}},p=`presentation.ifc.view.clicked`,m=class{static METADATA={id:`web_on_ifc_view_clicked`,logical_component:`web`,description:`Responds when the user clicks in the 3D view of an IFC tab.`,arguments:[{listen:[p],valued:!0,parameter:`item`,description:`Path of the IFC file whose tab was clicked.`,type:`str`}]};request;constructor(e){this.request=e.payload}async run(){if(!this.request?.item)throw Error(`The click carries no IFC file.`);await new f(this.request).execute()}};export{m as OnIfcViewClicked};