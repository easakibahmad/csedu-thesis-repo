import React from "react";
import SearchForm from "./SearchForm";
import NavigationBar from "../../Components/NavigationBar";
import Footer from "../../Shared/Footer/Footer";
import ProfileMid from "./ProfileMid";
import PContent from "./PContent";

const MyProfile = () => {
  return (
    <div style={{ height: "100vh" }}>
      <NavigationBar></NavigationBar>
      <div className="flex justify-center search-div items-center h-48 my-auto">
        <SearchForm></SearchForm>
      </div>
      <ProfileMid></ProfileMid>
      <div className="md:w-3/5 mx-auto">
        <PContent></PContent>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyProfile;
