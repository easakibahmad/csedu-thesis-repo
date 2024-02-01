import { useState } from "react";
import { ImSearch } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";

const SearchBanner = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

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
      setIsLoading(false); // Set loading state back to false
    }
  };

  return (
    <div className="">
      {/* <h1 className="text-sm font-bold md:text-4xl sm:text-xl text-center">
        CSEDU Thesis Repository
      </h1> */}

      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center">
          <input
            type="text"
            name="searchText"
            placeholder="Search Thesis Repository"
            className="p-2  focus:border-blue-300 focus:outline-none  border"
            value={searchText}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="text-2xl border border-blue-600 hover:bg-blue-400 bg-blue-600 text-white p-2 cursor-pointer "
            disabled={isLoading}
          >
            {isLoading ? <Loading></Loading> : <ImSearch />}
          </button>
        </div>
        {/* {isLoading && <Loading></Loading>} */}
      </form>
    </div>
  );
};

export default SearchBanner;
