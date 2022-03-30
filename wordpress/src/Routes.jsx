import { Route, Switch } from "react-router-dom";
import React from "react";
import { Layout } from "./components/Layout/Layout";
import Login from "./components/login/Login";

export const Routes = () => {
  return <Switch>

    <Route path='/' exact component={Layout} />
    <Route path='/login' exact component={Login} />
    

  </Switch>;
};
