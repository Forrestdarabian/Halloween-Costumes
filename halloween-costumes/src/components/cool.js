import React from "react";
import "../App.css";
import piratre from "../costumes/piratre.jpg";
import edward from "../costumes/edward.jpg";
import killbill from "../costumes/killbill.jpg";
import hotdog from "../costumes/hotdog.jpg";
import hero from "../costumes/hero.jpg";

import { NavLink } from "react-router-dom";

function Cool() {
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
      <h1 className="costume">Cool Costumes</h1>
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
      <div className="pictures">
        <img src={hero} className="App-logo" alt="logo" />
        <h3 className="costume">Superhero</h3>
        <p>
          Superheroes are always a great costume idea and have been popular for
          decades!
        </p>
        <img src={piratre} className="App-logo" alt="logo" />
        <h3 className="costume">Pirate</h3>
        <p>A Pirate costume is something you can totally get creative with!</p>
        <img src={edward} className="App-logo" alt="logo" />
        <h3 className="costume">Edward Scissorhands</h3>
        <p>
          A true classic never goes out of style! Edward Scissorhands is always
          a fun costume choice!
        </p>
        <img src={killbill} className="App-logo" alt="logo" />
        <h3 className="costume">Kill Bill</h3>
        <p>
          Get some revenge this Halloween and dress up as the infamous Bride
          from the Kill Bill movies!
        </p>
        <img src={hotdog} className="App-logo" alt="logo" />
        <h3 className="costume">Hot Dog</h3>
        <p>
          Yep this one is pretty funny, but we thought we'd include it in the
          "Cool" category!
        </p>
      </div>
      <br />
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

export default Cool;
