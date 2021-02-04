import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./components/layout/Landing";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Landing />
      </div>
    </Router>
  );
};

export default App;
