import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container1">
        <ul className="categories">
          <li>
            <h4>CATEGORIES</h4>
          </li>
          <li>Web Builder</li>
          <li>Hosting</li>
          <li>Data Center</li>
          <li>Robotic-Automation</li>
        </ul>

        <ul className="contact">
          <li>
            <h4>CONTACT</h4>
          </li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms Of Service</li>
          <li>Categories</li>
          <li>About</li>
        </ul>
      </div>
      <div className="container2">
        <div className="country">
          <span>United States</span>
          <button className="dropdownbtn">
            <IoIosArrowDropdown className="dropdownIcon" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
