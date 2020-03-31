// filename: router_props_match_url.js
// rename index.js when using
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

const myListStyle = { padding: '0', listStyle: 'none' };
const Home = () => <h1>Home</h1>
const SubPageOne = () => <h1>Sub Page One</h1>
const SubPageTwo = () => <h1>Sub Page Two</h1>

const PageOne = props => {
	return (
		<>
			<h1>Page One</h1>
			<MyRouter {...props} />
		</>
	)	
}

const PageTwo = props => {
	return (
		<>
			<h1>Page Two</h1>
			<MyRouter {...props} />
		</>
	);
}

const MyRouter = (props) => {
	return (
		<BrowserRouter>
			<div>
				<ul style={myListStyle}>
					<li>
						<Link to={props.match.url + '/subpageone'} >Sub Page One</Link>
					</li>
					<li>
						<Link to={props.match.url + '/subpagetwo'}>Sub Page Two</Link>
					</li>
				</ul>
					<Route path={props.match.url + '/subpageone'} component={SubPageOne} />
					<Route path={props.match.url + '/subpagetwo'} component={SubPageTwo} />
			</div>
		</BrowserRouter>
	);
}

const MyApp = () => {
	const containerStyle = {
    maxWidth: '300px',
    margin: '10px auto',
    padding: '4px 0',
    backgroundColor: '#ddd',
    textAlign: 'center',
    border: '1px solid #000'
  };
	return (
		<BrowserRouter>
			<div style={containerStyle}>
				<ul style={myListStyle}>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/pageone'>PageOne</Link>
					</li>
					<li>
						<Link to='/pagetwo'>PageTwo</Link>
					</li>
				</ul>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/pageone' component={PageOne} />
					<Route path='/pagetwo' component={PageTwo} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};
ReactDOM.render(<MyApp />, document.getElementById('root'));
