// filename: splitting_components.js
// this file must be named index.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyApp extends Component {
	state = {
		cars: [
			{id: '123', make: 'Toyota', model: 'Celica'},
			{id: '214', make: 'Nissan', model: 'Altima'},
			{id: '232', make: 'Honda', model: 'Odyssey'}
		]
	}

	render() {
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
	return props.cars.map((car, index) => {
		return (
			<Car
				key={car.index}
				make={car.make}
				model={car.model}
			/>
		)
	})
}

const Car = (props) => {
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