import { combineReducers } from "redux";
import {ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, visibilityFilters} from '../actions/todos';
import {SHOW_ALL} from visibilityFilters;

function todos(state = [], action ){
	switch( action.type  ){
		case ADD_TODO:
			return [...state, {text: action.text, completed: false}];
		case COMPLETE_TODO:
		return [
				...state.slice(0, action.index),
				Object.assign({}, state[action.index], {completed: true}),
				...state.slice(action.index + 1)
		];
		default:
		return state;
	}

}

function visibilityFilter(state = SHOW_ALL, action ){
	switch( action.type ){
		case SET_VISIBILITY_FILTER:
			return action.filter;
		default:
		return state;
	}
}

const reducers = combineReducers({
	todos: todos,
	visibilityFilter: visibilityFilter
});

export default reducers;