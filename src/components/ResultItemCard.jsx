import React from "react";

const ResultItemCard = ({ resultItemCard }) => {
  const { title, itemName, image, badges, newPrice, oldPrice, discount } =
    resultItemCard;

  return (
    <div className="resultItemCard">
      <img src={image} alt="" />
      <div className="badges">
        {badges.map((item, index) => (
          <div key={index} className="badge">
            {item}
          </div>
        ))}
      </div>
      <h4>{title}</h4>
      <p>{itemName}</p>
      <div className="price">
        <span className="newPrice">${newPrice}</span>
        <span className="oldPrice">${oldPrice}</span>
        <span className="discount">({discount}% Off)</span>
      </div>
      <button className="viewDealBtn">
        <span>View Deal</span>
      </button>
    </div>
  );
};

export default ResultItemCard;
