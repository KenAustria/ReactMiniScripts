// filename: calculator.js
// this file must be named index.js
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Calculator extends Component {
	state = {
		num1: "",
		num2: "",
		result: 0
	}

	setNum1 = (event) => {
		const num1 = event.target.value ? parseInt(event.target.value) : "";
		this.setState({num1});
	}

	setNum2 = (event) => {
		const num2 = event.target.value ? parseInt(event.target.value) : "";
		this.setState({num2});
	}

	addHandler = (event) => {
		event.preventDefault();
		const result = this.state.num1 + this.state.num2;
		this.setState({result});
	}

	subtractHandler = (event) => {
		event.preventDefault();
		const result = this.state.num1 - this.state.num2;
		this.setState({result});
	}

	multiplyHandler = (event) => {
		event.preventDefault();
		const result = this.state.num1 * this.state.num2;
		this.setState({result});
	}

	divideHandler = (event) =>{
		event.preventDefault();
		const result = this.state.num1 / this.state.num2;
		this.setState({result});
	}

	resetHandler = (event) => {
		event.preventDefault();
		this.setState({num1: "", num2: "", result: 0});
	}

	render() {
		const {num1, num2, result} = this.state;
		return (
			<div>
				<div>
					<input type="text" value={num1} onChange={this.setNum1}/>
					<input type="text" value={num2} onChange={this.setNum2}/>
				</div>
				<div>
					<button onClick={this.addHandler}>+</button>
					<button onClick={this.subtractHandler}>-</button>
					<button onClick={this.multiplyHandler}>*</button>
					<button onClick={this.divideHandler}>/</button>
				</div>
				<div>
					{result}
				</div>
				<button onClick={this.resetHandler}>Reset</button>
			</div>
		);
	}
}

ReactDOM.render(<Calculator />, document.getElementById('root'));