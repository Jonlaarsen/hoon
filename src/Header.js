import React from "react";
import logo from "./Untitled_Artwork.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <img className="logo" src={logo} alt="logo"></img>

      <div className="btn-container">
        <Link to="/contact">
          <button className="button">contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
