import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import {initialState} from './Redux/data/dataReducer'
import persistState from "redux-localstorage";
import dataReducer from "./Redux/data/dataReducer";
import App from "./App"

const enhancer = compose(persistState(), applyMiddleware(thunk, logger));

const store = createStore(dataReducer, initialState, enhancer);


ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);


