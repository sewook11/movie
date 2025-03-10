import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <NavBar /> 
      <div className="p-4">
        <Outlet /> 
      </div>
    </div>
  );
};

export default Layout;
