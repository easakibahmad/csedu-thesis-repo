import React from "react";
import MySubmissions from "./MySubmissions/MySubmissions";
import UserPicture from "./UserPicture/UserPicture";

const MyProfile = () => {
  return (
    <div className="pb-12">
      <UserPicture></UserPicture>
      <MySubmissions></MySubmissions>
    </div>
  );
};

export default MyProfile;
