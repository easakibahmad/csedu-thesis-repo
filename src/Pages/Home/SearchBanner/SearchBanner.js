// import { ImSearch } from "react-icons/im";
// import { Link } from "react-router-dom";

// const SearchBanner = () => {
//   return (
//     <div className="w-2/3 md:w-1/2 mx-auto">
//       <h1 className="text-2xl font-bold md:text-4xl text-center">
//         CSEDU Thesis Repository
//       </h1>

//       <div className="flex justify-center my-6 items-center">
//         <input
//           type="text"
//           name="searchText"
//           placeholder="Search Articles"
//           className="input input-bordered rounded-none  w-3/4"
//         />
//         <Link
//           to="/about"
//           className="text-2xl hover:bg-blue-700 bg-blue-500 text-white p-3 cursor-pointer "
//         >
//           <ImSearch></ImSearch>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default SearchBanner;
import { useState } from "react";
import { ImSearch } from "react-icons/im";
// import { Link, useHistory } from "react-router-dom";

const SearchBanner = () => {
  const [searchText, setSearchText] = useState("");
  // const history = useHistory();

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // history.push("/about");
    console.log(searchText); // logs the input value
    // do something with the input value, such as search for articles
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
            className="input input-bordered rounded-none  w-3/4"
            value={searchText}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="text-2xl hover:bg-blue-700 bg-blue-500 text-white p-3 cursor-pointer "
          >
            <ImSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBanner;
