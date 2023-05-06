import React from "react";
import { Link } from "react-router-dom";

const PublicationsItem = ({ option }) => {
  const {
    _id,
    projectTitle,
    supervisor,
    abstract,
    publicationYear,
    category,
    memberOne,
    memberTwo,
  } = option;
  return (
    <div className="my-6">
      <Link
        to={`/publications/${_id}`}
        className="font-medium text-xl "
        style={{ color: "#1a0dab" }}
      >
        <span className="hover:underline hover:cursor-pointer">
          {projectTitle}
        </span>
      </Link>
      <span className="flex justify-start gap-3" style={{ color: "#006621" }}>
        <p className="underline">{supervisor}</p>|
        <p className="underline">{memberOne}</p>|
        <p className="underline">{memberTwo}</p>|<p> {category}</p>
        <p>{publicationYear}</p>
      </span>
      {/* <div className="flex gap-2" style={{ color: "#006621" }}></div> */}

      <p className="text-sm md:w-2/3 w-3/4">{abstract}</p>
    </div>
  );
};

export default PublicationsItem;
