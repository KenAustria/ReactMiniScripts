import {combineReducers} from 'redux';
import todosReducer from './todosReducer';
import visibilityFilterReducer from './visibilityFilterReducer';

// root reducer
const todoAppReducer = combineReducers({
	todosReducer,
	visibilityFilterReducer
})

export default todoAppReducer;