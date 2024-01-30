import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import PageWrapper from "../Assets/Components/PageWrapper";

const Main = () => {
  return (
    <div>
      <div className="hidden lg:flex h-12 bg-black"></div>
      <PageWrapper>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </PageWrapper>
    </div>
  );
};

export default Main;
