import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../Shared/Loading/Loading";
import { Link } from "react-router-dom";

const PublicationsLeft = () => {
  const { data: thesisFilesData = [], isLoading } = useQuery({
    queryKey: ["publicationYear"],
    queryFn: async () => {
      const res = await fetch(
        `https://csedut-hesis-repository-server.vercel.app/publicationYear`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="w-1/2 mx-auto mt-6 text-white">
      <p className=" font-bold hover:underline">Sort by Year</p>
      <div className="grid grid-cols-1 mt-3 gap-4">
        {thesisFilesData.map((item) => (
          <Link
            to={`/pages/${item.publicationYear}`}
            key={item._id}
            className="hover:text-blue-500 hover:underline hover:cursor-pointer"
          >
            {item.publicationYear}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PublicationsLeft;
