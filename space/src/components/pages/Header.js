import React from "react";
import { Close, MenuOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import moonLogo from "../assets/moon-1.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={moonLogo} alt="moon-logo" />
      </div>
      <div className="hamburger-icon">
        <MenuOutlined />
      </div>

      <nav>
        <ul className="list-items">
          <div className="close-icon">
            <Close className="icon" />
          </div>
          <li>
            <Link to="/">Home</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Designs</Link>
            <Link to="/">Pricing</Link>
            <Link to="/">Contact</Link>
            <Link to="/">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
