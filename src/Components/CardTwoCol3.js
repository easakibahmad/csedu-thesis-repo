import React from "react";
import year from "../Assets/Images/30year.jpg";

const CardTwoCol3 = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div>
        <img src={year} className="w-full h-full" alt="card_image" />
      </div>
      <div className="h-4/5" style={{ borderColor: "#ccc" }}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
};

export default CardTwoCol3;
