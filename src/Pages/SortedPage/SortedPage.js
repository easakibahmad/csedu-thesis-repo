import React from "react";
import { useLoaderData } from "react-router-dom";
import PublicationsItem from "../Publications/PublicationsItem/PublicationsItem";

const SortedPage = () => {
  const data = useLoaderData();

  console.log(data);
  return (
    <div>
      {data.map((option) => (
        <PublicationsItem key={option._id} option={option}></PublicationsItem>
      ))}
    </div>
  );
};

export default SortedPage;
