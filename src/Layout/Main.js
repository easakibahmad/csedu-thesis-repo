import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import PageWrapper from "../Components/PageWrapper";
import NavigationBar from "../Components/NavigationBar";

const Main = () => {
  return (
    <div className="mb-12">
      <NavigationBar></NavigationBar>
      <PageWrapper>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </PageWrapper>
    </div>
  );
};

export default Main;
