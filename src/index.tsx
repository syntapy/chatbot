import * as React from "react"
import * as ReactDOM from "react-dom/client"
const index_styles = require('./css/index.css')
const main_styles = require('./css/main.css')

import ChatComponent from './components/ChatComponent'
const styles = require('react-chatbot-kit/build/main.css')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<ChatComponent />
  </React.StrictMode>
)
