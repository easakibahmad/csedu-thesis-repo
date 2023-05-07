import React from "react";
import { Link } from "react-router-dom";

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
  return (
    <div className="my-6 md:w-3/4">
      <Link
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
        <p className="underline text-sm ">{supervisor}</p>|
        <p className="underline text-sm ">{memberOne}</p>|
        <p className="underline text-sm ">{memberTwo}</p>|
        <p className="text-sm"> {category}</p>
        <p className="text-sm">{publicationYear}</p>
      </span>

      <p className="text-sm ">{description?.slice(0, 300)}...</p>
    </div>
  );
};

export default PublicationsItem;
