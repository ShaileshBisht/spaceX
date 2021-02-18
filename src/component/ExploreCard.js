import React, { useState, useEffect } from "react";
import "./ExploreCard.css";

function ExploreCard({ classs, title, img }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 956);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 956;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);
  //exploreCard ${classs}
  return (
    <div className={`${!isMobile ? `${classs} exploreCard` : "exploreCard"}`}>
      <div className="exploreCard_top">
        <img className="exploreCard_img" src={img} alt="" />
      </div>

      <div className="ExploreCard_discription">
        <div className="exploreCard_discription-top">
          <h1>{title}</h1>
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
