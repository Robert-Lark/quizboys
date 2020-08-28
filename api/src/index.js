import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import dataReducer from "./Redux/data/dataReducer";
import App from "./App"


const store = createStore(dataReducer, applyMiddleware(thunk, logger));


ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);


