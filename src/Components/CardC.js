import React from "react";
import year from "../Assets/Images/5.jpg";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const CardC = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div>
        <p className="py-2 text-xl font-bold">
          Thomas Coughlin, 2024 CSEDU President & CEO{" "}
        </p>
        <img src={year} className="w-full h-4/5l" alt="card_image" />
      </div>
      <div
        className="border-b-4 col-span-2 h-4/5"
        style={{ borderColor: "#ccc" }}
      >
        <p className="my-3 text-sm">
          Follow Thomas Coughlin on social media to get updates from across
          IEEE, your professional home.
        </p>
        <Link
          to="#"
          className="flex gap-1 text-blue-500 items-center link link-hover"
        >
          <FiChevronRight /> X
        </Link>
        <Link
          to="#"
          className="flex gap-1 text-blue-500 items-center link link-hover"
        >
          <FiChevronRight /> Facebook
        </Link>
        <Link
          to="#"
          className="flex gap-1 text-blue-500 items-center link link-hover"
        >
          <FiChevronRight /> Instagram
        </Link>
        <Link
          to="#"
          className="flex gap-1 text-blue-500 items-center link link-hover"
        >
          <FiChevronRight /> Linkedin
        </Link>
      </div>
    </div>
  );
};

export default CardC;
