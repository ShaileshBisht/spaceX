import React from "react";
import "./ExploreCard.css";
import exp1 from "../assets/images/explore7.jpg";

function ExploreCard() {
  return (
    <div className="exploreCard">
      <div className="exploreCard_top">
        <img className="exploreCard_img" src={exp1} alt="" />
      </div>

      <div className="ExploreCard_discription">
        <div className="exploreCard_discription-top">
          <h1>Mission</h1>
          <button className="btn explore-btn">learn more</button>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam beatae
          eius veritatis corporis architecto quas quae expedita ipsa iusto
          voluptatum repellendus, dignissimos hic harum aperiam illum suscipit
          similique ipsum quis?
        </p>
      </div>
    </div>
  );
}

export default ExploreCard;
