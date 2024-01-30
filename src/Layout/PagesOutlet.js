import React, { useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import PublicationsLeft from "../Pages/Publications/PublicationsLeft/PublicationsLeft";
import { ImSearch } from "react-icons/im";
import Loading from "../Shared/Loading/Loading";

const PagesOutlet = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(searchText);
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://csedut-hesis-repository-server-musfikuroli.vercel.app/yourSearch?query=${searchText}`
      );
      const data = await response.json();
      console.log(data);
      {
        searchText && navigate(`/pages/yourSearch/${searchText}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <div className="w-1/2 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center my-6 items-center">
              <input
                type="text"
                name="searchText"
                placeholder="Search Articles"
                className="p-2  focus:border-blue-300 focus:outline-none  border w-3/4"
                value={searchText}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="text-2xl border border-blue-600 hover:bg-blue-400 bg-blue-600 text-white p-2 cursor-pointer "
                disabled={isLoading}
              >
                <ImSearch />
              </button>
            </div>
            {isLoading && <Loading></Loading>}
          </form>
        </div>
        <div className="grid grid-cols-6">
          <PublicationsLeft></PublicationsLeft>
          <div className="col-span-5">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagesOutlet;
