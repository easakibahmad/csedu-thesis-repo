import React from "react";
import year from "../Assets/Images/2.jpeg";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const CardTwoCol= () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="h-4/5">
        <p className="py-2 text-sm font-bold">
          Jumpstart your leadership training
        </p>
        <img src={year} className="w-full" alt="card_image" />
      </div>
      <div className="border-b-4" style={{ borderColor: "#ccc" }}>
        <p className="my-3 text-sm">
          Register for the virtual or in-person CSEDU Leading Technical Teams, a
          training session starting in February 2024, covering trends and best
          practices to empower you to navigate complex challenges with
          confidence. Discount available for CSEDU members.
        </p>
        <Link
          to="#"
          className="text-sm flex gap-1 text-blue-500 items-center link link-hover"
        >
          <FiChevronRight /> Learn more
        </Link>
      </div>
    </div>
  );
};

export default CardTwoCol;
