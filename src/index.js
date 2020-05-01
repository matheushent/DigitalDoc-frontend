import React from "react";
import ReactDOM from "react-dom";
import App from "./screens";
import CssBaseline from "@material-ui/core/CssBaseline";

// Redux Imports
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import reducers from "./reducers";

// Redux Implementation
const reducer = combineReducers({
  ...reducers
});

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <CssBaseline />
      <App />
    </div>
  </Provider>,
  document.getElementById("root")
);
