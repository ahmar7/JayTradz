import React from "react";
import { LeftReward, RightReward } from "../../../utils/allImgs";
import "./rewardspoint.css";
const Rewardspoint = () => {
  return (
    <div className="rewards-section" id="rewards">
      <div className="left-reward">
        <img src={LeftReward} alt="" />
      </div>
      <div className="right-reward">
        <img src={RightReward} alt="" />
      </div>
      <div className="point-box"></div>
    </div>
  );
};

export default Rewardspoint;
