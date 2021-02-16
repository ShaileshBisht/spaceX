import React from "react";
import "./Appbar.css";
import logo from "../assets/spaceLogo.png";

function Appbar() {
  return (
    <div className="appbar">
      <div className="hero_logo">
        <img src={logo} alt="spaceX" />
      </div>
    </div>
  );
}

export default Appbar;
