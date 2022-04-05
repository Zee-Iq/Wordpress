import { Route, Switch } from "react-router-dom";
import React from "react";
import { Layout } from "./components/Layout/Layout";
import Login from "./components/login/Login";
import Register from "./components/RegisterForm/Register";
import Home from "./components/Home/Home";
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQ/FAQ';

export const Routes = () => {
  return <Switch>

    <Route path='/' exact component={Layout} />
    <Route path='/login' exact component={Login} />
    <Route path='/register' exact component={Register} />
    <Route path='/home' exact component={Home} />
    <Route path='/contact' exact component={Contact} />
    <Route path='/FAQ' exact component={FAQ} />
{/* contact */}
  </Switch>;
};


/* test */