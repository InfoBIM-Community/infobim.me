const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/dwg_tab_opened-DitH7ncH.js","assets/event-bus-DF2J4VGH.js","assets/file-metadata-CeeWuSbM.js","assets/dxf_tab_opened-BI17nPMU.js","assets/ifc_element_highlighted-Cxxc3BUU.js","assets/ifc-view-repository-CDXubQh2.js","assets/ifc_element_identified-D0Uf2Kkd.js","assets/ifc_element_selected-B1Z9T2VC.js","assets/ifc_mesh_picked-Cq6G2pO_.js","assets/ifc_tab_opened-ddC9C-dX.js","assets/ifc_view_found-DETc3VEY.js"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-helper-BZ1Pz5am.js";import{n as t,t as n}from"./xstate.esm-DgcPd8j5.js";import{t as r}from"./etl-32fpJKfx.js";import{n as i,r as a}from"./statechart-converter-C6wOTqeh.js";var o={UNDEFINED:`undefined`,IFC_VIEW_FOUND:`ifc_view_found`,IFC_MESH_PICKED:`ifc_mesh_picked`,IFC_ELEMENT_IDENTIFIED:`ifc_element_identified`,IFC_ELEMENT_HIGHLIGHTED:`ifc_element_highlighted`,IFC_ELEMENT_SELECTED:`ifc_element_selected`},s=`statechart:
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
`,c=class e{static config(){return i(s)}static sequence(){return a(e.config())}},l=Object.assign({"../../capability/transformation/dwg_tab_opened.ts":()=>e(()=>import(`./dwg_tab_opened-DitH7ncH.js`),__vite__mapDeps([0,1,2])),"../../capability/transformation/dxf_tab_opened.ts":()=>e(()=>import(`./dxf_tab_opened-BI17nPMU.js`),__vite__mapDeps([3,1,2])),"../../capability/transformation/ifc_element_highlighted.ts":()=>e(()=>import(`./ifc_element_highlighted-Cxxc3BUU.js`),__vite__mapDeps([4,5])),"../../capability/transformation/ifc_element_identified.ts":()=>e(()=>import(`./ifc_element_identified-D0Uf2Kkd.js`),__vite__mapDeps([6,5])),"../../capability/transformation/ifc_element_selected.ts":()=>e(()=>import(`./ifc_element_selected-B1Z9T2VC.js`),__vite__mapDeps([7,1])),"../../capability/transformation/ifc_mesh_picked.ts":()=>e(()=>import(`./ifc_mesh_picked-Cq6G2pO_.js`),__vite__mapDeps([8,5])),"../../capability/transformation/ifc_tab_opened.ts":()=>e(()=>import(`./ifc_tab_opened-ddC9C-dX.js`),__vite__mapDeps([9,1,2])),"../../capability/transformation/ifc_view_found.ts":()=>e(()=>import(`./ifc_view_found-DETc3VEY.js`),__vite__mapDeps([10,5]))}),u=`IfcElementSelectionStatePort`,d=e=>{let[t,n]=e.split(`.`),r=o[n];if(t!==u||r===void 0)throw Error(`Unknown state constant: ${e}`);return r},f=class e{request;etl;static NAME=`ifc_element_selection`;static CAPABILITY_ID_PREFIX=`org.infobim.plugin.capability.transformation.target.`;static FINAL_STATE=o.IFC_ELEMENT_SELECTED;active=o.UNDEFINED;constructor(e,t=new r){this.request=e,this.etl=t}canTransitTo(e){let t=c.sequence();return t[t.indexOf(this.active)+1]===e}performStateTransition(e){this.active=e}async execute(){let r=crypto.randomUUID(),i=c.config(),a=c.sequence(),o=e=>{let t=d(e.params.to_state);if(e.type===`handler.can_transit_to`)return()=>this.canTransitTo(t)!==e.negated;if(e.type===`handler.perform_state_transition`)return()=>this.performStateTransition(t);throw Error(`Unknown statechart call: ${e.type}`)},s=n({id:i.id,initial:i.initial,states:Object.fromEntries(Object.entries(i.states).map(([e,t])=>[e,{...t.type?{type:t.type}:{},meta:t.meta,...t.on?{on:{STEP:t.on.STEP.map(e=>({target:e.target,...e.guard?{guard:o(e.guard)}:{},...e.actions?{actions:e.actions.map(e=>o(e))}:{}}))}}:{}}]))}),l=t(s);l.start();try{for(;l.getSnapshot().status!==`done`;){let e=String(l.getSnapshot().value),t=a[a.indexOf(e)+1];if(t===void 0)throw Error(`The statechart has no state after ${e}.`);if(await this.runCapability(r,t),l.send({type:`STEP`}),String(l.getSnapshot().value)===e)throw Error(`The statechart stayed in ${e} after the capability of ${t} ran.`)}}finally{l.stop(),this.etl.clear(e.NAME,r)}return this.active}async runCapability(t,n){let r=`${e.CAPABILITY_ID_PREFIX}${n}`;await new(await(this.capabilityFor(r)))().execute({requestId:t,state:n,etl:this.etl,parameters:{item:this.request.item,x:String(this.request.x),y:String(this.request.y)}})}async capabilityFor(e){for(let t of Object.values(l))for(let n of Object.values(await t())){let t=n?.METADATA;if(typeof n==`function`&&t?.id===e)return n}throw Error(`IFC element selection capability not found: ${e}`)}},p=`presentation.ifc.view.clicked`,m=class{static METADATA={id:`org_infobim_on_ifc_view_clicked`,logical_component:`org_infobim`,description:`Responds when the user clicks in the 3D view of an IFC tab.`,arguments:[{listen:[p],valued:!0,parameter:`item`,description:`Path of the IFC file whose tab was clicked.`,type:`str`}]};request;constructor(e){this.request=e.payload}async run(){if(!this.request?.item)throw Error(`The click carries no IFC file.`);await new f(this.request).execute()}};export{m as OnIfcViewClicked};