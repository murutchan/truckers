import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Register from "../auth/Register";
import Login from "../auth/Login";
import ShowAlert from "../layout/Alerts";
import Dashboard from "../dashboard/Dashboard";
import RegisterCompany from "../dashboard/RegisterCompany";
import EditCompany from "../dashboard/RegisterCompany";
import Companies from "../company/Companies";

const Routes = () => {
  return (
    <section className="container">
      <ShowAlert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/companies" component={Companies} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute
          exact
          path="/registerCompany"
          component={RegisterCompany}
        />
        <PrivateRoute exact path="/editCompany" component={EditCompany} />
      </Switch>
    </section>
  );
};

export default Routes;
