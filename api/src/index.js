import React from 'react';
import ReactDOM from 'react-dom';
import redux from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";

const store = createStore(reducer, applyMiddleware(thunk, logger));


ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);


