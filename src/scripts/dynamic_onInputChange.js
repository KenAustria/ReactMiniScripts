// filename: dynamic_onInputChange.js
// this file must be named index.js
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MyApp extends Component {
	state = {
		foo: "",
		bar: "",
		baz: ""
	}

	onInputChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		const { foo, bar, baz } = this.state;

		return (
			<form>
				<input type="text" name="foo" value={foo} onChange={this.onInputChange} />
				<br />
				<input type="text" name="bar" value={bar} onChange={this.onInputChange} />
				<br />
				<input type="text" name="baz" value={baz} onChange={this.onInputChange} />
			</form>
		);
	}
}

ReactDOM.render(<MyApp />, document.getElementById('root'));