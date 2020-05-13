import React from "react";
import "../App.css";
import monster from "../icons/monster.svg";
import { NavLink } from "react-router-dom";

function Home() {
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
      <h1 className="bottom">Welcome Home!</h1>
      <h6>This is where everything starts</h6>
      <p>This is the home page, you will be able to see your dashboard here.</p>
      <br />
      <img src={monster} className="App-logo" alt="logo" />
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

export default Home;
