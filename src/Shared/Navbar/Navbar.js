import React from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/submission">Submission</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </React.Fragment>
  );
  return (
    <div className="navbar  flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <span className="text-xl">
              <HiMenu></HiMenu>
            </span>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <span className="text-yellow-500 font-bold pr-2">CSEDU</span>
          <span className="text-blue-600">Thesis Repository</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
