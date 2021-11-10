import React from "react";
import Logo from "../img/logo.png";
import GitIcon from "../img/github.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="teal darken-2">
        <div className="nav-wrapper teal darken-2">
          <Link to="/">
            <div className="brand-logo">
              React Movies <img src={Logo} alt="logo" className="logoIcon" />
            </div>
          </Link>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a
                href="https://github.com/lenariem/react-film-search"
                title="Repo on GitHub"
                target="blank"
              >
                <img src={GitIcon} alt="github link" className="gitIcon" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
