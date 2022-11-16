import React from "react";
import {
  Rectangle1,
  Rectangle2,
  Rectangle3,
  Rectangle4,
  Rectangle5,
  Rectangle6,
  Star,
} from "../../../utils/allImgs";
import "./membership.css";
const Program = () => {
  return (
    <div id="membership">
      <div className="membership-section">
        <h1 className="section-heading">Memberships</h1>
        <p className="section-detail">
          With our 1st Class Web3.0 Resource Center, and the most knowledgeable
          crypto team, we
          <span className="blk">
            have 6 Membership levels that are tailored to your knowledge level
          </span>
        </p>
        <div className="membership-cards">
          <div className="indiv-membership">
            <div className="membership-img">
              <img className="rectangle" src={Rectangle1} alt="" />
            </div>
            <div className="membership-name">
              <h3>Intern</h3>
              <div className="rating">
                <img src={Star} alt="" />
                <span>2.5</span>
              </div>
            </div>
            <div className="membership-btn">
              <button>More Info</button>
            </div>
          </div>
          <div className="indiv-membership">
            <div className="membership-img">
              <img className="rectangle" src={Rectangle2} alt="" />
            </div>
            <div className="membership-name">
              <h3>Associate</h3>
              <div className="rating">
                <img src={Star} alt="" />
                <span>3.0</span>
              </div>
            </div>
            <div className="membership-btn">
              <button>More Info</button>
            </div>
          </div>
          <div className="indiv-membership">
            <div className="membership-img">
              <img className="rectangle" src={Rectangle3} alt="" />
            </div>
            <div className="membership-name">
              <h3>Executive</h3>
              <div className="rating">
                <img src={Star} alt="" />
                <span>3.0</span>
              </div>
            </div>
            <div className="membership-btn">
              <button>More Info</button>
            </div>
          </div>
          <div className="indiv-membership">
            <div className="membership-img">
              <img className="rectangle" src={Rectangle4} alt="" />
            </div>
            <div className="membership-name">
              <h3>Presidential</h3>
              <div className="rating">
                <img src={Star} alt="" />
                <span>4.0</span>
              </div>
            </div>
            <div className="membership-btn">
              <button>More Info</button>
            </div>
          </div>
          <div className="indiv-membership">
            <div className="membership-img">
              <img className="rectangle" src={Rectangle5} alt="" />
            </div>
            <div className="membership-name">
              <h3>Chairman</h3>
              <div className="rating">
                <img src={Star} alt="" />
                <span>4.5</span>
              </div>
            </div>
            <div className="membership-btn">
              <button>More Info</button>
            </div>
          </div>
          <div className="indiv-membership">
            <div className="membership-img">
              <img className="rectangle" src={Rectangle6} alt="" />
            </div>
            <div className="membership-name">
              <h3>Corporate</h3>
              <div className="rating">
                <img src={Star} alt="" />
                <span>5.0</span>
              </div>
            </div>
            <div className="membership-btn">
              <button>More Info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
