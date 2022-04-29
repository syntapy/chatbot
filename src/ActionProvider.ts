// ActionProvider starter code
class ActionProvider {
   constructor(
    createChatBotMessage: any,
    setStateFunc: any,
    createClientMessage: any,
    stateRef: any,
    createCustomMessage: any,
    ...rest: any[]
  ) {
    this.createChatBotMessage:any = createChatBotMessage;
    this.setState:any = setStateFunc;
    this.createClientMessage:any = createClientMessage;
    this.stateRef:any = stateRef;
    this.createCustomMessage:any = createCustomMessage;
  }
}

export default ActionProvider;
