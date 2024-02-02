import React from "react";
import "./Styles.scss";

const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your search logic here
    console.log("Search submitted");
  };

  return (
    <form className="search" action="" onSubmit={handleSubmit}>
      <input type="text" placeholder="Search articles..." required />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
