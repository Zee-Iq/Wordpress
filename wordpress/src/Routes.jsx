import { Route, Switch } from "react-router-dom";
import React from "react";
import { Layout } from "./components/Layout/Layout";
import Login from "./components/login/Login";
import Register from "./components/RegisterForm/Register";

export const Routes = () => {
  return <Switch>

    <Route path='/' exact component={Layout} />
    <Route path='/login' exact component={Login} />
    <Route path='/register' exact component={Register} />
    

  </Switch>;
};
