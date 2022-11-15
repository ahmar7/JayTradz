import React from "react";
import {
  ArrowDown,
  LeftReward,
  RightReward,
  TickSquare,
} from "../../../utils/allImgs";
import "./rewards.css";
const Rewards = () => {
  return (
    <div className="rewards-section">
      <div className="left-reward">
        <img src={LeftReward} alt="" />
      </div>
      <div className="right-reward">
        <img src={RightReward} alt="" />
      </div>
      <h1 className="section-heading">Rewards</h1>
      <p className="section-detail">
        As a member, you will earn MONTHLY reward points for your participation.
        These points are distributed on a Monthly, Quarterly, and Semi-Annual
        basis. The reward points are a percentage of your membership package
        with our program; and can reach up to 4%, 6% and 8% per month,
        respectively. (Ex: A Presidential membership will earn up to 8k reward
        points per month, given out quarterly...approximately 24,000 reward
        points every quarter.
      </p>
      <div className="sliders">
        <div className="section-slider">
          <div className="left-head">
            <img src={TickSquare} alt="" />
            <h3>Commencement: </h3>
          </div>
          <div className="right-arrow">
            <img src={ArrowDown} alt="" />
          </div>
        </div>
        <div className="section-slider">
          <div className="left-head">
            <img src={TickSquare} alt="" />
            <h3>Earning Reward Points: </h3>
          </div>
          <div className="right-arrow">
            <img src={ArrowDown} alt="" />
          </div>
        </div>
        <div className="section-slider">
          <div className="left-head">
            <img src={TickSquare} alt="" />
            <h3>Anniversary Membership Bonus:</h3>
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
            <h3>Direct Referral Bonus: </h3>
          </div>
          <div className="right-arrow">
            <img src={ArrowDown} alt="" />
          </div>
        </div>
        <div className="section-slider">
          <div className="left-head">
            <img src={TickSquare} alt="" />
            <h3>Royalty Referral Bonus: </h3>
          </div>
          <div className="right-arrow">
            <img src={ArrowDown} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
