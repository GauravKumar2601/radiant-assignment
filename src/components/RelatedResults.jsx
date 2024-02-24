import React from "react";
import ResultItemCard from "./ResultItemCard";
import resultItemCards from "../data/resultItemCards.js";

const RelatedResults = () => {
  return (
    <div className="relatedResults">
      <h2>Related deals you might like for</h2>
      <div className="itemCardsBox">
        {resultItemCards.map((item, index) => (
          <ResultItemCard key={index} resultItemCard={item} />
        ))}
      </div>
    </div>
  );
};

export default RelatedResults;
