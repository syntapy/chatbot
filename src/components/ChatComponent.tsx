import Chatbot from 'react-chatbot-kit'
import ChatInterface from '../ChatInterface'
import 'react-chatbot-kit/build/main.css'
import * as React from "react"

export default class ChatComponent extends React.Component<ChatInterface, {}> {
	config: any
	actionProvider: any
	messageParser: any

	constructor(props: any) {
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
