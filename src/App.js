import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./component/Hero";
import Appbar from "./component/Appbar";
import About from "./component/About";
import Explore from "./component/Explore";

function App() {
  return (
    <div className="app">
      <Router>
        <Appbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Hero />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
