import React from "react";
import "../App.css";
import demon from "../icons/demon.svg";
import { NavLink } from "react-router-dom";
import zombie from "../costumes/zombie.jpg";
import wtich from "../costumes/wtich.jpg";
import werewolf from "../costumes/werewolfe.jpg";
import vampire from "../costumes/vampire.jpg";
import clown from "../costumes/clown.jpg";

function Scary() {
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
      <h1 className="costume">Scary Costumes</h1>
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
        <img src={zombie} className="App-logo" alt="logo" />
        <h3 className="costume">Zombie</h3>
        <p>
          Even though the Walking Dead made zombies a little overrated, you can
          always get creative with a super scary Zombie costume!{" "}
        </p>
        <img src={werewolf} className="App-logo" alt="logo" />
        <h3 className="costume">Werewolf</h3>
        <p>
          Do you hear howling? Well, you will with a super creepy Werewolf
          ostume this year!
        </p>
        <img src={clown} className="App-logo" alt="logo" />
        <h3 className="costume">Clown</h3>
        <p>Yes, they float.</p>
        <img src={vampire} className="App-logo" alt="logo" />
        <h3 className="costume">Vampire</h3>
        <p>I VANT TO SUCK YOUR...Blood</p>
        <img src={wtich} className="App-logo" alt="logo" />
        <h3 className="costume">Witch</h3>
        <p>Dress up a super creepy (or cute) Witch this Halloween!</p>
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

export default Scary;
