import { Route, Switch } from "react-router-dom";
import React from "react";
import Login from "./components/AdminLogin/AdminLogin";
import Register from "./components/AdminRegister/AdminRegister";
import Sidebar from "./components/AdminSidebar/AdminSidebar";
import FAQ from "./components/AdminFAQ/AdminFAQ"
import Testapp from "./components/Testapp";
import AdminReadingList from "./components/AdminReadingList/AdminReadingList";

export const Routes = () => {
  return <Switch>

   
    <Route path='/adminlogin' exact component={AdminLogin} />
    <Route path='/adminregister' exact component={AdminRegister} />
    <Route path='/adminsidebar' exact component={AdminSidebar} />
    <Route path='/adminfaq' exact component={AdminFAQ} />
    <Route path='/adminfooter' exact component={AdminFooter} />
    <Route path='/testapp' exact component={Testapp} />
    <Route path='/adminreadinglist' exact component={AdminReadingList} />
    

  </Switch>;
};


