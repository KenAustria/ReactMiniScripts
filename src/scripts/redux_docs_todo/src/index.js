import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import todoAppReducer from './store/reducers/todoAppReducer';

const store = createStore(todoAppReducer);

ReactDOM.render(
	<Provider>
		<App store={store} />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();