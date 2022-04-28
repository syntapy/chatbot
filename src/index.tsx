import * as React from "react"
import * as ReactDOM from "react-dom"
import FirstComponent from './components/FirstComponent'
import UserComponent from './components/UserComponent'
ReactDOM.render(
	<div>
		<h1>Hello, Welcom to React and Typescript</h1>
		<FirstComponent/>
		<UserComponent name="Soot" age={2.5} address="New York City Sewers, Region 5, district 2" dob="Oct 30 2020" />
	</div>,
	document.getElementById("root")
)
