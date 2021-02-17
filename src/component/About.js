import React from "react";
import { useHistory } from "react-router-dom";
import "./About.css";

function About() {
  const history = useHistory();

  return (
    <div className="about">
      <div className="about_discription">
        <h1>ABOUT</h1>
        <p>
          SpaceX is the innovative and ambitious private aerospace manufacturer
          founded in 2002 by Elon Musk. But SpaceX truly earned its place among
          the aeronautical elite—and changed the economics of space flight­—by
          making its reusable rocket system seemingly as reliable as the
          sunrise: Throughout the year, it landed eight rockets on ocean-based
          drone platforms and sent three refurbished ones right back into the
          skies.
        </p>
      </div>
      <div className="about_button">
        <button onClick={() => history.push("/")} className="btn about-btn">
          Back
        </button>
      </div>
    </div>
  );
}

export default About;
