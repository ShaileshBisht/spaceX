import React from "react";
import "./Hero.css";
import ved from "../assets/spaceX6X.mp4";
import { useHistory } from "react-router-dom";

function Hero() {
  const history = useHistory();

  return (
    <div className="hero">
      <div className="hero_video">
        <video autoPlay muted loop src={ved}></video>
      </div>
      <div className="hero_discrption">
        <div className="discription">
          <div className="discription_top">
            <p>
              it's a <span>fixed-upper</span> of a planet
            </p>
            <p>but we could make it work.</p>
          </div>
          <div className="discription_bottom">
            <p>-elon musk-</p>
          </div>
        </div>
      </div>
      <div className="hero_button">
        <button
          onClick={() => history.push("/explore")}
          className="btn hero-btn"
        >
          explore
        </button>
        <button
          onClick={() => history.push("/about")}
          className="btn btn-about"
        >
          about
        </button>
      </div>
    </div>
  );
}

export default Hero;
