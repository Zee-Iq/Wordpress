import React from "react";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar"

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Footer />
 
    </div>
  );
};
