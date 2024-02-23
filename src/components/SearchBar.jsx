import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <form>
      <input type="text" placeholder="" className="searchInput" />
      <button type="submit" className="searchBtn">
        <CiSearch className="searchIcon" id="searchIcon" />
      </button>
    </form>
  );
};

export default SearchBar;
