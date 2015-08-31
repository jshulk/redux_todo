import React from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from '../reducers';
import App from './app';

const store = createStore(rootReducers)

export default class Root extends React.Component {
	render(){
		return (
			<Provider store = {store}>
				{() => <App />}
			</Provider>
		)
	}
}