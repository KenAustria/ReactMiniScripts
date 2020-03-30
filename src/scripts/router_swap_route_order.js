// filename: router_swap_route_order.js
// this file must be named index.js
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

const myContainer = {
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

const myList = { 
	padding: '0',
	listStyle: 'none' 
};

const Home = () => {
	return (
		<>
			<ul style={myList}>
				<li>
					<Link to='/pageone'>Page One</Link>
				</li>
				<li>
					<Link to='/pagetwo'>Page Two</Link>
				</li>
			</ul>
			<h1>Home</h1>
		</>
	)
}

const PageOne = () => {
	return (
		<>
			<ul style={myList}>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/pagetwo'>Page Two</Link>
				</li>
			</ul>
			<h1>Page One</h1>
		</>
	)
}

const PageTwo = () => {
	return (
		<>
			<ul style={myList}>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/pageone'>Page One</Link>
				</li>
			</ul>
			<h1>Page Two</h1>
		</>
	)
}

ReactDOM.render(
	<BrowserRouter>
		<div style={myContainer}>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/pageone' component={PageOne} />
				<Route path='/pagetwo' component={PageTwo }/>
			</Switch>
		</div>
	</BrowserRouter>,
	document.getElementById('root')
);