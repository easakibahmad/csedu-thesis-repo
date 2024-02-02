import { Button } from 'antd';
import React from 'react';

const PCard = () => {
    return (
      <div className="p-2  w-56 shadow-md ">
        <div className="h-72 ">
          <img
            className="h-full w-full"
            src="https://ssl.du.ac.bd/fontView/assets/faculty_image/image_1764.JPG"
            alt="Mosaddek Sir"
          />
        </div>
        <div>
          <Button className="hover:text-blue-600 mt-4  border-blue-600">
            Follow
          </Button>
        </div>
      </div>
    );
};

export default PCard;