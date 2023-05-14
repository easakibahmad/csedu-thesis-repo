import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import PublicationsItem from "./PublicationsItem/PublicationsItem";
import PublicationsLeft from "./PublicationsLeft/PublicationsLeft";

const Publications = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(searchText);
    try {
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
    }
  };
  const { data: thesisFilesData = [], isLoading } = useQuery({
    // added date as query key
    queryKey: ["thesisFiles"],
    queryFn: async () => {
      const res = await fetch(
        `https://csedut-hesis-repository-server.vercel.app/thesisFiles`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
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
            >
              <ImSearch />
            </button>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-6">
        <div>
          <PublicationsLeft></PublicationsLeft>
        </div>
        <div className="col-span-5">
          {thesisFilesData.map((option) => (
            <PublicationsItem
              key={option._id}
              option={option}
            ></PublicationsItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
