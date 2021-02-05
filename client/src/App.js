import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import { loadUser } from "./actions/auth";
import { LOGOUT } from "./actions/types";
import setAuthToken from "./utils/setAuthToken";

import Routes from "./components/routing/Routes";
import Landing from "./components/layout/Landing";
import Navigation from "./components/layout/Navigation";
import "./App.css";

const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Router>
      <Fragment>
        <Navigation />
      </Fragment>

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route component={Routes} />
      </Switch>
    </Router>
  );
};

export default App;
