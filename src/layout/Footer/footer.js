import React from "react";
import { Link } from "react-router-dom";
import {
  Discord,
  DiscordFooter,
  fbFooter,
  FooterLogo,
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
          <img className="footer-img" src={FooterLogo} alt="" />
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
        <div className="footer-logo text-center">
          <div className="loction-line">
            <ul>
              <li className="navigation">
                <h2>Navigation</h2>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#program">Our Program</a>
              </li>
              <li>
                <a href="#mission">Mission</a>
              </li>
              <li>
                <a href="#membership">Memberships</a>
              </li>
              <li className="mbl-only">
                <a href="#rewards">Rewards</a>
              </li>
              <li className="mbl-only">
                <a href="#benefits">Benefits </a>
              </li>
              <li className="mbl-only">
                <a href="">FAQ</a>
              </li>
              <li className="mbl-only">
                <a href="../../assets/doc/JayTradz-Brochure.pdf">Brochure</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-logo text-center desk-only">
          <div className="loction-line">
            <ul>
              <li className="navigation">
                <h2>Navigation</h2>
              </li>
              <li>
                <a href="#rewards">Rewards</a>
              </li>
              <li>
                <a href="#benefits">Benefits </a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="../../assets/doc/JayTradz-Brochure.pdf">Brochure</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-logo text-center">
          <div className="loction-line">
            <ul>
              <li className="navigation">
                <h2>Legal</h2>
              </li>
              <li>
                <a href="">Disclaimer</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="">AML & KYC</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2023. JayTradz.com</p>
      </div>
    </div>
  );
};

export default Footer;
