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
          <h2 className="text-2xl">Fostering Academic Excellence at CSEDU</h2>
          <p>
            CSEDU Thesis Repository is dedicated to advancing academic
            excellence within the Computer Science and Engineering domain. Our
            commitment is reflected through impactful publications, conferences,
            adherence to technology standards, and engaging in professional and
            educational activities. We envision a sustainable future where our
            repository serves as a beacon of knowledge, inspiring a global
            community of researchers, students, and professionals.
          </p>
          <Button
            style={{ backgroundColor: "#E87722" }}
            className="  border-none mt-2 rounded-full"
          >
            <Link to="/about">
              <span className="hover:text-black text-white font-bold">Learn More</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
