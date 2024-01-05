import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="">
      <div className="flex flex-row items-center justify-between gap-3">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search Audiobook"
            className="py-2 w-auto lg:w-80 border border-black bg-white rounded-full  pl-8"
          />
          <FaSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-rose-500 border-black" />
        </div>
        <select className="p-3 border  hover:text-orange-300  border-gray-300 font-bold rounded-full">
          <option value=""> MENU</option>
          <option className="text-black hover:text-orange-300 ">HOME</option>
          <option className="text-black hover:text-orange-300">Details</option>
          <option className="text-black hover:text-orange-300 ">
            Category
          </option>
          <option className="text-black hover:text-orange-300 ">
            My Favorites
          </option>
          <option value="Profile" className="text-black hover:text-orange-300 ">
            Profile
          </option>
        </select>
      </div>
    </div>
  );
};

export default Search;
