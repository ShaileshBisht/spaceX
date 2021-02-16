import React from "react";
import "./App.css";
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
