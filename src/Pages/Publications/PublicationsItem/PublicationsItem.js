import React from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Loading from "../../../Shared/Loading/Loading";

const PublicationsItem = ({ option }) => {
  const {
    _id,
    projectTitle,
    supervisor,
    description,
    publicationYear,
    category,
    memberOne,
    memberTwo,
  } = option;
  const handleLinkClick = () => {
    toast.info("Please wait for the page to navigate...");
  };
  return (
    <div className="my-6 grid grid-cols-1 gap-3">
      <Link
        onClick={handleLinkClick}
        to={`/publications/${_id}`}
        className="font-medium "
        style={{ color: "#1a0dab" }}
      >
        <span className="md:text-xl text-sm hover:underline hover:cursor-pointer  ">
          {projectTitle}
        </span>
      </Link>
      <div className="grid grid-cols-1 gap-2">
        <div
          className="flex items-center justify-start gap-3"
          style={{ color: "#006621" }}
        >
          <Link
            to="/myProfile"
            className="underline  "
            style={{ fontSize: "12px" }}
          >
            {supervisor}
          </Link>
          |
          <Link
            to="/myProfile"
            className="underline  "
            style={{ fontSize: "12px" }}
          >
            {memberOne}
          </Link>
          |
          <Link
            to="/myProfile"
            className="underline "
            style={{ fontSize: "12px" }}
          >
            {memberTwo}
          </Link>
          |
          <Link
            to="/Publications"
            className="underline "
            style={{ fontSize: "12px" }}
          >
            {category}
          </Link>
          |
          <p className="text-sm" style={{ fontSize: "12px" }}>
            {publicationYear}
          </p>
        </div>

        <p className="text-sm ">{description?.slice(0, 300)}...</p>
      </div>
    </div>
  );
};

export default PublicationsItem;
