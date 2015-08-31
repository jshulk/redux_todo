import React from "react";
import {connect} from 'react-redux';
import {addTodo, completeTodo, setVisibilityFilter, visibilityFilters} from '../actions/todos';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

export default class App extends React.Component{
	render(){
		const { dispatch, visibleTodos, visibilityFilter } = this.props;
		return (
			<div>
				<AddTodo
					onAddClick = {text =>
						dispatch(addTodo(text))
					 } />
				<TodoList
					todos={visibleTodos}
					onTodoClick = {index => dispatch(completeTodo(index))} />
				<Footer
					filter={visibilityFilter}
					onFilterChange = {nextFilter => dispatch(setVisibilityFilter(nextFilter)) } />
			</div>
		);	
	}
}

function selectTodos(todos, visibilityFilter){
	switch(visibilityFilter){
		case visibilityFilters.SHOW_ALL:
			return todos;
		case visibilityFilters.SHOW_COMPLETED:
			return todos.filter( todo => todo.completed );
		case visibilityFilters.SHOW_ACTIVE:
			return todos.filter( todo => !todo.completed );

	}
}

function select(state){
	return {
		visibileTodos: selectTodos(state.todos, state.visibilityFilter),
		visibilityFilter: state.visibilityFilter
	};
}

export default connect(select)(App);