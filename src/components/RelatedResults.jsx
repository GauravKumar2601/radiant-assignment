import React from "react";
import ResultItemCard from "./ResultItemCard";

const RelatedResults = () => {
  return (
    <div className="relatedResults">
      <h2>Related deals you might like for</h2>
      <div className="itemCardsBox">
        <ResultItemCard />
        <ResultItemCard />
        <ResultItemCard />
      </div>
    </div>
  );
};

export default RelatedResults;
