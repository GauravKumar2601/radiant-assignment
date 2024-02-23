import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <nav>
      <ul className="header">
        <li>
          <SearchBar />
        </li>
        <li>Categories</li>
        <li>Website Builders</li>
        <li>Today's Deals</li>
      </ul>
    </nav>
  );
};

export default Header;
