import React from "react";
import "../App.css";
import ghost from "../icons/ghost.svg";
import { NavLink } from "react-router-dom";
import scoob from "../costumes/scoob.jpg";
import spice from "../costumes/spice.jpg";
import tmnt from "../costumes/TMNT.jpg";
import juice from "../costumes/juice.png";
import smurfs from "../costumes/smurfs.png";

function Group() {
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
      <h1 className="costume">Group Costumes</h1>
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
        <img src={scoob} className="App-logo" alt="logo" />
        <h3 className="costume">Mystery Inc.</h3>
        <p>
          Celebrate your love for Scooby-Doo with your friends and dress up as
          Mystery Incorporated!
        </p>
        <img src={spice} className="App-logo" alt="logo" />
        <h3 className="costume">Spice Girls</h3>
        <p>
          Throw it back this Halloween and dress up as the Spice Girls with your
          girls (or boys!)
        </p>
        <img src={tmnt} className="App-logo" alt="logo" />
        <h3 className="costume">Teenage Mutant Ninja Turtles</h3>
        <p>Green face paint? Check. Or maybe just a mask...</p>
        <img src={juice} className="App-logo" alt="logo" />
        <h3 className="costume">BeetleJuice Couple</h3>
        <p>Embrace the dead with your lover this October!</p>
        <img src={smurfs} className="App-logo" alt="logo" />
        <h3 className="costume">Smurfs</h3>
        <p>Who doesn't love those little blue people?</p>
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

export default Group;
