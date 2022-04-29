import * as React from "react"
import * as ReactDOM from "react-dom"
import ChatComponent from './components/ChatComponent'

import ActionProvider from './ActionProvider'
import MessageParser from './MessageParser'
import config from './config'

ReactDOM.render(
	<div>
		<h1>Say hello</h1>
		<ChatComponent
			actionProvider={ActionProvider}
			messageParser={MessageParser}
			config={config} />
	</div>,
	document.getElementById("root")
)
