import React from "react";
import { GoTrophy } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa6";

const ResultItem = () => {
  return (
    <div className="resultItem">
      <div className="bestChoice">
        <GoTrophy className="trophyIcon" /> Best Choice
      </div>
      <div className="serialNo">
        <span>1</span>
      </div>
      <div className="itemContent">
        <div className="itemImage">
          <img src="../../img/itemImage.png" alt="Result Image" />
          <span className="imageCaption">Builder 1</span>
        </div>
        <div className="itemInfo">
          <p>
            <strong>WixPro 72-inch Responsive Website Builder</strong> -
            Comprehensive Digital Platform Creation Tool, Streamlined Design
            Interface for Professional Websites and Online Stores (Black/Blue)
          </p>
          <h6>Main highlights</h6>
          <p className="mainText">
            [What You Get]: Receive the WixPro website builder suite, access to
            premium design templates, an extensive library of widgets and apps,
            and detailed step-by-step guides.
          </p>
          <button className="showBtn">
            Show more <FaChevronDown className="downIcon" />
          </button>
        </div>
        <div className="itemRating">
          <div className="ratingBox">
            <h2>9.8</h2>
            <span>Exceptional</span>
            <span>
              <img src="../../img/stars.png" alt="" />
            </span>
          </div>
          <button className="viewBtn">View</button>
        </div>
      </div>
    </div>
  );
};

export default ResultItem;
