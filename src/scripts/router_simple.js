// filename: router_simple.js
// this file must be named index.js
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route} from 'react-router-dom';

const ComponentOne = () => <h1>Component One</h1>
const ComponentTwo = () => <h1>Component Two</h1>

class MyApp extends Component {
	containerStyle = {
    maxWidth: '300px',
    margin: '10px auto',
    padding: '4px 0',
    backgroundColor: '#ddd',
    textAlign: 'center',
    border: '1px solid #000',
    fontSize: '16px',
    fontFamily: 'Helvetica',
    fontWeight: 'lighter'
  };
	render() {
		return (
			<BrowserRouter>
				<div>
					<div>
						<Link to='/componentOne'>Component One</Link>
					</div>
					<div>
						<Link to='/componentTwo'>Component Two</Link>
					</div>
					<Route path='/componentOne' component={ComponentOne} />
					<Route path='/componentTwo' component={ComponentTwo} />
				</div>
			</BrowserRouter>
		);
	}
}

ReactDOM.render(<MyApp />, document.getElementById('root'));