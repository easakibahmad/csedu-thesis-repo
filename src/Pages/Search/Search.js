import React from "react";
import { useLoaderData } from "react-router-dom";
import PublicationsItem from "../Publications/PublicationsItem/PublicationsItem";

const Search = () => {
  const data = useLoaderData();

  console.log(data);
  return (
    <div>
      {data?.length === 0 && (
        <p className="mt-7 text-red-500">No results found</p>
      )}
      {data?.map((option) => (
        <PublicationsItem key={option._id} option={option}></PublicationsItem>
      ))}
    </div>
  );
};

export default Search;
