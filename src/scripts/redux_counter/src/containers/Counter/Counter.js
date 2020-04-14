import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
	render () {
		return (
			<div>
				<CounterOutput value={this.props.counter} />
				<CounterControl label='Increment' clicked={this.props.onIncrement} />
				<CounterControl label='Decrement' clicked={this.props.onDecrement} />
				<CounterControl label='Add 5' clicked={this.props.onAdd} />
				<CounterControl label='Subtract 5' clicked={this.props.onSubtract} />
				<hr />
				<button onClick={() => this.props.onStoreResult(this.props.counter)}>Store Result</button>
				<ul>
					{this.props.results.map(result => (
						<li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
					))}
				</ul>
			</div>
			
		);
	}
}

const mapStateToProps = state => {
	return {
		counter: state.counterReducer.counter,
		results: state.resultReducer.results
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onIncrement: () => dispatch({type: actionTypes.INCREMENT}),
		onDecrement: () => dispatch({type: actionTypes.DECREMENT}),
		onAdd: () => dispatch({type: actionTypes.ADD, value: 5}),
		onSubtract: () => dispatch({type: actionTypes.SUBTRACT, value: 5}),
		onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
		onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);