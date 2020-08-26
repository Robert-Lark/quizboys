import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./Redux/rootReducer"
import App from "./App"


const store = createStore(rootReducer, applyMiddleware(thunk, logger));


ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);


