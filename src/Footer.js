import React from "react";
import logo from "./Untitled_Artwork.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="socials">
        <a href="-">Facebook</a>
        <a href="-">Instagram</a>
        <a href="-">Kakao</a>
      </div>
      <div>
        <img className="logo2" src={logo} alt="logo"></img>
      </div>
      <div className="socials">
        <a href="-">About</a>
        <a href="-">Contact</a>
        <a href="-">Something</a>
      </div>
    </div>
  );
};

export default Footer;
