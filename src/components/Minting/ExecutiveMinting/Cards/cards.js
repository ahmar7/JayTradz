import React from "react";
import {
  AssociateVideo,
  ExecutiveVideo,
  Quarterlyexecutive,
  StarEmpty,
  StarFill,
  StarHalf,
  Yearlyexecutive,
} from "../../../../utils/allImgs";
const Cards = () => {
  return (
    <div className="minting-cards">
      <div className="card-name">
        <div className="minting-name">Executive</div>
        <div className="stars">
          <img src={StarFill} alt="" />
          <img src={StarFill} alt="" />
          <img src={StarFill} alt="" />
          <img src={StarHalf} alt="" />
          <img src={StarEmpty} alt="" />
        </div>
      </div>
      <div className="plan-cards">
        <div className="single-plan">
          <div className="upper-block">
            <video autoPlay muted loop src={ExecutiveVideo}></video>

            <h2>Executive Monthly </h2>
          </div>
          <div className="lower-block">
            <div className="minting-calc">
              <div className="calc">
                <div className="minus-btn">-</div>
                <div className="quantity">0</div>
                <div className="plus-btn">+</div>
              </div>
              <div className="calc-btn">
                <button>Mint</button>
              </div>
            </div>
            <div className="last">
              <div className="total-price nm">
                <div className="total-name">total :</div>
                <div className="total-ps">0 USDT</div>
              </div>
              <div className="total-price ">
                <div className="total-name">Price :</div>
                <div className="total-ps">$25,000 USDT</div>
              </div>
              <div className="total-price ">
                <div className="total-name">** USDT (ERC-20) </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-plan">
          <div className="upper-block">
            <video autoPlay muted loop src={Quarterlyexecutive}></video>

            <h2>Executive Quarterly </h2>
          </div>
          <div className="lower-block">
            <div className="minting-calc">
              <div className="calc">
                <div className="minus-btn">-</div>
                <div className="quantity">0</div>
                <div className="plus-btn">+</div>
              </div>
              <div className="calc-btn">
                <button>Mint</button>
              </div>
            </div>
            <div className="last">
              <div className="total-price nm">
                <div className="total-name">total :</div>
                <div className="total-ps">0 USDT</div>
              </div>
              <div className="total-price ">
                <div className="total-name">Price :</div>
                <div className="total-ps">$25,000 USDT</div>
              </div>
              <div className="total-price ">
                <div className="total-name">** USDT (ERC-20) </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-plan">
          <div className="upper-block">
            <video autoPlay muted loop src={Yearlyexecutive}></video>

            <h2>Executive Semi-Yearly</h2>
          </div>
          <div className="lower-block">
            <div className="minting-calc">
              <div className="calc">
                <div className="minus-btn">-</div>
                <div className="quantity">0</div>
                <div className="plus-btn">+</div>
              </div>
              <div className="calc-btn">
                <button>Mint</button>
              </div>
            </div>
            <div className="last">
              <div className="total-price nm">
                <div className="total-name">total :</div>
                <div className="total-ps">0 USDT</div>
              </div>
              <div className="total-price ">
                <div className="total-name">Price :</div>
                <div className="total-ps">$25,000 USDT</div>
              </div>
              <div className="total-price ">
                <div className="total-name">** USDT (ERC-20) </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
