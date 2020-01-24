import React, {Component} from 'react';

class AutocompleteWidget extends Component {
	state = {
		inputVal: ''
	}

	inputChangeHandler = (event) => {
		this.setState({inputVal: event.target.value});
	}

	getMatchesHandler = () => {
		const matchesArr = []

		if (this.state.inputVal.length === 0) {
			return this.props.names
		}

		this.props.names.forEach(name => {
			const sub = name.slice(0, this.state.inputVal.length);
			if (this.state.inputVal.toLowerCase() === sub.toLowerCase()) {
				matchesArr.push(name);
			}
		});

		if (matchesArr.length === 0) {
			matchesArr.push('No matches');
		}

		return matchesArr;
	}

	render() {
		const results = this.getMatchesHandler().map((result, index) => {
			return (
				<li>
					{result}
				</li>
			);
		});
		return(
			<div>
				<h1>Autocomplete</h1>
				<div className="auto">
					<input type="text" onChange={this.inputChangeHandler} value={this.state.inputVal} placeholder="Search.." />
					<li>
						<ul>{results}</ul>
					</li>
				</div>
			</div>
		);
	}
}

export default AutocompleteWidget;