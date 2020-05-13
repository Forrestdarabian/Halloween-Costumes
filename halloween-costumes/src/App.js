import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Costumes from "./components/costumes";
import Scary from "./components/scary";
import Funny from "./components/funny";
import Group from "./components/group";
import Cool from "./components/cool";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/costumes" component={Costumes} />
        <Route path="/scary" component={Scary} />
        <Route path="/funny" component={Funny} />
        <Route path="/group" component={Group} />
        <Route path="/cool" component={Cool} />
      </Switch>
    </div>
  );
}

export default App;
