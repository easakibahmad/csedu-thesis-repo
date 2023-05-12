import React from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";

const EachSubmissions = ({ item }) => {
  const { projectTitle, date, _id } = item;
  console.log(item);
  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this submissions?"
    ); // Add this line

    if (!confirmed) {
      return;
    }
    try {
      const response = await fetch(`http://localhost:2000/thesisFiles/${_id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Data has been deleted successfully!");
        window.location.reload();
      } else {
        console.log("Error deleting data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid grid-cols-5 shadow-md p-4">
      <div className=" md:w-3/4 col-span-4">
        <Link
          to={`/publications/${_id}`}
          className="font-medium text-md"
          style={{ color: "#1a0dab" }}
        >
          <span className="hover:underline hover:cursor-pointer">
            {projectTitle}
          </span>
        </Link>

        <p className="text-sm ">Uploaded: {date.slice(0, 10)}</p>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleDelete}
          className="text-2xl text-red-300 hover:text-red-700"
        >
          <RiDeleteBin5Line></RiDeleteBin5Line>
        </button>
      </div>
    </div>
  );
};

export default EachSubmissions;
