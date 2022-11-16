import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Close, Logo, Menu } from "../../utils/allImgs";
import "./navbar.css";
const Navbar = () => {
  const [sideactive, setSideactive] = useState(false);

  const toggleBar = () => {
    setSideactive(true);
  };
  const closeBar = () => {
    setSideactive(false);
  };
  if (sideactive) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="navbar-section">
      <div className="navbar-main">
        <div className="left-bar">
          <img src={Logo} alt="" />
        </div>
        <div
          onClick={closeBar}
          className={sideactive ? " overlay " : "hide-it"}
        ></div>
        <div className="right-bar">
          <ul className={sideactive ? "modalup" : "hide-it"}>
            <li className="mobile-close">
              <img onClick={closeBar} src={Close} alt="" />
            </li>
            <li>
              <a href="#" onClick={closeBar} className="active">
                Home
                <span class="underline"></span>
              </a>
            </li>
            <li>
              <a href="#program" onClick={closeBar}>
                Our Program
                <span class="underline"></span>
              </a>
            </li>
            <li>
              <a href="#mission" onClick={closeBar}>
                Mission
              </a>
            </li>
            <li>
              <a href="#membership" onClick={closeBar}>
                Memberships
              </a>
            </li>
            <li>
              <a href="#rewards" onClick={closeBar}>
                Rewards
              </a>
            </li>
            <li>
              <a href="#benefits" onClick={closeBar}>
                Benefits
              </a>
            </li>
            <li>
              <a href="" onClick={closeBar}>
                FAQ
              </a>
            </li>
            <li>
              <a
                href="../../assets/doc/JayTradz-Brochure.pdf"
                onClick={closeBar}
              >
                Brochure
              </a>
            </li>
            <li className="sign-btn">
              <button>Sign in</button>
            </li>
          </ul>
          <div className="mobile-bar">
            <img onClick={toggleBar} src={Menu} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
