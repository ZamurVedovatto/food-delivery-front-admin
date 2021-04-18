import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';
import tokenStore from './tokenStore';
import agent from './agent';

const token = tokenStore.getToken();

if (token) {
	agent.setToken(token);
}

let store = configureStore(token);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
