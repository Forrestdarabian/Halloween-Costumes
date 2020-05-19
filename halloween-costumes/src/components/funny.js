import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import face from "../icons/face.svg";
import whoopie from "../costumes/whoopie.jpg";
import jae from "../costumes/jae.jpg";
import cereal from "../costumes/cereal.jpg";
import queen from "../costumes/queen.jpg";
import emoji from "../costumes/emoji.jpg";

function Funny() {
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
      <h1 className="costume">Funny Costumes</h1>
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
        <img src={whoopie} className="App-logo" alt="logo" />
        <h3 className="costume">Whoopie Cushion</h3>
        <p>Who doesn't love an original Whoopie Cushion costume?</p>
        <img src={jae} className="App-logo" alt="logo" />
        <h3 className="costume">Jake from State Farm</h3>
        <p>
          Over the past couple years, the "Jake from State Farm" commercial has
          been making people crack-up laughing! Why not be him this year?
        </p>
        <img src={cereal} className="App-logo" alt="logo" />
        <h3 className="costume">Cereal Box</h3>
        <p>The possibilities are almost endless with this one! Go crazy!</p>
        <img src={queen} className="App-logo" alt="logo" />
        <h3 className="costume">The Queen</h3>
        <p>Yes, we had to include the Queen here...</p>
        <img src={emoji} className="App-logo" alt="logo" />
        <h3 className="costume">Emoji</h3>
        <p>Cringe? Maybe a little.</p>
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

export default Funny;
