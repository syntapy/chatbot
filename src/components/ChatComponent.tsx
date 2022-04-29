import * as React from "react"
import Chatbot from 'react-chatbot-kit'
import ChatElement from '../ChatElement'
import 'react-chatbot-kit/build/main.css'

export default class ChatComponent extends React.Component<ChatInterface, {}> {
	constructor(props) {
		super(props)
		this.config=props.config
		this.actionProvider=props.actionProvider
		this.messageParser=props.messageParser
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Chatbot 
						config={this.config} 
						actionProvider={this.actionProvider} 
						messageParser={this.messageParser} />
				</header>
			</div>
		)
	}
}
