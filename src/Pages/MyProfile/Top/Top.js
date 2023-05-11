import React from "react";
import cseduLogo from "../../../Assets/Images/cseduLogo.png";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div className="md:h-16 h-12 flex items-center justify-center text-white bg-black">
      <Link
        to="/"
        className="hover:text-blue-400 cursor-pointer flex md:text-2xl gap-3  text-md font-medium items-center"
      >
        <img
          src={cseduLogo}
          alt="cseduLogo"
          className="md:w-12 md:h-12 w-8 h-8  rounded-full"
        />

        <p>
          <span>CSEDU</span> Thesis Repository
        </p>
      </Link>
    </div>
  );
};

export default Top;
