import React from "react";
import MySubmissions from "./MySubmissions/MySubmissions";
import Top from "./Top/Top";
import UserPicture from "./UserPicture/UserPicture";

const MyProfile = () => {
  return (
    <div>
      <Top></Top>
      <UserPicture></UserPicture>
      <MySubmissions></MySubmissions>
    </div>
  );
};

export default MyProfile;
