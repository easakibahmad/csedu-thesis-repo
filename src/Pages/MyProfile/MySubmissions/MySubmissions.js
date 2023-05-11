import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { BiChevronsDown } from "react-icons/bi";
import { AuthContext } from "../../../context/AuthProvider";
import Loading from "../../../Shared/Loading/Loading";
import EachSubmissions from "./EachSubmissions";

const MySubmissions = () => {
  const { user } = useContext(AuthContext);
  const { data: submissions = [], isLoading } = useQuery({
    // added date as query key
    queryKey: [`submission/${user?.email}`],
    queryFn: async () => {
      const res = await fetch(
        `https://csedut-hesis-repository-server.vercel.app/submission/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  //   console.log(submissions);
  return (
    <div className="mt-12 mx-12">
      <h1 className="text-2xl font-bold flex justify-center items-center gap-2">
        My Submissions <BiChevronsDown></BiChevronsDown>
      </h1>
      <div className="mt-6 grid grid-cols-1  gap-4">
        {submissions.map((item) => (
          <EachSubmissions item={item} key={item._id}></EachSubmissions>
        ))}
      </div>
    </div>
  );
};

export default MySubmissions;
