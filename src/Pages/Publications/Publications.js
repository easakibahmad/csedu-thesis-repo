import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ImSearch } from "react-icons/im";
import Loading from "../../Shared/Loading/Loading";
import PublicationsItem from "./PublicationsItem/PublicationsItem";
import PublicationsLeft from "./PublicationsLeft/PublicationsLeft";

const Publications = () => {
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
