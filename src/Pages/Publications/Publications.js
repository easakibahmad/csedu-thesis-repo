import React from "react";
import { ImSearch } from "react-icons/im";
import PublicationsItem from "./PublicationsItem/PublicationsItem";

const Publications = () => {
  return (
    <div>
      <div className="flex justify-center md:w-1/2 mx-auto my-6 items-center">
        <input
          type="text"
          name="searchText"
          placeholder="Search Articles"
          className="input input-bordered rounded-none  w-3/4"
        />
        <span className="text-2xl hover:bg-blue-700 bg-blue-500 text-white p-3 cursor-pointer ">
          <ImSearch></ImSearch>
        </span>
      </div>

      <div className="grid grid-cols-4">
        <div></div>
        <div className="col-span-3">
          <PublicationsItem></PublicationsItem>
          <PublicationsItem></PublicationsItem>
          <PublicationsItem></PublicationsItem>
          <PublicationsItem></PublicationsItem>
        </div>
      </div>
    </div>
  );
};

export default Publications;
