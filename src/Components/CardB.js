import React from "react";
import year from "../Assets/Images/4.jpeg";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const CardB = () => {
  return (
    <div
      className="grid grid-cols-1 border-b-4 px-3"
      style={{ borderColor: "#ccc" }}
    >
      <p className="py-2 text-xl font-bold">
        Multiple Society Discount Program
      </p>
      <div className="h-4/5">
        <img src={year} className="w-full" alt="card_image" />
      </div>
      <div className="mb-2">
        <p className="my-3 text-sm">
          Take advantage of the Multiple Society Discount Program to expand your
          expert network and collaborate on the latest technical research,
          policy, and innovation—all at a discount when you become a member or
          continue your membership of two or more participating IEEE Societies.
        </p>
        <Link
          to="#"
          className="flex gap-1 text-blue-500 items-center link link-hover"
        >
          <FiChevronRight /> Learn more
        </Link>
      </div>
    </div>
  );
};

export default CardB;
