import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store-redux";
import "./index.css";
import Display from "./components/Display";

const rerender = (store) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <Route path="/" render={() => <Display />} />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerender(store);
