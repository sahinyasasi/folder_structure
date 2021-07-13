import React, { useEffect } from "react";
import { Router } from "react-router";
import { Route, Switch, Redirect } from "react-router-dom";
import { render } from "react-dom";
import { history } from "./utils/history";
import { store } from "./utils/store";
import { Provider, useDispatch, useSelector } from "react-redux";
const rootElement = document.getElementById("root");
import Register from "./components/Account/Register";
import Alerts from "./components/Alert";
import "../css/app.css";
import DashBoardLayout from "./components/containers/DashBoardLayout";
import Login from "./components/Account/Login";

import PostAd from "./components/PostAd";

const App = () => {
  return (
    <Router history={history}>
      <div className="container">
        <Alerts />
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <DashBoardLayout>
          <Route exact path="/">
          </Route>
          <Route exact path="/postad">
            <PostAd />

          </Route>
        </DashBoardLayout>

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
