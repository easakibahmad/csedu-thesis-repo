import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import PublicationsLeft from "../Pages/Publications/PublicationsLeft/PublicationsLeft";
import { ImSearch } from "react-icons/im";

const PagesOutlet = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <div className="flex justify-center md:w-1/2 mx-auto my-6 items-center">
          <input
            type="text"
            name="searchText"
            placeholder="Search Articles"
            className="input input-bordered rounded-none  w-3/4"
          />
          <span className="text-2xl hover:bg-blue-700 bg-blue-500 text-white p-3 cursor-pointer ">
            <ImSearch></ImSearch>
          </span>
        </div>
        <div className="grid grid-cols-6">
          <PublicationsLeft></PublicationsLeft>
          <div className="col-span-5">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagesOutlet;
