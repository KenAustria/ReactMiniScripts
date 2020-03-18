// filename: splitting_components.js
// this file must be named index.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyApp extends Component {
	constructor(props) {
		super(props);
		console.log('1 [App.js] constructor');
	}

	state = {
		cars: [
			{id: '123', make: 'Toyota', model: 'Celica'},
			{id: '214', make: 'Nissan', model: 'Altima'},
			{id: '232', make: 'Honda', model: 'Odyssey'}
		]
	}

	static getDerivedStateFromProps(props, state) {
		console.log('2 [App.js] getDerivedStateFromProps', props);
		return state;
	}
	
	componentDidMount() {
		console.log('6 [App] componentDidMount');
	}

	componentWillUnmount() {
		console.log('7 [App] componentWillUnmount');
	}

	render() {
		console.log('3 [App.js] render');
		let cars;
		if (this.state.cars) {
			cars = (
				<Cars cars={this.state.cars} />
			)
		}
		return (
			<div>
				{cars}
			</div>
		)
	}
}

const Cars = (props) => {
	return props.cars.map((car, id) => {
		console.log('4 [Cars]')
		return (
			<Car
				key={car.id}
				make={car.make}
				model={car.model}
			/>
		)
	})
}

const Car = (props) => {
	console.log('5 [Car]');
	return (
		<div style={carStyles}>
			<p>I am a {props.make} {props.model}</p>
		</div>
	)
}

const carStyles = {
	width: '60%',
	margin: '16px auto',
	border: '1px solid #eee',
	boxShadow: '0 2px 3px #ccc',
	padding: '16px',
	textAlign: 'center'
}

ReactDOM.render(<MyApp />, document.getElementById('root'));