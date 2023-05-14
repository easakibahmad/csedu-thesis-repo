import { useState } from "react";
import { ImSearch } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const SearchBanner = () => {
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

  return (
    <div className="w-2/3 md:w-1/2 mx-auto">
      <h1 className="text-sm font-bold md:text-4xl sm:text-xl text-center">
        CSEDU Thesis Repository
      </h1>

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
  );
};

export default SearchBanner;
