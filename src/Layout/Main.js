import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import PageWrapper from "../Components/PageWrapper";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Shared/Footer/Footer";
import PNavDrawer from "../NavDrawer/PNavDrawer";

const Main = () => {
  const location = useLocation();
  const checkCurrentLocation =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div className="mb-12 " style={{ height: "100vh" }}>
      <div>
        <div className="lg:hidden">
          {checkCurrentLocation || <PNavDrawer></PNavDrawer>}
        </div>
        <div className="hidden lg:flex">
          {checkCurrentLocation || (
            <div className="hidden md:flex">
              <NavigationBar></NavigationBar>
            </div>
          )}
        </div>
      </div>
      <PageWrapper>
        {checkCurrentLocation || (
          <div className="hidden lg:flex">
            <Navbar></Navbar>
          </div>
        )}
        <Outlet></Outlet>
      </PageWrapper>
      {checkCurrentLocation || <Footer></Footer>}
    </div>
  );
};

export default Main;
