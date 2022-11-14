import React from "react";
import {
  Detail1,
  Detail2,
  LeftPolly,
  RightPolly,
} from "../../../utils/allImgs";
import "./details.css";
const Details = () => {
  return (
    <div className="detail-section">
      <div className="upper-left">
        <img src={LeftPolly} alt="" />
      </div>
      <div className="upper-right">
        <img src={RightPolly} alt="" />
      </div>
      {/* <div className="bottom-left">
        <img src={LeftPolly} alt="" />
      </div>
      <div className="bottom-right">
        <img src={RightPolly} alt="" />
      </div> */}
      <div className="detail-flex">
        <div className="detail-left">
          <img src={Detail1} alt="" />
        </div>
        <div className="detail-right">
          <h1>Our Program</h1>
          <p>
            The JayTradz team gives our members the premier resource for
            learning all things crypto. From the foundational background of
            crypto, to research on its future, you will have all the knowledge
            for your success at your fingertips. We have a vast catalog of
            educational material, video content, tutorials, and quizzes that
            will help you know all there is to know about the future...which is
            crypto.
          </p>
        </div>
      </div>
      <div className="detail-flex anti">
        <div className="detail-left">
          <img src={Detail2} alt="" />
        </div>
        <div className="detail-right">
          <h1>1. Basics of Crypto</h1>
          <p>
            The JayTradz team gives our members the premier resource for
            learning all things crypto. From the foundational background of
            crypto, to research on its future, you will have all the knowledge
            for your success at your fingertips. We have a vast catalog of
            educational material, video content, tutorials, and quizzes that
            will help you know all there is to know about the future...which is
            crypto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
