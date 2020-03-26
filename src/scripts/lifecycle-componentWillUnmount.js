// filename: lifecycle-componentWillUnmount-setState-1.js
// this file must be named index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class ComponentOne extends Component {
	state = {text: 'Component One'}

	componentDidUnmount() {
		alert('Component One has unmounted.')
	}

	componentWillUnmount() {
		alert(" componentWillUnmount invoked \n Component One was unmounted");
	}

	render() {
		const myContainer = {
			marginBottom: '10px',
			padding: '6px',
			backgroundColor: '#0000FF',
			borderBottom: '1px solid #000'
		}
		return (
			<div style={myContainer}>
				{this.state.text}
			</div>
		)
	}
}
//======================================================================================
const ComponentTwo = () => (
  <div
    style={{
      marginBottom: '10px',
			padding: '6px',
			backgroundColor: '#FF8C00',
			borderBottom: '1px solid #000'
    }}
  >
    Component Two
  </div>
);
//======================================================================================
class MyApp extends Component {
	state = {currentComponent: true}

	componentDidMount() {
		this.mySetInterval = setTimeout(() => {
			this.setState({currentComponent: false});
		}, 1500);
	}

	componentDidUnMount() {
		clearInterval(this.mySetInterval);
	}

	render() {
		const myContainer = {
			maxWidth: '420px',
			margin: '10px auto',
			padding: '10px 0',
			backgroundColor: '#00FFFF',
			textAlign: 'center',
			border: '1px solid #000',
			fontSize: '16px',
			fontFamily: 'Helvetica',
			fontWeight: 'lighter'
		}
		return (
			<div style={myContainer}>
				{this.state.currentComponent ? <ComponentOne/> : <ComponentTwo/>}
			</div>
		)
	}
}

ReactDOM.render(<MyApp />, document.getElementById('root'));