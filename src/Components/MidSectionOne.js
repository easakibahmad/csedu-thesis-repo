
import React from "react";
import CardTwoCol from "./CardTwoCol";
import CardOneCol from "./CardOneCol";
import CardA from "./CardA";

const MidSectionOne = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div >
        <CardOneCol></CardOneCol>
      </div>
      <div className="grid cols-1 gap-4">
        <CardTwoCol></CardTwoCol>
        <CardA></CardA>
      </div>
    </div>
  );
};

export default MidSectionOne;
