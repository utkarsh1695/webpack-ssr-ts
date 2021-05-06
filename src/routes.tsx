import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";

export default () => (
  <Switch>
    <Route exact path="/home" component={Home} />
    <Route exact path="/about-us" component={AboutUs} />
  </Switch>
)