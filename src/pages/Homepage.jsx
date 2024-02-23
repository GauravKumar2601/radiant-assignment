import React from "react";
import TitleSection from "../components/TitleSection";
import Breadcrumbs from "../components/Breadcrumbs";
import ResultsList from "../components/ResultsList";
import RelatedResults from "../components/RelatedResults";
import SignupSection from "../components/SignupSection";

const Homepage = () => {
  return (
    <div className="homepage">
      <TitleSection />
      <Breadcrumbs />
      <ResultsList />
      <RelatedResults />
      <SignupSection />
    </div>
  );
};

export default Homepage;
