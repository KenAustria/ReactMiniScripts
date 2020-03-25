// filename: lifecycle-componentDidMount-setState-1.js
// this file must be named index.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyApp extends Component {
	state = {
		name: 'Craig'
	}

	getData = () => {
		this.mySetInterval = setTimeout(() => {
			this.setState({ name: 'David' })
		}, 1500);
	}

	componentDidMount() {
		this.getData();
	}

	componentWillUnmount() {
		setInterval(this.mySetInterval);
	}

	render() {
		const myContainer = {
			maxWidth: '200px',
			margin: '10px auto',
			padding: '10px 0',
			backgroundColor: '#ddd',
			textAlign: 'center',
			border: '1px solid #000'
		};

		return (
			<div style={myContainer}>{this.state.name}</div>
		);
	}
}

ReactDOM.render(<MyApp />, document.getElementById('root'));