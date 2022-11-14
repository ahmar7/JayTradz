import React from "react";
import { LeftReward, RightReward } from "../../../utils/allImgs";
import "./rewards.css";
const Rewards = () => {
  return (
    <div className="rewards-section">
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
      <div className="left-reward">
        <img src={LeftReward} alt="" />
      </div>
      <div className="right-reward">
        <img src={RightReward} alt="" />
      </div>
    </div>
  );
};

export default Rewards;
