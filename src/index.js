import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "assets/styles/styles.css";
import "assets/css/demo.css";
import App from "./views/App";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./reducers/reducers_root";
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.getElementById("root"),
);
