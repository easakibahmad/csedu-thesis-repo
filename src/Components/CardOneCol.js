import React from "react";
import year from "../Assets/Images/1.jpg";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const CardOneCol = () => {
  return (
    <div
      className="grid grid-cols-1 border-b-4 px-3"
      style={{ borderColor: "#ccc" }}
    >
      <p className="py-2 text-sm md:text-xl font-bold">
        Recruit new CSEDU Thesis Repository members, earn rewards
      </p>
      <div className="h-4/5">
        <img src={year} className="w-full" alt="card_image" />
      </div>
      <div className="mb-2">
        <p className="my-3 text-sm">
          The CSEDU Member-Get-A-Member (MGM) referral program is your
          opportunity to share the value of membership. Recruit your friends and
          colleagues to earn rewards toward your 2025 CSEDU membership dues or
          as a country-specific electronic gift card of your choice.
        </p>
        <Link
          to="#"
          className="flex gap-1 text-sm text-blue-500 items-center link link-hover"
        >
          <FiChevronRight /> Learn more
        </Link>
        <Link
          to="#"
          className="flex gap-1 text-sm text-blue-500 items-center link link-hover"
        >
          <FiChevronRight /> Submit a referral
        </Link>
      </div>
    </div>
  );
};

export default CardOneCol;
