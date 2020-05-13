import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Costumes from "./components/costumes";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/costumes" component={Costumes} />
      </Switch>
    </div>
  );
}

export default App;
