import React, { useState } from "react";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import { ImArrowRight } from "react-icons/im";

const NavigationDropDown = ({ item }) => {
  const [dropdownActive, setDropdownActive] = useState(false);

  const getItemLink = () => {
    if (item === "Publications") {
      return "/publications";
    } else if (item === "Submission") {
      return "/submission";
    } else if (item === "About") {
      return "/about";
    } else if (item === "Login") {
      return "/login";
    } else if (item === "Profile") {
      return "/myProfile";
    } else if (item === "Signout") {
      return "/signout";
    } else {
      return "/";
    }
  };

  const handleDropdownVisibleChange = (visible) => {
    setDropdownActive(visible);
  };

  // Realistic content for each link
  const linkContents = {
    Publications: "Explore our latest publications and research articles.",
    Submission: "Submit your work or research for review and publication.",
    About: "Learn more about our organization and its mission.",
    Login: "Sign in to your account to access personalized features.",
    Profile: "View and manage your profile information and preferences.",
    Signout: "Sign out of your account.",
    Default: "Visit our homepage for more information.",
  };

  return (
    <Dropdown
      overlay={
        <div className=" h-24 w-96">
          <div className="bg-blue-500 border-gray-300 grid grid-cols-2">
            <Link
              to={getItemLink()}
              className="text-white flex items-center px-2 gap-2 py-3"
            >
              <span className="text-2xl">
                <ImArrowRight></ImArrowRight>
              </span>{" "}
              {item}
            </Link>
            <div className="p-2 bg-white">
              {linkContents[item] || linkContents.Default}
            </div>
          </div>
        </div>
      }
      onVisibleChange={handleDropdownVisibleChange}
    >
      <a href="#abc" onClick={(e) => e.preventDefault()}>
        <Space className={`${dropdownActive ? " text-blue-500" : ""}`}>
          <Link to={getItemLink()}>{item}</Link>
        </Space>
      </a>
    </Dropdown>
  );
};

export default NavigationDropDown;
