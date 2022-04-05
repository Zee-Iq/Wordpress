import { Route, Switch } from "react-router-dom";
import React from "react";
import { Layout } from "./components/Layout/Layout";
import Login from "./components/login/Login";
import Register from "./components/RegisterForm/Register";
import Sidebar from "./components/Sidebar/Sidebar";
import FAQ from "../src/components/FAQ";

export const Routes = () => {
  return <Switch>

    <Route path='/' exact component={Layout} />
    <Route path='/login' exact component={Login} />
    <Route path='/register' exact component={Register} />
    <Route path='/sidebar' exact component={Sidebar} />
    <Route path='/faq' exact component={FAQ} />
    <Route path='/readinglist' exact component={ReadingList} />
    

  </Switch>;
};


/* test */