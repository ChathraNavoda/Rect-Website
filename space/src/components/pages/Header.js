import React from "react";
import moonLogo from "../assets/moon-1.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={moonLogo} alt="moon-logo" />
      </div>
    </div>
  );
};

export default Header;
