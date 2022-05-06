import * as React from "react"
import * as ReactDOM from "react-dom/client"
const font_styles = require('./css/font.sass')
const main_styles = require('./css/main.sass')
const color_styles = require('./css/color.sass')

//const key = require('../.apikey')
//import apikey from "apikey"
//console.log(key)

import ChatComponent from './components/ChatComponent'
const styles = require('react-chatbot-kit/build/main.css')

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderChat() {
  root.render(
    <React.StrictMode>
      <ChatComponent />
    </React.StrictMode>
  )
}

//function renderApiKeyUpload() {
//  root.render
//}

renderChat()
