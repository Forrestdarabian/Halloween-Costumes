import React from "react";
import "../App.css";
import ghost from "../icons/ghost.svg";
import { NavLink } from "react-router-dom";

function Costumes() {
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
      <div className="bottom">
        <h1>Costumes!</h1>
        <h3>Choose a costume category below</h3>
      </div>
      <br />
      <br />
      <br />
      <NavLink to="/scary">
        <button>Scary</button>
      </NavLink>
      <NavLink to="/funny">
        <button>Funny</button>
      </NavLink>
      <NavLink to="/group">
        <button>Group</button>
      </NavLink>
      <NavLink to="/cool">
        <button>Cool</button>
      </NavLink>
      <br />
      <img src={ghost} className="App-logo" alt="logo" />
      <br />
      <footer className="footer pt-80 pt-xs-60">
        <div className="footer-container">
          <h1>Halloween Costume Recommender</h1>
          <div className="copyright">
            <p>
              © 2020
              <a>
                <b> Forrest Darabian and Grant Walton </b>
              </a>
              All Rights Reserved.
            </p>
          </div>
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
              www.flaticon.com
            </a>
          </div>
          <div className="left">
            <h4 className="something">Contact / Links</h4>
            <li>
              {" "}
              <a href="mailto:forrestdarabian@gmail.com">
                <i className="ion-ios-email fa-icons"></i>
                Contact Me
              </a>{" "}
            </li>
            <li>
              <a href="https://www.forrestdarabian.com/">
                <i className="fa-angle-double-right"></i>Developers Site
              </a>
            </li>
          </div>
        </div>
      </footer>{" "}
    </div>
  );
}

export default Costumes;
