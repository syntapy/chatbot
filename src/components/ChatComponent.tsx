import Chatbot from 'react-chatbot-kit'
import ActionProvider from '../ActionProvider'
import MessageParser from '../MessageParser'
import config from '../config'

import * as React from "react"
const styles = require('react-chatbot-kit/build/main.css')

function ChatComponent() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot 
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser} />
      </header>
    </div>
  )
}

export default ChatComponent;
