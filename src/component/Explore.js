import React from "react";
import { useHistory } from "react-router-dom";
import "./Explore.css";
import ExploreCard from "./ExploreCard";

function Explore() {
  const history = useHistory();

  return (
    <div className="explore">
      <div className="explore_section">
        <div className="explore_top">
          <p>Explore</p>
          <button
            onClick={() => history.push("/")}
            className="btn explore-back"
          >
            back
          </button>
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
    </div>
  );
}

export default Explore;
