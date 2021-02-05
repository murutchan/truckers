import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import "./App.css";
import ShowAlert from "./components/layout/Alerts";
import Dashboard from "./components/dashboard/Dashboard";
import Navigation from "./components/layout/Navigation";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <ShowAlert />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
