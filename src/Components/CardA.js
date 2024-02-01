import React from "react";
import year from "../Assets/Images/3.png";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const CardA = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="h-4/5">
        <p className="py-2 text-sm font-bold">
          2024 CSEDU Custom Integrated Circuits Conference (CICC)
        </p>
        <img src={year} className="w-full" alt="card_image" />
      </div>
      <div className="border-b-4" style={{ borderColor: "#ccc" }}>
        <p className="my-3 text-sm">
          The CSEDU Custom Integrated Circuits Conference is a premier
          conference devoted to IC development. The conference program is a
          blend of oral presentations, exhibits, panels, and forums.
        </p>
        <Link
          to="#"
          className="flex gap-1 text-blue-500 items-center link link-hover"
        >
          <FiChevronRight /> Register now
        </Link>
        <Link
          to="#"
          className="flex gap-1 text-blue-500 items-center link link-hover"
        >
          <FiChevronRight /> Search all IEEE conferences
        </Link>
      </div>
    </div>
  );
};

export default CardA;
