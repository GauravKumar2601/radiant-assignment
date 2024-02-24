import React from "react";
import { GoTrophy } from "react-icons/go";
import { BsGem } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";
import StarRating from "./StarRating";

const ResultItem = ({ resultItem }) => {
  const {
    title,
    bestChoice,
    bestValue,
    serialNo,
    itemName,
    image,
    itemDescription,
    discount,
    mainHighlights,
    highlightFeatures,
    extraFeatures,
    rating,
    ratingText,
    starsImage,
  } = resultItem;

  return (
    <article className="resultItem">
      {bestChoice && (
        <div className="bestChoice">
          <GoTrophy className="trophyIcon" /> Best Choice
        </div>
      )}
      {bestValue && (
        <div className="bestChoice">
          <BsGem className="trophyIcon" /> Best Value
        </div>
      )}
      <div className="serialNo">
        <span>{serialNo}</span>
      </div>
      <div className="itemContent">
        <div className="itemImage">
          <img src={image} alt="Result Image" />
          <span className="imageCaption">{title}</span>
        </div>
        <div className="itemInfo">
          <p>
            <strong>{itemName}</strong> - {itemDescription}
          </p>
          {discount && (
            <div className="badge" style={{ marginTop: "8px" }}>
              {discount}
            </div>
          )}
          <h6>Main highlights</h6>
          {mainHighlights && <p className="mainText">{mainHighlights}</p>}
          {highlightFeatures && (
            <div className="highlightFeatures">
              {highlightFeatures.map((item, index) => {
                return (
                  <div key={index} className="featureDiv">
                    <div className="subRating">{item.subRating}</div>
                    <p>{item.feature}</p>
                  </div>
                );
              })}
            </div>
          )}
          {extraFeatures && (
            <div className="extraFeatures">
              <span>Why we love it</span>
              {extraFeatures.map((item, index) => {
                return (
                  <div key={index} className="extraDiv">
                    <img
                      src="../../img/check.png"
                      alt="checkIcon"
                      className="checkImg"
                    />
                    <p key={index}>{item}</p>
                  </div>
                );
              })}
            </div>
          )}
          <button className="showBtn">
            Show more <FaChevronDown className="downIcon" />
          </button>
        </div>
        <div className="itemRating">
          <div className="ratingBox">
            <IoInformationCircleOutline
              className="ratingInfoIcon"
              style={{ fontSize: "13px" }}
            />
            <h2>{rating}</h2>
            <span>{ratingText}</span>
            <StarRating rating={rating} />
          </div>
          <button className="viewBtn">View</button>
        </div>
      </div>
    </article>
  );
};

export default ResultItem;
