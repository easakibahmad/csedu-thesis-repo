import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import cseduLogo from "../../Assets/Images/cseduLogo.png";
import { AuthContext } from "../../context/AuthProvider";
import SearchBanner from "../../Components/SearchBanner";
import { ImFacebook, ImTwitter, ImInstagram, ImLinkedin } from "react-icons/im";
import Thirty from "../../Assets/Images/30year.jpg";
import NavigationDropDown from "../../Components/NavigationDropDown";
import NavHomeLogo from "../../Components/NavHomeLogo";
import { toast } from "sonner";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("You are signed out successfully!");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const linkStyle = {
    borderBottom: "1.5px solid #8a8a8a",
    padding: "3px 0px",
    marginRight: "1rem",
    textDecoration: "none",
    display: "inline-block",
    color: "#000",
    fontWeight: "bold",
  };
  const menuItems = (
    <React.Fragment>
      <Link to="#">
        <span style={linkStyle}>
          <NavigationDropDown item="Publications"></NavigationDropDown>
        </span>
      </Link>

      <Link>
        <span style={linkStyle}>
          <NavigationDropDown item="Submission"></NavigationDropDown>
        </span>
      </Link>

      <Link>
        <span style={linkStyle}>
          <NavigationDropDown item="Profile"></NavigationDropDown>
        </span>
      </Link>
      <Link>
        <span style={linkStyle}>
          <NavigationDropDown item="About"></NavigationDropDown>
        </span>
      </Link>
      {user?.uid && (
        <Link onClick={handleSignOut} to="/">
          <span style={linkStyle}>
            <NavigationDropDown item="Signout"></NavigationDropDown>
          </span>
        </Link>
      )}
    </React.Fragment>
  );
  return (
    <div className="navbar grid cols-1">
      <div className="mb-4">
        <div className="flex items-center justify-between w-full">
          <NavHomeLogo Thirty={Thirty} cseduLogo={cseduLogo}></NavHomeLogo>
          <div>
            <p className="text-sky-800 text-sm font-bold">
              CSEDU Academic Dissertations: A Repository of Ideas
            </p>
          </div>
          <div>
            <div className="mb-4 mt-2">
              <SearchBanner></SearchBanner>
            </div>
            <div className="flex justify-end gap-3">
              <Link
                to="https://www.facebook.com/groups/cse.udhaka"
                className="text-blue-600 hover:text-black"
              >
                <ImFacebook size={17} />
              </Link>

              <Link
                className="text-blue-600 hover:text-black"
                to="https://www.linkedin.com/groups/5166623/"
              >
                <ImLinkedin size={17} />
              </Link>
              <Link className="text-blue-600 hover:text-black">
                <ImTwitter size={17} />
              </Link>
              <Link className="text-blue-600 hover:text-black">
                <ImInstagram size={17} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden lg:flex lg:justify-between"
        style={{ fontSize: "20px" }}
      >
        <div className="grid grid-cols-6 gap-6 w-full">{menuItems}</div>
        <div style={{ width: "140px" }}>
          <Link
            className="flex justify-center items-center"
            style={{
              background: "#069",
              height: "40px",
              fontSize: "13px",
              padding: "10px 25px",
              borderRadius: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: "bold",
            }}
            to="/signup"
          >
            <span className="hover:text-black">JOIN US</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
