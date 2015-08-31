/* Action Types */
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// OTHER CONSTANTS
export const visibilityFilters = {
	SHOW_All: 'SHOW_All',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};

//Action creators

export function addTodo(text){
	return {
		type: ADD_TODO,
		text: text
	};
}

export function completeTodo(index){
	return {
		type: COMPLETE_TODO,
		index: index
	};
}

export function setVisibilityFilter(filter){
	return {
		type: SET_VISIBILITY_FILTER,
		filter: filter
	};
}