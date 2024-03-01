import React from "react";
import "./Footer.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div className="footer__container">
        <div className="footer__icons">
          <FaXTwitter size={24} />
          <FaInstagram size={24} />
          <FaLinkedin size={24} />
          <FaFacebook size={24} />
        </div>
        <div className="footer__links">
          <ul>
            <h4>Company</h4>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <ul>
            <h4>Company</h4>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <ul>
            <h4>Company</h4>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
