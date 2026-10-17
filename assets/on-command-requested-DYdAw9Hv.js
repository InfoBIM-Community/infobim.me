const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/command_received-BqTmRvhE.js","assets/command-execution-DQAjQ7Fc.js","assets/command_runnable_on_pyodide-DrgsjqUl.js","assets/project-repository-BFVnnBAI.js","assets/event-bus-DF2J4VGH.js","assets/command-THxSJB_I.js"])))=>i.map(i=>d[i]);
import{t as e}from"./preload-helper-BZ1Pz5am.js";import{t}from"./event-bus-DF2J4VGH.js";import{n,t as r}from"./xstate.esm-DgcPd8j5.js";import{n as i}from"./statechart-converter-NGU8bmeG.js";import{t as a}from"./etl-32fpJKfx.js";import{t as o}from"./command-execution-DQAjQ7Fc.js";var s={UNDEFINED:`undefined`,COMMAND_RECEIVED:`command_received`,COMMAND_RUNNABLE_ON_PYODIDE:`command_runnable_on_pyodide`,COMMAND_FINISHED_SUCCESSFULLY:`command_finished_successfully`,COMMAND_FINISHED_WITH_FAILURE:`command_finished_with_failure`},c=`statechart:
  name: StandardLocalCommandExecution
  description: "Statechart for running a requested command in the Python runtime of the browser."

  root state:
    name: standard_local_command_execution
    initial: undefined

    states:
      - name: undefined
        label:
          en: "Undefined"
          pt-br: "Indefinido"
        description:
          en: "Initial state before the command was received."
          pt-br: "Estado inicial antes de o comando ser recebido."
        transitions:
          - target: command_received
            guard: handler.can_transit_to(to_state = LocalCommandExecutionStatePort.COMMAND_RECEIVED)
            action: handler.perform_state_transition(to_state = LocalCommandExecutionStatePort.COMMAND_RECEIVED)

      - name: command_received
        label:
          en: "Command Received"
          pt-br: "Comando Recebido"
        description:
          en: "The command was accepted: it is an InfoBIM command and can be run."
          pt-br: "O comando foi aceito: é um comando do InfoBIM e pode ser executado."
        transitions:
          - target: command_runnable_on_pyodide
            guard: handler.can_transit_to(to_state = LocalCommandExecutionStatePort.COMMAND_RUNNABLE_ON_PYODIDE)
            action: handler.perform_state_transition(to_state = LocalCommandExecutionStatePort.COMMAND_RUNNABLE_ON_PYODIDE)

      - name: command_runnable_on_pyodide
        label:
          en: "Command Runnable On Pyodide"
          pt-br: "Comando Executável no Pyodide"
        description:
          en: "The command ran in the Python runtime and its response was recorded, without being analyzed."
          pt-br: "O comando rodou no Python do navegador e a resposta foi registrada, sem ser analisada."
        transitions:
          - target: command_finished_successfully
            guard: handler.result_succeeded()
            action: handler.perform_state_transition(to_state = LocalCommandExecutionStatePort.COMMAND_FINISHED_SUCCESSFULLY)
          - target: command_finished_with_failure
            guard: not handler.result_succeeded()
            action: handler.perform_state_transition(to_state = LocalCommandExecutionStatePort.COMMAND_FINISHED_WITH_FAILURE)

      - name: command_finished_successfully
        label:
          en: "Command Finished Successfully"
          pt-br: "Comando Concluído com Sucesso"
        description:
          en: "The recorded result says the command worked."
          pt-br: "O resultado registrado diz que o comando funcionou."
        type: final

      - name: command_finished_with_failure
        label:
          en: "Command Finished With Failure"
          pt-br: "Comando Concluído com Falha"
        description:
          en: "The recorded result says the command did not work."
          pt-br: "O resultado registrado diz que o comando não funcionou."
        type: final
`,l=class{static config(){return i(c)}},u=Object.assign({"../../capability/transformation/command_received.ts":()=>e(()=>import(`./command_received-BqTmRvhE.js`),__vite__mapDeps([0,1])),"../../capability/transformation/command_runnable_on_pyodide.ts":()=>e(()=>import(`./command_runnable_on_pyodide-DrgsjqUl.js`),__vite__mapDeps([2,3,4,5]))}),d=`LocalCommandExecutionStatePort`,f=e=>{let[t,n]=e.split(`.`),r=s[n];if(t!==d||r===void 0)throw Error(`Unknown state constant: ${e}`);return r},p=class e{request;etl;static NAME=`local_command_execution`;static CAPABILITY_ID_PREFIX=`org.infobim.run.plugin.capability.transformation.target.`;active=s.UNDEFINED;requestId=``;constructor(e,t=new a){this.request=e,this.etl=t}canTransitTo(e){return(l.config().states[this.active]?.on?.STEP??[]).some(t=>t.target===e)}performStateTransition(e){this.active=e}resultSucceeded(){return this.resultOf()?.success===!0}async execute(){this.requestId=crypto.randomUUID();let t=l.config(),i=e=>{if(e.type===`handler.result_succeeded`)return()=>this.resultSucceeded()!==e.negated;let t=f(e.params.to_state);if(e.type===`handler.can_transit_to`)return()=>this.canTransitTo(t)!==e.negated;if(e.type===`handler.perform_state_transition`)return()=>this.performStateTransition(t);throw Error(`Unknown statechart call: ${e.type}`)},a=r({id:t.id,initial:t.initial,states:Object.fromEntries(Object.entries(t.states).map(([e,t])=>[e,{...t.type?{type:t.type}:{},meta:t.meta,...t.on?{on:{STEP:t.on.STEP.map(e=>({target:e.target,...e.guard?{guard:i(e.guard)}:{},...e.actions?{actions:e.actions.map(e=>i(e))}:{}}))}}:{}}]))}),o=n(a);o.start();try{for(;o.getSnapshot().status!==`done`;){let e=String(o.getSnapshot().value),n=(t.states[e]?.on?.STEP??[]).find(e=>!e.guard||i(e.guard)()===!0)?.target;if(n===void 0)throw Error(`The statechart has no way out of ${e}.`);if(t.states[n]?.type!==`final`&&await this.runCapability(n),o.send({type:`STEP`}),String(o.getSnapshot().value)===e)throw Error(`The statechart stayed in ${e} when it should have entered ${n}.`)}let e=this.resultOf();if(!e)throw Error(`The command finished without leaving a result.`);return{state:this.active,result:e}}finally{o.stop(),this.etl.clear(e.NAME,this.requestId)}}resultOf(){return this.etl.read(e.NAME,this.requestId,s.COMMAND_RUNNABLE_ON_PYODIDE)?.result}async runCapability(t){let n=`${e.CAPABILITY_ID_PREFIX}${t}`;await new(await(this.capabilityFor(n)))().execute({requestId:this.requestId,state:t,etl:this.etl,parameters:{requestId:this.request.requestId,command:this.request.command}})}async capabilityFor(e){for(let t of Object.values(u))for(let n of Object.values(await t())){let t=n?.METADATA;if(typeof n==`function`&&t?.id===e)return n}throw Error(`Local command execution capability not found: ${e}`)}},m=`presentation.main.command.requested`,h=`run_on_command_requested`,g=class{static METADATA={id:h,logical_component:`run`,description:`Runs a requested InfoBIM command in the Python runtime and publishes its result.`,arguments:[{listen:[m],valued:!0,parameter:`command`,description:`The command to run, such as "infobim project --refresh".`,type:`str`}]};request;constructor(e){this.request=e.payload}async run(){let e=this.request;if(!e?.requestId)throw Error(`The command request has no requestId.`);try{let{state:n,result:r}=await new p(e).execute();n===s.COMMAND_FINISHED_SUCCESSFULLY?t.publish(`presentation.main.code.success`,h,{requestId:e.requestId,result:r}):t.publish(`presentation.main.code.failure`,h,{requestId:e.requestId,result:r,message:`The command exited with code ${r.code}.`})}catch(n){if(n instanceof o){t.publish(`presentation.main.command.invalid`,h,{requestId:e.requestId,reason:n.reason});return}t.publish(`presentation.main.code.failure`,h,{requestId:e.requestId,result:null,message:n instanceof Error?n.message:String(n)})}}};export{g as OnCommandRequested};