import { useState } from 'react'
import './App.css'
import LeftComponent from './body/LeftComponent'
import RightComponent from './body/RightComponent'
import logo from './assets/pokeball.svg'

function App() {

	return (
	<>
		<div className="container">
			<header className="header">
				<img src={logo} alt="Logo" className="logo"/>
				<h1 className="title">PokeAPI</h1>
			</header>
		</div>
		<div className="content">
			<div className="left-div">
				<LeftComponent />
			</div>
			<div className="right-div">
				<RightComponent />
			</div>
    	</div>
	</>
	)
}

export default App
