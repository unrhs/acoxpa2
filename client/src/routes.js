import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Uikit from "./uikit";
import Register from "./Components/register/Register";
import LogIn from "./Components/LogIn";
import Terms from "./Components/Terms";
import Privacy from "./Components/Privacy";
import Business from "./Components/Business";

const Router = ({ setUser, user }) => (
  <Switch>
    <Route exact path="/" render={props => <Home user={user} {...props} />} />
    <Route
      exact
      path="/register"
      render={props => <Register {...props} setUser={setUser} user={user} />}
    />
    <Route
      exact
      path="/login"
      render={props => <LogIn {...props} setUser={setUser} user={user} />}
    />
    <Route
      exact
      path="/business"
      render={props => <Business user={user} {...props} />}
    />
    <Route
      exact
      path="/terms"
      render={props => <Terms user={user} {...props} />}
    />
    <Route
      exact
      path="/privacy"
      render={props => <Privacy user={user} {...props} />}
    />

    <Route path="/uikit" component={Uikit} />
  </Switch>
);

export default Router;
