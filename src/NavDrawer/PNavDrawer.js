import React, { useState } from "react";
import { Drawer, Space } from "antd";
import { LiaBarsSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineLogin,
  AiOutlineProfile,
} from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import SearchBanner from "../Components/SearchBanner";
const PNavDrawer = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const showDefaultDrawer = () => {
    setSize("default");
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const links1 = [
    {
      title: (
        <span className="flex items-center gap-1">
          <AiOutlineHome />
          ThesisRepo
        </span>
      ),
      url: "/",
    },
    {
      title: (
        <span className="flex items-center gap-1">
          <FiExternalLink />
          Publications
        </span>
      ),
      url: "/publications",
    },
    {
      title: (
        <span className="flex items-center gap-1">
          <FiExternalLink />
          About
        </span>
      ),
      url: "/about",
    },
    {
      title: (
        <span className="flex items-center gap-1">
          <AiOutlineUser />
          Create Account
        </span>
      ),
      url: "/signup",
    },
    {
      title: (
        <span className="flex items-center gap-1">
          <AiOutlineLogin />
          Sign In
        </span>
      ),
      url: "/login",
    },
    {
      title: (
        <span className="flex items-center gap-1">
          <AiOutlineProfile />
          My Profile
        </span>
      ),
      url: "/myProfile",
    },
    {
      title: (
        <span className="flex items-center gap-1">
          <FiExternalLink />
          DU
        </span>
      ),
      url: "https://www.du.ac.bd/",
    },
    {
      title: (
        <span className="flex items-center gap-1">
          <FiExternalLink />
          CSEDU Conference
        </span>
      ),
      url: "https://csedu.scitevents.org/?y=2023",
    },
    {
      title: <SearchBanner></SearchBanner>,
      url: "#",
    },
  ];

  const renderLinks = (links) => {
    return links.map((link, index) => (
      <React.Fragment key={index}>
        {link.url === "#" ? (
          <div className="p-2 flex justify-start">{link.title}</div>
        ) : (
          <Link to={link.url} className="p-2 hover:underline">
            {link.title}
          </Link>
        )}
      </React.Fragment>
    ));
  };
  return (
    <>
      <Space
        className="flex justify-start bg-black py-2 pl-3"
        style={{ color: "##006699" }}
      >
        <span
          className="text-3xl  text-white font-bold cursor-pointer"
          // style={{ color: "##006699" }}
          onClick={showDefaultDrawer}
        >
          <LiaBarsSolid></LiaBarsSolid>
        </span>
        <span className="text-md text-white font-bold">
          CSEDU Thesis Repository
        </span>
      </Space>
      <Drawer
        title="CSEDU Thesis Repository"
        placement="left"
        size={size}
        className="gap-6"
        onClose={onClose}
        open={open}
      >
        {renderLinks(links1)}
      </Drawer>
    </>
  );
};
export default PNavDrawer;
