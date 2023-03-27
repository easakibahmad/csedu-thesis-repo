import React from "react";
import { ImSearch } from "react-icons/im";

const SearchBanner = () => {
  return (
    <div className="w-2/3 md:w-1/2 mx-auto">
      <h1 className="text-2xl font-bold md:text-4xl text-center">
        CSEDU Thesis Repository
      </h1>
      <div className="flex justify-center my-6 items-center">
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
    </div>
  );
};

export default SearchBanner;
