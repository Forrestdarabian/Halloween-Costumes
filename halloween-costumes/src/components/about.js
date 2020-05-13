import React from "react";
import "../App.css";
import fun from "../icons/fun.svg";
import { NavLink } from "react-router-dom";

function About() {
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
      <h1>About us!</h1>
      <img src={fun} className="App-logo" alt="logo" />
      <p className="DaBruddah">Can I get the the "Dah Bruddah"</p>
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

export default About;
