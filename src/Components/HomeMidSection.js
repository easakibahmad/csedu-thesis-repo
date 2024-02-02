import React from "react";
import MidSectionOne from "./MidSectionOne";
import MidSectionTwo from "./MidSectionTwo";
import MidSectionThree from "./MidSectionThree";

const HomeMidSection = () => {
  const linkStyle = {
    padding: "3px 0px",
    marginRight: "1rem",
    textDecoration: "none",
    display: "inline-block",
    color: "#000",
    fontWeight: "bold",
  };
  return (
    <div className="my-6 py-10 px-6">
      <h1 className="text-md md:text-2xl " style={linkStyle}>
        <span
          style={{
            borderBottom: "7.5px solid #00629B",
            paddingBottom: "6px",
          }}
        >
          The Latest
        </span>{" "}
        From CSEDU Thesis Repository
      </h1>
      <p className="my-8 md:text-xl">
        CSEDU and our members around the world support the global pursuit of
        peace.
      </p>
      <MidSectionOne></MidSectionOne>
      <div className="my-20">
        <MidSectionTwo></MidSectionTwo>
          </div>
          <MidSectionThree></MidSectionThree>
    </div>
  );
};

export default HomeMidSection;
