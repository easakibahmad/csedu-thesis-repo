import React, { useState } from "react";
import { Button, Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import { ImArrowRight } from "react-icons/im";
import { FiChevronRight } from "react-icons/fi";

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
        <div className="">
          <div className="bg-blue-500 border-gray-300 grid grid-cols-2">
            <div className="">
              <Link
                to={getItemLink()}
                className="text-white flex items-center px-2 gap-2 py-3"
              >
                <span className="text-2xl">
                  <FiChevronRight />
                </span>{" "}
                {item}
              </Link>
              <Link className="text-white flex items-center px-2 gap-2 py-3">
                <span className="text-2xl">
                  <FiChevronRight />{" "}
                </span>{" "}
                CSEDU at a glance
              </Link>
              <Link className="text-white flex items-center px-2 gap-2 py-3">
                <span className="text-2xl">
                  <FiChevronRight />{" "}
                </span>{" "}
                CSEDU Strategic Plan
              </Link>
              <Link className="text-white flex items-center px-2 gap-2 py-3">
                <span className="text-2xl">
                  <FiChevronRight />{" "}
                </span>{" "}
                Organization of CSEDU
              </Link>

              <Link className="text-white flex items-center px-2 gap-2 py-3">
                <span className="text-2xl">
                  <FiChevronRight />{" "}
                </span>{" "}
                Member Grade Elevation
              </Link>
              <Link className="text-white flex items-center px-2 gap-2 py-3">
                <span className="text-2xl">
                  <FiChevronRight />{" "}
                </span>{" "}
                Member insurance and discounts
              </Link>
              <Link className="text-white flex items-center px-2 gap-2 py-3">
                <span className="text-2xl">
                  <FiChevronRight />{" "}
                </span>{" "}
                Memberships and Subscriptions Catalog
              </Link>
            </div>
            <div className="p-2 bg-white grid grid-cols-1 gap-4">
              <p> {linkContents[item] || linkContents.Default}</p>
              <div>
                <p className="mb-3">What do you want to do?</p>
                <div className="flex justify-between gap-3 items-center">
                  <input
                    type="text"
                    placeholder="Search here..."
                    className="input input-bordered input-info w-full max-w-xs focus:outline-none"
                  />
                  <Button className="bg-yellow-500">Go</Button>
                </div>
              </div>
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
