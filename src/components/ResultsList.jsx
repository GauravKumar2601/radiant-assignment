import React from "react";
import ResultItem from "./ResultItem";
import resultItems from "../data/resultItems.js";

const ResultList = () => {
  return (
    <section className="resultList">
      {resultItems.map((item) => (
        <ResultItem key={item.id} resultItem={item} />
      ))}
    </section>
  );
};

export default ResultList;
