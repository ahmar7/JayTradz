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
              <Link className="active">
                Home
                <span class="underline"></span>
              </Link>
            </li>
            <li>
              <Link>
                Our Program
                <span class="underline"></span>
              </Link>
            </li>
            <li>
              <Link>Mission</Link>
            </li>
            <li>
              <Link>Memberships</Link>
            </li>
            <li>
              <Link>Rewards</Link>
            </li>
            <li>
              <Link>Benefits </Link>
            </li>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Brochure</Link>
            </li>
            <li className="sign-btn">
              <button>Sign in</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
