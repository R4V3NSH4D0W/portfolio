import React from "react";
import "./Work.css";
import RecentWorks from "./RecentWorks";

const Works = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most Recent Works</span>
      <RecentWorks />
    </section>
  );
};

export default Works;
