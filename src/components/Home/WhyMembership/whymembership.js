import React from "react";
import { Affiliate, ArrowDown, TickSquare } from "../../../utils/allImgs";
import "./membership.css";
const Whymembership = () => {
  return (
    <div className="rewards-section">
      <h1 className="section-heading">
        WHY GET A JAYTRADZ <br /> MEMBERSHIP?
      </h1>

      <div className="sliders why">
        <div className="section-slider">
          <div className="left-head">
            <img src={TickSquare} alt="" />
            <h3>Open for global participants </h3>
          </div>
          <div className="right-arrow">
            <img src={ArrowDown} alt="" />
          </div>
        </div>
        <div className="section-slider">
          <div className="left-head">
            <img src={TickSquare} alt="" />
            <h3>Free from corporate and government interference </h3>
          </div>
          <div className="right-arrow">
            <img src={ArrowDown} alt="" />
          </div>
        </div>
        <div className="section-slider">
          <div className="left-head">
            <img src={TickSquare} alt="" />
            <h3>Efficiency of payment transactions</h3>
          </div>
          <div className="right-arrow">
            <img src={ArrowDown} alt="" />
          </div>
        </div>
        <div className="section-slider">
          <div className="left-head">
            <img src={TickSquare} alt="" />
            <h3>Maximum Membership Reward Points:</h3>
          </div>
          <div className="right-arrow">
            <img src={ArrowDown} alt="" />
          </div>
        </div>
        <div className="section-slider">
          <div className="left-head">
            <img src={TickSquare} alt="" />
            <h3>Increased liquidity for Members</h3>
          </div>
          <div className="right-arrow">
            <img src={ArrowDown} alt="" />
          </div>
        </div>
        <div className="section-slider">
          <div className="left-head">
            <img src={TickSquare} alt="" />
            <h3>ETHEREUM Blockchain compliant</h3>
          </div>
          <div className="right-arrow">
            <img src={ArrowDown} alt="" />
          </div>
        </div>
      </div>
      <div className="affiliate-area">
        <h1 className="section-heading">our affiliates</h1>
        <div className="affiliate-img">
          <img src={Affiliate} alt="" />
          <img src={Affiliate} alt="" />
          <img src={Affiliate} alt="" />
          <img src={Affiliate} alt="" />
          <img src={Affiliate} alt="" />
          <img src={Affiliate} alt="" />
          <img src={Affiliate} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Whymembership;
