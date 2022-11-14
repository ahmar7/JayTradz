import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../utils/allImgs";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-section">
      <div className="navbar-main">
        <div className="left-bar">
          <img src={Logo} alt="" />
        </div>
        <div className="right-bar">
          <ul>
            <li>
              <Link>Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
