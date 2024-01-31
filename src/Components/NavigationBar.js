import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { AuthContext } from "../context/AuthProvider";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);

  const links1 = [
    {
      title: "ThesisRepo",
      url: "/",
    },
    { title: "DU", url: "https://www.du.ac.bd/" },
    { title: "CSEDU Conference", url: "https://csedu.scitevents.org/?y=2023" },
  ];

  const links2 = user
    ? [{ title: "My Profile", url: "/myProfile" }]
    : [
        { title: "Create Account", url: "/signup" },
        { title: "Sign In", url: "/login" },
      ];

  const renderLinks = (links) => {
    return links.map((link, index) => (
      <React.Fragment key={index}>
        {index !== 0 && (
          <span className="text-white px-2 flex items-center">|</span>
        )}
        <Link to={link.url} className="text-white p-2 hover:underline">
          {link.title}
        </Link>
      </React.Fragment>
    ));
  };

  return (
    <div className="hidden px-12 lg:flex h-12 bg-black text-white text-md items-center justify-between">
      <div className="flex items-center">
        <div className="-mr-1">
          <AiOutlineHome></AiOutlineHome>
        </div>
        {renderLinks(links1)}
      </div>
      <div className="flex">{renderLinks(links2)}</div>
    </div>
  );
};

export default NavigationBar;
