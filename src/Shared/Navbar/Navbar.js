import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import cseduLogo from "../../Assets/Images/cseduLogo.png";
import { AuthContext } from "../../context/AuthProvider";
import { ImProfile } from "react-icons/im";
import SearchBanner from "../../Pages/Home/SearchBanner/SearchBanner";
import { ImFacebook, ImTwitter, ImInstagram, ImLinkedin } from "react-icons/im";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    logOut()
      .then(() => {
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
      <Link to="/">
        <span style={linkStyle}>Home</span>
      </Link>
      <Link to="/publications">
        <span style={linkStyle}>Publications</span>
      </Link>
      <Link to="/about">
        <span style={linkStyle}>About</span>
      </Link>
      {user?.uid && (
        <>
          <Link to="/submission">
            <span style={linkStyle}>Submission</span>
          </Link>
          <Link onClick={handleSignOut} to="/">
            <span style={linkStyle}>Signout</span>
          </Link>
          <Link to="/myProfile">
            <span className="text-xl font-extrabold" style={linkStyle}>
              <ImProfile></ImProfile>
            </span>
          </Link>
        </>
      )}
    </React.Fragment>
  );
  return (
    <div className="navbar grid cols-1">
      <div className="mb-4">
        <div className="dropdown">
          <label
            // htmlFor="my-drawer"
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <span className="text-xl">
              <HiMenu></HiMenu>
            </span>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
            {!user?.uid && <Link to="/login">Login</Link>}
          </ul>
        </div>
        <div className="flex items-center justify-between w-full">
          <Link to="/">
            <div
              style={{ color: "#107fa8" }}
              className="grid cols-1 md:text-2xl  text-md font-medium items-center"
            >
              <div className="flex gap-1 items-center ">
                <img src={cseduLogo} alt="cseduLogo" className="w-10 h-10" />
                <span className="font-bold text-3xl">CSEDU</span>
              </div>
              <p
                className="hidden md:block italic ml-5 -mt-2"
                style={{ fontSize: "13px" }}
              >
                Thesis Repository
              </p>
            </div>
          </Link>
          <div>
            <p className="text-sky-800 text-md font-bold">
              CSEDU Academic Dissertations: A Repository of Ideas
            </p>
          </div>
          <div>
            <div className="my-2">
              <SearchBanner></SearchBanner>
            </div>
            <div className="flex justify-end gap-3 mr-4">
              <ImFacebook size={15} />
              <ImTwitter size={15} />
              <ImInstagram size={15} />
              <ImLinkedin size={15} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden lg:flex lg:justify-between"
        style={{ fontSize: "20px" }}
      >
        <div className=" px-1 grid grid-cols-6 w-full">{menuItems}</div>
        <div style={{ width: "140px" }}>
          {!user?.uid && (
            <Link
              className="flex justify-center items-center"
              style={{
                background: "#069",
                height: "40px",
                fontSize: "18px",
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
              JOIN US
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
