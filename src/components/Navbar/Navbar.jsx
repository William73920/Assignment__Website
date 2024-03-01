import React, { useState } from "react";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="navbar__container">
      <div className="navbar__wrapper">
        <div className="navbar__logo">
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
          />
        </div>
        <div className="burger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`bar ${isMenuOpen ? "bar1" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "bar2" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "bar3" : ""}`}></div>
        </div>
        <div
          className={`overlay ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        <div className={`navbar__menu ${isMenuOpen ? "open" : ""}`}>
          <div className="navbar__logo-mobile">
            <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" />
          </div>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Login</li>
            <li>Sign Up</li>
          </ul>
        </div>
        <div className="navbar__buttons">
          <button className="navbar__button1">Log In</button>
          <button className="navbar__button">Sign Up</button>
        </div>
        <div className="navbar__profile" onClick={() => setIsMenuOpen(true)}>
          <CgProfile size={24} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
