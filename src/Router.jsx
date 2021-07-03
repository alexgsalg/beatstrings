import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Homepage
import Homepage from "./Homepage/Homepage";
// Authentication
import Login from "./auth/Login";

function router() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Homepage} />
        {/* Authentication */}
        <Route path="/login" component={Login} />
        {/* <Route path="/esqueci-senha" component={Login} /> */}
      </Switch>
    </Router>
  );
}

export default router;
