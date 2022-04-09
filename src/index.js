//As long as we keep this at the top we can use import
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import "./index.css";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import { searchRobots } from "./reducers";
import "tachyons";

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
