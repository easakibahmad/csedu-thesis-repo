import React from "react";
import year from "../Assets/Images/6.jpeg";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const CarD = () => {
  return (
    <div className="border-b-4 pb-3 md:border-none md:pb-0 grid grid-cols-2 gap-6">
      <div className="h-4/5">
        <p className="py-2 text-sm font-bold">Climate change</p>
        <img src={year} className="w-full" alt="card_image" />
      </div>
      <div className="" style={{ borderColor: "#ccc" }}>
        <p className="my-3 text-sm">
          IEEE is committed to helping combat and mitigate the effects of
          climate change.
        </p>
        <Link
          to="#"
          className="text-sm flex gap-1 text-blue-500 items-center link link-hover"
        >
          <FiChevronRight /> See Climate Change site
        </Link>
      </div>
    </div>
  );
};

export default CarD;
