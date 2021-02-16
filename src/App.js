import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./component/Hero";
import Appbar from "./component/Appbar";

function App() {
  return (
    <div className="app">
      <Appbar />
      <Hero />
    </div>
  );
}

export default App;
