import React from "react";
import { Link } from "react-router-dom";
import { FiGlobe, FiMail, FiPhone, FiGithub } from "react-icons/fi";
import cseduLogo from "../../Assets/Images/cseduLogo.png";
import { FiChevronRight } from "react-icons/fi";
import { ImFacebook, ImInstagram, ImLinkedin, ImTwitter } from "react-icons/im";
import BackToTopButton from "../../Components/BackToButton";
import { ImArrowUp2 } from "react-icons/im";

const Footer = () => {
  return (
    <div>
      <footer
        className="footer p-10 "
        style={{ backgroundColor: "#069", color: "white" }}
      >
        <nav>
          <h6 className="footer-title">Categories</h6>
          <Link to="#" className="flex gap-1 items-center link link-hover">
            <FiChevronRight /> Blockchain Technology
          </Link>
          <Link to="#" className="flex gap-1 items-center link link-hover">
            <FiChevronRight /> Cloud Computing
          </Link>
          <Link to="#" className="flex gap-1 items-center link link-hover">
            <FiChevronRight /> Cybersecurity
          </Link>
          <Link to="#" className="flex gap-1 items-center link link-hover">
            <FiChevronRight /> Computer Vision and Image Processing
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Authors</h6>
          <Link to="#" className="flex gap-1 items-center link link-hover">
            <FiChevronRight /> Dr. Sarker Tanveer Ahmed Rumee
          </Link>
          <Link to="#" className="flex gap-1 items-center link link-hover">
            <FiChevronRight /> Dr. Md. Mamun-or-Rashid
          </Link>
          <Link to="#" className="flex gap-1 items-center link link-hover">
            <FiChevronRight /> Dr. Mosaddek Hossain Kamal
          </Link>
          <Link to="#" className="flex gap-1 items-center link link-hover">
            <FiChevronRight /> Md. Abu Ahmed Ferdaus
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Years</h6>
          <Link to="#" className="flex gap-1 items-center link link-hover">
            <FiChevronRight /> 2022
          </Link>
          <Link to="#" className="flex gap-1 items-center link link-hover">
            <FiChevronRight /> 2021
          </Link>
          <Link to="#" className="flex gap-1 items-center link link-hover">
            <FiChevronRight /> 2020
          </Link>
          <Link to="#" className="flex gap-1 items-center link link-hover">
            <FiChevronRight /> 2019
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Batch</h6>
          <Link to="#" className="flex gap-1 items-center link link-hover">
            <FiChevronRight /> 25th
          </Link>
          <Link to="#" className="flex gap-1 items-center link link-hover">
            <FiChevronRight /> 24th
          </Link>
          <Link to="#" className="flex gap-1 items-center link link-hover">
            <FiChevronRight /> 23rd
          </Link>
          <Link to="#" className="flex gap-1 items-center link link-hover">
            <FiChevronRight /> 22nd
          </Link>
        </nav>
      </footer>
      <div
        className="flex justify-center gap-3 py-6 "
        style={{ backgroundColor: "#069", color: "white" }}
      >
        <Link
          to="https://www.facebook.com/groups/cse.udhaka"
          className=" hover:text-black"
        >
          <ImFacebook size={17} />
        </Link>

        <Link
          className=" hover:text-black"
          to="https://www.linkedin.com/groups/5166623/"
        >
          <ImLinkedin size={17} />
        </Link>
        <Link className=" hover:text-black">
          <ImTwitter size={17} />
        </Link>
        <Link className=" hover:text-black">
          <ImInstagram size={17} />
        </Link>
      </div>
      <div
        className="flex justify-end -mt-4 pb-2 pr-2"
        style={{ backgroundColor: "#069", color: "white" }}
      >
        <BackToTopButton></BackToTopButton>
      </div>

      <footer
        className="footer px-10 py-4 border-t  text-base-content border-base-300"
        style={{ backgroundColor: "#333", color: "white" }}
      >
        <aside className="items-center grid-flow-col">
          <img
            src={cseduLogo}
            alt="cseduLogo"
            className="rounded-lg w-10 h-10"
          />
          <p>
            CSEDU Thesis Repository <br />
            Connecting knowledge since 1992
          </p>
        </aside>
        <p>© Copyright 2024 CSEDU Thesis Repository – All rights reserved.</p>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link to="#" className="fill-current">
              <FiMail size={24} />
            </Link>
            <Link to="#" className="fill-current">
              <FiPhone size={24} />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
