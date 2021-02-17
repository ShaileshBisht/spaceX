import React from "react";
import "./Appbar.css";
import logo from "../assets/spaceLogo.png";
import { useHistory } from "react-router-dom";

function Appbar() {
  const history = useHistory();

  return (
    <div className="appbar">
      <div className="appbar_logo">
        <img onClick={() => history.push("/")} src={logo} alt="spaceX" />
      </div>
    </div>
  );
}

export default Appbar;
