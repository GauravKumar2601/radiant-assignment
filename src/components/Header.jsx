import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    const navbar = document.getElementById("header");

    if (showNavbar) {
      setShowNavbar(false);
      navbar.style.display = "flex";
    } else {
      setShowNavbar(true);
      navbar.style.display = "none";
    }
  };

  return (
    <nav>
      <div className="menuIcon" onClick={toggleNavbar}>
        {showNavbar ? <FaBars /> : <FaTimes />}
      </div>
      <ul className="header" id="header">
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
