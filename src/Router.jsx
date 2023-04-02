import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Homepage
import Homepage from "./Homepage/Homepage";
// Authentication
// import Login from "./auth/Login";
// import LostPassword from "./auth/LostPassword";

function router() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        {/* Authentication */}
        {/* <Route exact path="/login" component={Login} />
        <Route exact path="/esqueci-senha" component={LostPassword} /> */}
        {/* <Route path="/esqueci-senha" component={Login} /> */}
      </Switch>
    </Router>
  );
}

export default router;
