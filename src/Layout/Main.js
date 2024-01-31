import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import PageWrapper from "../Components/PageWrapper";
import NavigationBar from "../Components/NavigationBar";

const Main = () =>
{
  const location = useLocation();
  const checkCurrentLocation =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div className="mb-12">
      {checkCurrentLocation || <NavigationBar></NavigationBar>}
      <PageWrapper>
        {checkCurrentLocation || <Navbar></Navbar>}
        <Outlet></Outlet>
      </PageWrapper>
    </div>
  );
};

export default Main;
