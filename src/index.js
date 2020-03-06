import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./store/store";

const globalStore = store({});

ReactDOM.render(
  <Provider store={globalStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
