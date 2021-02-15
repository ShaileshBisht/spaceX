import React from "react";
import "./Hero.css";
import ved from "../assets/spaceX4X.mp4";

function Hero() {
  return (
    <div className="hero">
      <div className="hero_video">
        <video autoPlay muted loop src={ved}></video>
      </div>
      <div className="hero_discrption"></div>
    </div>
  );
}

export default Hero;
