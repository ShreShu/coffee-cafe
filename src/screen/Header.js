import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../assests/logo.jpg";
import Example from "../Example/Example";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/" className="header__logo">
          <img src={logo} alt="" />
        </Link>
        <Link to="/menu" className="header__link">
          Menu
        </Link>
        <Link to="/menu" className="header__link">
          Menu
        </Link>
        <Link to="/menu" className="header__link">
          Menu
        </Link>
      </div>
      <div className="header__right">
        <Example />
      </div>
    </div>
  );
};

export default Header;
