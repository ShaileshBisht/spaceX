import React from "react";
import "./Hero.css";
import ved from "../assets/spaceX6X.mp4";

function Hero() {
  return (
    <div className="hero">
      <div className="hero_video">
        <video autoPlay muted loop src={ved}></video>
      </div>
      <div className="hero_discrption">
        <div className="discription">
          <div className="discription_top">
            <h1>
              it's a <span>fixed-upper</span> of a planet
            </h1>
            <h1>but we could make it work.</h1>
          </div>
          <div className="discription_bottom">
            <h1>elon musk</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
