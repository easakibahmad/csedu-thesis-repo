import React from 'react';
import { Link } from 'react-router-dom';

const NavHomeLogo = ({cseduLogo, Thirty}) => {
    return (
      <div>
        <div className="flex items-center gap-2">
          <Link
            to="/"
            style={{ color: "#107fa8" }}
            className="grid cols-1 md:text-2xl border-r-2 pr-2  text-md font-medium items-center"
          >
            <div className="flex gap-1 items-center ">
              <img src={cseduLogo} alt="cseduLogo" className="w-10 h-10" />
              <span className="font-bold text-3xl">CSEDU</span>
            </div>
            <p
              className="hidden md:block italic ml-5 -mt-2"
              style={{ fontSize: "13px" }}
            >
              Thesis Repository
            </p>
          </Link>
          <Link to="/">
            <img className="h-20 w-30 " src={Thirty} alt="Thirty Years!" />
          </Link>
        </div>
      </div>
    );
};

export default NavHomeLogo;