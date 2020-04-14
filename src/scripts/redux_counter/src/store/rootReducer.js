import counterReducer from './counterReducer';
import resultReducer from './resultReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
	counterReducer: counterReducer,
	resultReducer: resultReducer
})

export default rootReducer;