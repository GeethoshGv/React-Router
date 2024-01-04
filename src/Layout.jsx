import React from "react";
import Navigation from "./components/Navbar/Navigation";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./styles/global.scss";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
