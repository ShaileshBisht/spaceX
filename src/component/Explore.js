import React from "react";
import "./Explore.css";
import ExploreCard from "./ExploreCard";

function Explore() {
  return (
    <div className="explore">
      <div className="explore_top">
        <p>Explore</p>
      </div>
      <div className="explore_bottom">
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
      </div>
    </div>
  );
}

export default Explore;
