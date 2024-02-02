import { Button } from 'antd';
import React from 'react';
import { FaCheckCircle, FaUserPlus } from 'react-icons/fa';

const PCard = () => {
    return (
      <div className="p-2  w-56 shadow-md ">
        <div className="h-72 relative">
          <p className="absolute  -top-3 left-2 flex items-center justify-start hover:text-blue-600 mt-4 border-blue-600">
            <FaCheckCircle className="text-green-500" /> 
          </p>
          <img
            className="h-full w-full"
            src="https://ssl.du.ac.bd/fontView/assets/faculty_image/image_1764.JPG"
            alt="Mosaddek Sir"
          />
        </div>
        <div>
          <Button className="flex items-center justify-start hover:text-blue-600 mt-4 border-blue-600">
            <FaUserPlus className="text-blue-500 mr-2" /> Follow
          </Button>
        </div>
      </div>
    );
};

export default PCard;