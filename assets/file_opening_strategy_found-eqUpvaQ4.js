const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/access_token_recovered-N0Q7ysHQ.js","assets/access-token-CLIkSexa.js","assets/access_token_remembered-CIyMtfrA.js","assets/folder-C9MGXqv7.js","assets/context_initialized-Cd06Lltm.js","assets/command-THxSJB_I.js","assets/event-bus-DF2J4VGH.js","assets/context_parameters_set-BE1PIvfn.js","assets/context-CMYPiSAh.js","assets/rolldown-runtime-COiEfhsA.js","assets/N3Parser-B_R4JZXu.js","assets/csv_tab_opened-CyJSDQQ3.js","assets/file-metadata-CeeWuSbM.js","assets/docx_tab_opened-1BAEOphh.js","assets/dwg_tab_opened-DpZzf_lK.js","assets/dxf_tab_opened-8K06kygy.js","assets/file_metadata_extracted-S4npp3Qn.js","assets/project-repository-BFVnnBAI.js","assets/project-file-CLbrwvEX.js","assets/folder-BHuCeBQc.js","assets/heic_tab_opened-CplcSy5s.js","assets/html_tab_opened-BSyQddHv.js","assets/ifc_element_highlighted-CVcF6tcc.js","assets/ifc-view-repository-CDXubQh2.js","assets/ifc_element_identified-Coj_Rg5e.js","assets/ifc_element_selected-Clengjaq.js","assets/ifc_mesh_picked-DtYpj53p.js","assets/ifc_tab_opened-CWViFHZf.js","assets/ifc_view_found-D_so514I.js","assets/image_tab_opened-D6uj0Zyk.js","assets/md_tab_opened-CkPe14I0.js","assets/pdf_tab_opened-C60h9ufV.js","assets/remote_project_connected-DPuOaydd.js","assets/txt_tab_opened-C3h70K0_.js","assets/xlsx_tab_opened-L_l7fzdE.js"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-helper-BZ1Pz5am.js";import{n as t,t as n}from"./xstate.esm-DgcPd8j5.js";import{t as r}from"./statechart-converter-NGU8bmeG.js";var i=`statechart:
  name: ExplorerFileOpenStrategyChain
  description: >-
    Fallback chain run by FILE_OPENING_STRATEGY_FOUND when no capability is
    registered for the file's extension. The complete topology is declared
    here: the root is parallel and each region is one responsibility, named
    by the id of the capability it runs. The worker only interprets this
    file; it never adds, removes or renames states or regions.

    A responsibility is declared as one region of this shape:

      - name: <responsibility>
        initial: <responsibility>_pending
        states:
          - name: <responsibility>_pending
            transitions:
              - target: <responsibility>_completed
                guard: worker.can_handle('<capability id>')
                action: worker.execute_responsibility('<capability id>')
              - target: <responsibility>_completed
                guard: not worker.can_handle('<capability id>')
          - name: <responsibility>_completed
            type: final

  root state:
    name: explorer_file_open_strategy_chain
    parallel states:
      - name: image
        initial: image_pending
        states:
          - name: image_pending
            transitions:
              - target: image_completed
                guard: worker.can_handle('org.infobim.project.plugin.capability.transformation.strategy.image_tab_opened')
                action: worker.execute_responsibility('org.infobim.project.plugin.capability.transformation.strategy.image_tab_opened')
              - target: image_completed
                guard: not worker.can_handle('org.infobim.project.plugin.capability.transformation.strategy.image_tab_opened')
          - name: image_completed
            type: final
      - name: pdf
        initial: pdf_pending
        states:
          - name: pdf_pending
            transitions:
              - target: pdf_completed
                guard: worker.can_handle('org.infobim.project.plugin.capability.transformation.strategy.pdf_tab_opened')
                action: worker.execute_responsibility('org.infobim.project.plugin.capability.transformation.strategy.pdf_tab_opened')
              - target: pdf_completed
                guard: not worker.can_handle('org.infobim.project.plugin.capability.transformation.strategy.pdf_tab_opened')
          - name: pdf_completed
            type: final
      - name: txt
        initial: txt_pending
        states:
          - name: txt_pending
            transitions:
              - target: txt_completed
                guard: worker.can_handle('org.infobim.project.plugin.capability.transformation.strategy.txt_tab_opened')
                action: worker.execute_responsibility('org.infobim.project.plugin.capability.transformation.strategy.txt_tab_opened')
              - target: txt_completed
                guard: not worker.can_handle('org.infobim.project.plugin.capability.transformation.strategy.txt_tab_opened')
          - name: txt_completed
            type: final
      - name: csv
        initial: csv_pending
        states:
          - name: csv_pending
            transitions:
              - target: csv_completed
                guard: worker.can_handle('org.infobim.project.plugin.capability.transformation.strategy.csv_tab_opened')
                action: worker.execute_responsibility('org.infobim.project.plugin.capability.transformation.strategy.csv_tab_opened')
              - target: csv_completed
                guard: not worker.can_handle('org.infobim.project.plugin.capability.transformation.strategy.csv_tab_opened')
          - name: csv_completed
            type: final
      - name: md
        initial: md_pending
        states:
          - name: md_pending
            transitions:
              - target: md_completed
                guard: worker.can_handle('org.infobim.project.plugin.capability.transformation.strategy.md_tab_opened')
                action: worker.execute_responsibility('org.infobim.project.plugin.capability.transformation.strategy.md_tab_opened')
              - target: md_completed
                guard: not worker.can_handle('org.infobim.project.plugin.capability.transformation.strategy.md_tab_opened')
          - name: md_completed
            type: final
      - name: xlsx
        initial: xlsx_pending
        states:
          - name: xlsx_pending
            transitions:
              - target: xlsx_completed
                guard: worker.can_handle('org.infobim.project.plugin.capability.transformation.strategy.xlsx_tab_opened')
                action: worker.execute_responsibility('org.infobim.project.plugin.capability.transformation.strategy.xlsx_tab_opened')
              - target: xlsx_completed
                guard: not worker.can_handle('org.infobim.project.plugin.capability.transformation.strategy.xlsx_tab_opened')
          - name: xlsx_completed
            type: final
      - name: docx
        initial: docx_pending
        states:
          - name: docx_pending
            transitions:
              - target: docx_completed
                guard: worker.can_handle('org.infobim.project.plugin.capability.transformation.strategy.docx_tab_opened')
                action: worker.execute_responsibility('org.infobim.project.plugin.capability.transformation.strategy.docx_tab_opened')
              - target: docx_completed
                guard: not worker.can_handle('org.infobim.project.plugin.capability.transformation.strategy.docx_tab_opened')
          - name: docx_completed
            type: final
      - name: html
        initial: html_pending
        states:
          - name: html_pending
            transitions:
              - target: html_completed
                guard: worker.can_handle('org.infobim.project.plugin.capability.transformation.strategy.html_tab_opened')
                action: worker.execute_responsibility('org.infobim.project.plugin.capability.transformation.strategy.html_tab_opened')
              - target: html_completed
                guard: not worker.can_handle('org.infobim.project.plugin.capability.transformation.strategy.html_tab_opened')
          - name: html_completed
            type: final
      - name: dxf
        initial: dxf_pending
        states:
          - name: dxf_pending
            transitions:
              - target: dxf_completed
                guard: worker.can_handle('org.infobim.project.plugin.capability.transformation.strategy.dxf_tab_opened')
                action: worker.execute_responsibility('org.infobim.project.plugin.capability.transformation.strategy.dxf_tab_opened')
              - target: dxf_completed
                guard: not worker.can_handle('org.infobim.project.plugin.capability.transformation.strategy.dxf_tab_opened')
          - name: dxf_completed
            type: final
      - name: ifc
        initial: ifc_pending
        states:
          - name: ifc_pending
            transitions:
              - target: ifc_completed
                guard: worker.can_handle('org.infobim.project.plugin.capability.transformation.strategy.ifc_tab_opened')
                action: worker.execute_responsibility('org.infobim.project.plugin.capability.transformation.strategy.ifc_tab_opened')
              - target: ifc_completed
                guard: not worker.can_handle('org.infobim.project.plugin.capability.transformation.strategy.ifc_tab_opened')
          - name: ifc_completed
            type: final
      - name: heic
        initial: heic_pending
        states:
          - name: heic_pending
            transitions:
              - target: heic_completed
                guard: worker.can_handle('org.infobim.project.plugin.capability.transformation.strategy.heic_tab_opened')
                action: worker.execute_responsibility('org.infobim.project.plugin.capability.transformation.strategy.heic_tab_opened')
              - target: heic_completed
                guard: not worker.can_handle('org.infobim.project.plugin.capability.transformation.strategy.heic_tab_opened')
          - name: heic_completed
            type: final
      - name: dwg
        initial: dwg_pending
        states:
          - name: dwg_pending
            transitions:
              - target: dwg_completed
                guard: worker.can_handle('org.infobim.project.plugin.capability.transformation.strategy.dwg_tab_opened')
                action: worker.execute_responsibility('org.infobim.project.plugin.capability.transformation.strategy.dwg_tab_opened')
              - target: dwg_completed
                guard: not worker.can_handle('org.infobim.project.plugin.capability.transformation.strategy.dwg_tab_opened')
          - name: dwg_completed
            type: final
`,a=class{source;candidates;context;handled=[];instances=new Map;constructor(e,t,n){this.source=e,this.candidates=t,this.context=n}async work(){let e=r(this.source),i=[],a=n({id:e.id,type:`parallel`,states:Object.fromEntries(Object.entries(e.regions).map(([e,t])=>[e,{initial:t.initial,states:Object.fromEntries(Object.entries(t.states).map(([e,t])=>[e,{...t.type?{type:t.type}:{},...t.on?{on:{STEP:t.on.STEP.map(e=>({target:e.target,...e.guard?{guard:this.guardOf(e.guard)}:{},...e.actions?{actions:e.actions.map(e=>this.actionOf(e,i))}:{}}))}}:{}}]))}]))}),o=t(a);return o.start(),o.send({type:`STEP`}),await Promise.all(i),o.stop(),this.ensureEveryRegionCompleted(e,o.getSnapshot().value),[...this.handled]}guardOf(e){return()=>this.responsibilityOf(e.params.id).canHandle(this.context)!==e.negated}actionOf(e,t){return()=>{let n=e.params.id;t.push(this.responsibilityOf(n).execute(this.context).then(()=>{this.handled.push(n)}))}}responsibilityOf(e){let t=this.instances.get(e);if(t)return t;let n=this.candidates.find(t=>t.METADATA.id===e);if(!n)throw Error(`Chain declares responsibility '${e}', but no capability has that id.`);let r=new n;return this.instances.set(e,r),r}ensureEveryRegionCompleted(e,t){for(let[n,r]of Object.entries(e.regions)){let i=Object.entries(r.states).find(([,e])=>e.type===`final`)?.[0];if((typeof t==`string`?t:t?.[n])!==i)throw Error(`Chain '${e.id}' is stuck: region '${n}' did not reach its final state.`)}}},o=Object.assign({"./access_token_recovered.ts":()=>e(()=>import(`./access_token_recovered-N0Q7ysHQ.js`),__vite__mapDeps([0,1])),"./access_token_remembered.ts":()=>e(()=>import(`./access_token_remembered-CIyMtfrA.js`),__vite__mapDeps([2,1,3])),"./context_initialized.ts":()=>e(()=>import(`./context_initialized-Cd06Lltm.js`),__vite__mapDeps([4,3,5,6])),"./context_parameters_set.ts":()=>e(()=>import(`./context_parameters_set-BE1PIvfn.js`),__vite__mapDeps([7,3,8,9,10])),"./csv_tab_opened.ts":()=>e(()=>import(`./csv_tab_opened-CyJSDQQ3.js`),__vite__mapDeps([11,6,12])),"./docx_tab_opened.ts":()=>e(()=>import(`./docx_tab_opened-1BAEOphh.js`),__vite__mapDeps([13,6,12])),"./dwg_tab_opened.ts":()=>e(()=>import(`./dwg_tab_opened-DpZzf_lK.js`),__vite__mapDeps([14,6,12])),"./dxf_tab_opened.ts":()=>e(()=>import(`./dxf_tab_opened-8K06kygy.js`),__vite__mapDeps([15,6,12])),"./file_metadata_extracted.ts":()=>e(()=>import(`./file_metadata_extracted-S4npp3Qn.js`),__vite__mapDeps([16,17,6,18])),"./folder.ts":()=>e(()=>import(`./folder-BHuCeBQc.js`),__vite__mapDeps([19,3])),"./heic_tab_opened.ts":()=>e(()=>import(`./heic_tab_opened-CplcSy5s.js`),__vite__mapDeps([20,6,12])),"./html_tab_opened.ts":()=>e(()=>import(`./html_tab_opened-BSyQddHv.js`),__vite__mapDeps([21,6,12])),"./ifc_element_highlighted.ts":()=>e(()=>import(`./ifc_element_highlighted-CVcF6tcc.js`),__vite__mapDeps([22,23])),"./ifc_element_identified.ts":()=>e(()=>import(`./ifc_element_identified-Coj_Rg5e.js`),__vite__mapDeps([24,23])),"./ifc_element_selected.ts":()=>e(()=>import(`./ifc_element_selected-Clengjaq.js`),__vite__mapDeps([25,6])),"./ifc_mesh_picked.ts":()=>e(()=>import(`./ifc_mesh_picked-DtYpj53p.js`),__vite__mapDeps([26,23])),"./ifc_tab_opened.ts":()=>e(()=>import(`./ifc_tab_opened-CWViFHZf.js`),__vite__mapDeps([27,6,12])),"./ifc_view_found.ts":()=>e(()=>import(`./ifc_view_found-D_so514I.js`),__vite__mapDeps([28,23])),"./image_tab_opened.ts":()=>e(()=>import(`./image_tab_opened-D6uj0Zyk.js`),__vite__mapDeps([29,6,12])),"./md_tab_opened.ts":()=>e(()=>import(`./md_tab_opened-CkPe14I0.js`),__vite__mapDeps([30,6,12])),"./pdf_tab_opened.ts":()=>e(()=>import(`./pdf_tab_opened-C60h9ufV.js`),__vite__mapDeps([31,6,12])),"./remote_project_connected.ts":()=>e(()=>import(`./remote_project_connected-DPuOaydd.js`),__vite__mapDeps([32,3,5,6])),"./temporary_folder_available.ts":()=>e(()=>import(`./temporary_folder_available-DwI6nn7L.js`),[]),"./txt_tab_opened.ts":()=>e(()=>import(`./txt_tab_opened-C3h70K0_.js`),__vite__mapDeps([33,6,12])),"./xlsx_tab_opened.ts":()=>e(()=>import(`./xlsx_tab_opened-L_l7fzdE.js`),__vite__mapDeps([34,6,12]))}),s=class{static METADATA={id:`org.infobim.project.plugin.capability.transformation.target.file_opening_strategy_found`,description:`Determine how the activated file should be opened.`};async execute(e){let t=await new a(i,await this.chainCandidates(),e).work();e.etl.write(`explorer_file_open`,e.requestId,e.state,{phase:`done`,entity:{},result:{handled:t}})}async chainCandidates(){let e=[];for(let t of Object.values(o))for(let n of Object.values(await t()))typeof n==`function`&&typeof n.prototype?.canHandle==`function`&&e.push(n);return e}};export{s as FileOpeningStrategyFoundCapability};