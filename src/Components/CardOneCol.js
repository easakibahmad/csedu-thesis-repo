import React from "react";
import year from "../Assets/Images/30year.jpg";

const CardOneCol = () => {
  return (
    <div className="grid grid-cols-1 border-b-4 px-3" style={{borderColor: "#ccc"}}>
      <div className="h-4/5">
        <img src={year} className="w-full" alt="card_image" />
      </div>
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.{" "}
        </p>
      </div>
    </div>
  );
};

export default CardOneCol;
