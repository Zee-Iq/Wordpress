import React from "react";
import { Header } from "../Header/Header";
import Login from "../login/Login";
import Sidebar from "../Sidebar/Sidebar";
import FAQ from "../FAQ";

export const Layout = () => {
  return (
    <>
      <Header />

      <Sidebar />
      <FAQ />
    </>
  );
};
