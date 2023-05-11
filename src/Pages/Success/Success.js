import React from "react";
import { AiOutlineCheckCircle, AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const Success = () => {
  return (
    <div className="bg-gray-300 h-screen pt-16">
      <div className="h-48 lg:w-3/12 md:w-2/6 w-3/5 mx-auto bg-green-400 flex items-center">
        <span className="text-8xl mx-auto text-white">
          <AiOutlineCheckCircle></AiOutlineCheckCircle>
        </span>
      </div>
      <div className="h-64 lg:w-3/12 md:w-2/6  w-3/5 mx-auto bg-white flex items-center">
        <span className="text-center">
          <h1 className="font-bold mb-6">
            Your submission has been completed successfully!
          </h1>
          <Link
            to="/myProfile"
            className="cursor-pointer w-3/5 mx-auto p-2 rounded justify-center flex items-center bg-green-400 text-white"
          >
            <span>My Submissions</span>
            <span className="text-2xl">
              <AiOutlineDoubleRight></AiOutlineDoubleRight>
            </span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Success;
