import React from "react";
import "../App.css";
import monster from "../icons/monster.svg";
import { NavLink } from "react-router-dom";

function Home() {
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
      <h1 className="bottom">Welcome Home!</h1>
      <h6>This is where everything starts</h6>
      <p>this is a paragraph talking about the home page</p>
      <p>
        Click <a href="/about">here</a> for the about page
      </p>
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
      </footer>
    </div>
  );
}

export default Home;
