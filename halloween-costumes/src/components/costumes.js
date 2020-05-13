import React from "react";
import "../App.css";
import skeleton from "../icons/skeleton.svg";
import { NavLink } from "react-router-dom";

function Costumes() {
  return (
    <div>
      <header className="behind">
        <div>
          <h1 className="top">Halloween Costume Recommender</h1>
          <NavLink to="/">
            <button>home</button>
          </NavLink>
          <NavLink to="/about">
            <button>about</button>
          </NavLink>
          <NavLink to="/costumes">
            <button>costumes</button>
          </NavLink>
        </div>
      </header>
      <h1>Costumes R' Us!</h1>
      <img src={skeleton} className="App-logo" alt="logo" />
      <p className="DaBruddah">Here are some costumes</p>
      <footer>
        <div>
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/smalllikeart"
            title="smalllikeart"
          >
            smalllikeart
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {" "}
            www.flaticon.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Costumes;
