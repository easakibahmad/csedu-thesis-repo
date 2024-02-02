import React from "react";
import background from "../Assets/Images/background.webp";
import { Button } from "antd";
import { Link } from "react-router-dom";

const HomePageBanner = () => {
  const cardStyle = {
    background: `linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ), url(${background})`,
    backgroundSize: "cover",
    width: "100%",
    height: "400px",
    position: "relative",
    float: "left",
  };

  const headingStyle = {
    padding: "20px",
    fontFamily: "Roboto, sans-serif",
    position: "absolute",
    bottom: "20px",
    left: "20px",
    color: "white",
    margin: 0,
  };

  return (
    <div className="module" style={cardStyle}>
      <div className="top">
        <div style={headingStyle}>
          <h2 className="md:text-3xl text-md mb-2">
            Fostering Academic Excellence at CSEDU
          </h2>
          <p className="text-sm md:text-md mb-2">
            CSEDU Thesis Repository is dedicated to advancing academic
            excellence within the Computer Science and Engineering domain.{" "}
          </p>
          <Button
            style={{ backgroundColor: "#E87722" }}
            className="  border-none mt-2 rounded-full"
          >
            <Link to="/about">
              <span className="hover:text-black text-white font-bold">
                Learn More
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
