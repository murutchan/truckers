import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";

import ShowAlert from "../layout/Alerts";
import Dashboard from "../dashboard/Dashboard";

const Routes = () => {
  return (
    <section className="container">
      <ShowAlert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </section>
  );
};

export default Routes;
