import React from "react";
import "../App.css";
import skeleton from "../icons/skeleton.svg";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div className="body">
      <header className="behind">
        <div>
          <br />
          <h1 className="top">Halloween Costume Recommender</h1>
          <NavLink to="/">
            <button>Home</button>
          </NavLink>
          <NavLink to="/About">
            <button>About</button>
          </NavLink>
          <NavLink to="/costumes">
            <button>Costumes</button>
          </NavLink>
        </div>
      </header>
      <h1 className="bottom">About Us!</h1>
      <br />
      <p>This is the about page where you can learn about the developers.</p>

      <br />
      <img src={skeleton} className="App-logo" alt="logo" />
      <br />
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
        <br />
      </footer>
    </div>
  );
}

export default About;
