import React from "react";
import TitleSection from "../components/TitleSection";
import Breadcrumbs from "../components/Breadcrumbs";
import ResultsList from "../components/ResultsList";
import RelatedResults from "../components/RelatedResults";
import SignupSection from "../components/SignupSection";

const Homepage = () => {
  return (
    <main className="homepage">
      <TitleSection />
      <Breadcrumbs />
      <ResultsList />
      <RelatedResults />
      <SignupSection />
    </main>
  );
};

export default Homepage;
