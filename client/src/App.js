import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./components/layout/Landing";
import Register from "./components/auth/register";
import "./App.css";
import ShowAlert from "./components/layout/Alerts";

const App = () => {
  return (
    <Router>
      <div>
        <ShowAlert />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
