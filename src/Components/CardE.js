import React from "react";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const CardE = ({image,title, text}) => {
  return (
    <div
      className="grid grid-cols-1 gap-3 px-3"
      style={{ borderColor: "#ccc" }}
    >
      <div>
        <p className="py-1 text-sm font-bold">{title}</p>
        <img src={image} className="w-full h-cover" alt="card_image" />
      </div>
      <div className="mb-2">
        <Link to="#" className="flex gap-1 text-blue-500 link link-hover">
          <FiChevronRight />{" "}
          <p className="border-b-4 text-sm border-slate-300">{text}</p>
        </Link>
      </div>
    </div>
  );
};

export default CardE;
