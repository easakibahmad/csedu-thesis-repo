import React from "react";
import "./AHome.css";
import { Link } from "react-router-dom";
const AHome = () => {
  return (
    <div className="responsive-container-block bigContainer">
      <div className="responsive-container-block Container bottomContainer">
        <div className="ultimateImg">
          <img
            className="mainImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0n0sTPwn4D1y1EU3fwG1QBIQPET0S4b1Pv5fajd7ibTpXYCvmTr9LKHgFYyGG5M9B-o&usqp=CAU"
            alt="Main_image"
          />
          <div className="purpleBox">
            <p className="purpleText">
              Computer Science and Engineering Department at the University of
              Dhaka (CSEDU) can be a valuable resource for students, faculty,
              and researchers. A thesis repository serves as a centralized
              platform to store, share, and access research work conducted by
              students in the department.
            </p>
            <img
              className="stars"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp5.svg"
              alt="Stars"
            />
          </div>
        </div>
        <div className="allText bottomText">
          <p className="text-blk headingText">About Us</p>
          <p className="text-blk subHeadingText">
            Revolutionizing Computer Science Education: A Comprehensive Study
          </p>
          <p className="text-blk description">
            In this groundbreaking thesis, we delve into the challenges and
            opportunities in computer science education, aiming to revolutionize
            the learning experience for students. Focusing on innovative
            teaching methodologies, curriculum enhancements, and the integration
            of cutting-edge technologies, our research explores how to cultivate
            a dynamic and engaging environment that prepares students for the
            rapidly evolving landscape of the digital world. Join us on a
            journey to reshape the future of computer science education.
          </p>
          <Link className="explore" to="/publications">
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AHome;
