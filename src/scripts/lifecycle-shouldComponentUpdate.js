// filename: lifecycle-shouldComponentUpdate.js
// to view, change this file's name to index.js

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyApp extends Component {
	state = {number: 0}

	shouldComponentUpdate(nextProps, nextState) {
		if (nextState.number === 3) {
			return false
		} else {
			return true
		}
	}

	incrementNumber = () => {
		this.setState({number: this.state.number + 1})
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
		return(
			<div style={myContainer}>
				<div>
					<p>If nextState === 3, number will remain at 2</p>
				</div>
				<button onClick={this.incrementNumber}>Click</button>
				<span>
					{this.state.number}
				</span>
			</div>
		);
	}
}

ReactDOM.render(<MyApp />, document.getElementById('root'));