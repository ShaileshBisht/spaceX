import React from "react";
import "./ExploreCard.css";
import exp1 from "../assets/images/explore1.jpg";

function ExploreCard() {
  return (
    <div className="exploreCard">
      <img className="exploreCard_img" src={exp1} alt="" />
      <div className="ExploreCard_discription">
        <p>Mission</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam beatae
          eius veritatis corporis architecto quas quae expedita ipsa iusto
          voluptatum repellendus, dignissimos hic harum aperiam illum suscipit
          similique ipsum quis?
        </p>
        <button className="btn explore-btn">learn more</button>
      </div>
    </div>
  );
}

export default ExploreCard;
