import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet} from "react-router-dom";
import PublicationsLeft from "../Pages/Publications/PublicationsLeft/PublicationsLeft";


const PagesOutlet = () => {

  return (
    <div>
      <div>
        <Navbar></Navbar>
        
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
