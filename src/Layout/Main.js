import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import PageWrapper from "../Components/PageWrapper";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Shared/Footer/Footer";

const Main = () =>
{
  const location = useLocation();
  const checkCurrentLocation =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div className="mb-12" style={{height: "100vh"}}>
      {checkCurrentLocation || <NavigationBar></NavigationBar>}
      <PageWrapper>
        {checkCurrentLocation || <Navbar></Navbar>}
        <Outlet></Outlet>
      </PageWrapper>
      {checkCurrentLocation || <Footer></Footer>}
    </div>
  );
};

export default Main;
