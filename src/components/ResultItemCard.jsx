import React from "react";

const ResultItemCard = () => {
  return (
    <div className="resultItemCard">
      <img src="../../img/itemImage.png" alt="" />
      <div className="badges">
        <div className="badge">20% Off</div>
        <div className="badge">Limited time</div>
      </div>
      <h4>Webbuilder 1</h4>
      <p>Computer Modern clasic with wix support</p>
      <div className="price">
        <span className="newPrice">$39,96</span>
        <span className="oldPrice">$49.96</span>
        <span className="discount">(20% Off)</span>
      </div>
      <button className="viewDealBtn">View Deal</button>
    </div>
  );
};

export default ResultItemCard;
