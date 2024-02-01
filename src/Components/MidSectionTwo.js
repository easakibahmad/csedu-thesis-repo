import React from "react";
import CardB from "./CardB";
import CardC from "./CardC";
import CardD from "./CardD";

const MidSectionTwo = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className=" mb-8">
        <CardB></CardB>
      </div>
      <div className="grid cols-1 gap-6">
        <CardC></CardC>
        <CardD></CardD>
      </div>
    </div>
  );
};

export default MidSectionTwo;
