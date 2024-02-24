import React from "react";
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";

const StarRating = ({ rating }) => {
  let filledStars = 5;

  if (rating >= 9.5) {
    filledStars = 5;
  } else if (rating >= 8.5 && rating < 9.5) {
    filledStars = 4;
  } else if (rating >= 7.5 && rating < 8.5) {
    filledStars = 3;
  } else if (rating >= 6.5 && rating < 7.5) {
    filledStars = 2;
  } else if (rating >= 5.5 && rating < 6.5) {
    filledStars = 1;
  }

  const isHalfStar = rating % 1 < 0.5;

  const emptyStars = 5 - filledStars - (isHalfStar ? 1 : 0);

  return (
    <div className="starRating">
      {[...Array(filledStars)].map((_, index) => (
        <span key={index}>
          <IoStar className="goldStar" />
        </span>
      ))}
      {isHalfStar && (
        <span>
          <IoStarHalf className="goldStar" />
        </span>
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={index}>
          <IoStarOutline className="goldStar" />
        </span>
      ))}
    </div>
  );
};

export default StarRating;
