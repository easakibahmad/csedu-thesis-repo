import React from "react";
import SearchForm from "./SearchForm";
import NavigationBar from "../../Components/NavigationBar";
import Footer from "../../Shared/Footer/Footer";
import ProfileMid from "./ProfileMid";
import PContent from "./PContent";
import PNavDrawer from "../../NavDrawer/PNavDrawer";

const MyProfile = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div>
        <div className="lg:hidden">
          <PNavDrawer></PNavDrawer>
        </div>
        <div className="hidden lg:flex">
          <NavigationBar></NavigationBar>
        </div>
      </div>
      <div className="flex justify-center search-div items-center h-48 my-auto">
        <SearchForm></SearchForm>
      </div>
      <ProfileMid></ProfileMid>
      <div className="md:w-4/5 mx-auto">
        <PContent></PContent>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyProfile;
