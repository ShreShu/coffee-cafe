import React from "react";
import { Link } from "react-router-dom";
import "./MenuLink.css";
const MenuLink = ({ name, path, onClick }) => {
  return (
    <div className="menulink">
      <Link to={path} onClick={onClick}>
        {name}
      </Link>
    </div>
  );
};

export default MenuLink;
