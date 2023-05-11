import React, { useContext } from "react";
import profile from "../../../Assets/Images/profile.png";
import { AuthContext } from "../../../context/AuthProvider";
import { AiOutlineMail } from "react-icons/ai";

const UserPicture = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-center gap-6 items-center mt-12">
      <img
        className="md:h-24 md:w-24 h-20 w-20"
        src={profile}
        alt="myPicture"
      />
      <div>
        <p className="font-bold">{user?.displayName}</p>
        <p className="flex items-center gap-2 font-bold">
          <AiOutlineMail></AiOutlineMail>
          {user?.email}
        </p>
      </div>
    </div>
  );
};

export default UserPicture;
