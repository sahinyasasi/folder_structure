import React, { useEffect } from "react";
import { Router } from "react-router";
import { Route, Switch, Redirect } from "react-router-dom";
import { render } from "react-dom";
import { history } from "./utils/history";
import { store } from "./utils/store";
import { Provider, useDispatch, useSelector } from "react-redux";
const rootElement = document.getElementById("root");
import Register from "./components/user/Register";
import Alerts from "./components/Alert";
import "../css/app.css";

import PostAd from "./components/PostAd";

const App = () => {
  return (
    <Router history={history}>
      <div className="container">
        <Alerts />
        <Route exact path="/postad">
          <PostAd />
        </Route>
        <Route exact path="/">
          <Register />
        </Route>
      </div>
    </Router>
  );
};
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
