import React from "react";
import { Link } from "react-router-dom";
import {
  Discord,
  DiscordFooter,
  fbFooter,
  LocationIco,
  Logo,
  SmsIco,
  TwitterFooter,
} from "../../utils/allImgs";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-outer">
        <div className="footer-logo">
          <img src={Logo} alt="" />
          <div className="loction-line">
            <img src={LocationIco} alt="" />
            <span>68 Circular Road, #02-01 Singapore 049422</span>
          </div>
          <div className="loction-line">
            <img src={SmsIco} alt="" />
            <span>info@jaytradz.com </span>
          </div>
          <div className="social-icons">
            <a href="">
              <img src={TwitterFooter} alt="" />
            </a>
            <a href="">
              <img src={fbFooter} alt="" />
            </a>
            <a href="">
              <img src={DiscordFooter} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-logo">
          <div className="loction-line">
            <ul>
              <li className="navigation">
                <h2>Navigation</h2>
              </li>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Our Program</Link>
              </li>
              <li>
                <Link>Mission</Link>
              </li>
              <li>
                <Link>Memberships</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-logo">
          <div className="loction-line">
            <ul>
              <li className="navigation">
                <h2>Navigation</h2>
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
            </ul>
          </div>
        </div>
        <div className="footer-logo">
          <div className="loction-line">
            <ul>
              <li className="navigation">
                <h2>Legal</h2>
              </li>
              <li>
                <Link>Disclaimer</Link>
              </li>
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link>Terms & Conditions</Link>
              </li>
              <li>
                <Link>AML & KYC</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2020. JayTradz.com</p>
      </div>
    </div>
  );
};

export default Footer;
