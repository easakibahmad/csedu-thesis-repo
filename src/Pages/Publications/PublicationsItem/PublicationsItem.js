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
    <div className="my-6">
      <Link
        onClick={handleLinkClick}
        to={`/publications/${_id}`}
        className="font-medium md:text-xl text-md"
        style={{ color: "#1a0dab" }}
      >
        <span className="hover:underline hover:cursor-pointer">
          {projectTitle}
        </span>
      </Link>
      <span
        className="flex items-center justify-start gap-3"
        style={{ color: "#006621" }}
      >
        <Link to="/myProfile" className="underline text-sm ">
          {supervisor}
        </Link>
        |
        <Link to="/myProfile" className="underline text-sm ">
          {memberOne}
        </Link>
        |
        <Link to="/myProfile" className="underline text-sm ">
          {memberTwo}
        </Link>
        |
        <Link to="/Publications" className="underline text-sm">
          {" "}
          {category}
        </Link>|
        <p className="text-sm">{publicationYear}</p>
      </span>

      <p className="text-sm ">{description?.slice(0, 300)}...</p>
    </div>
  );
};

export default PublicationsItem;
