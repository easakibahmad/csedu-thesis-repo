import React from "react";

const PublicationsLeft = () => {
  return (
    <div className="w-1/2 mx-auto mt-6">
      <p className="text-red-500 font-medium">Sort by Year</p>
      <p className="hover:underline hover:cursor-pointer">2022</p>
      <p className="hover:underline hover:cursor-pointer">2021</p>
      <p className="hover:underline hover:cursor-pointer">2020</p>
      <p className="hover:underline hover:cursor-pointer">2019</p>
      <br />
      <br />
      <p className="text-red-500 font-medium">Sort by Batch</p>
      <p className="hover:underline hover:cursor-pointer">24th</p>
      <p className="hover:underline hover:cursor-pointer">23th</p>
      <p className="hover:underline hover:cursor-pointer">22th</p>
      <p className="hover:underline hover:cursor-pointer">21th</p>
    </div>
  );
};

export default PublicationsLeft;
