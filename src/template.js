// filename: foo-bar-baz.js
// this file must be named index.js
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//========================================================================
const MyComponent = props => {
	return (
		<div>
		</div>
	);
};
//========================================================================
class MyApp extends Component {
  // state
//------------------------------------------------------------------------
	// styled-components or inline styles
//------------------------------------------------------------------------
    render () {
			return (
				<div></div>
			);
    }
}
ReactDOM.render(<MyApp />, document.getElementById('root'));