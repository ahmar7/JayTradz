import React, { useState } from "react";
import { Affiliate, ArrowDown, TickSquare } from "../../../utils/allImgs";
import "./membership.css";
const Whymembership = () => {
  const [slide1, setSlide1] = useState(false);
  const [slide2, setSlide2] = useState(false);
  const [slide3, setSlide3] = useState(false);
  const [slide4, setSlide4] = useState(false);
  const [slide5, setSlide5] = useState(false);
  let sliding1 = () => {
    if (slide1 === true) {
      setSlide1(false);
    } else {
      setSlide1(true);
    }
  };
  let sliding2 = () => {
    if (slide2 === true) {
      setSlide2(false);
    } else {
      setSlide2(true);
    }
  };
  let sliding3 = () => {
    if (slide3 === true) {
      setSlide3(false);
    } else setSlide3(true);
  };

  let sliding4 = () => {
    if (slide4 === true) {
      setSlide4(false);
    } else {
      setSlide4(true);
    }
  };
  let sliding5 = () => {
    if (slide5 === true) {
      setSlide5(false);
    } else {
      setSlide5(true);
    }
  };
  return (
    <div className="rewards-section">
      <h1 className="section-heading">
        WHY GET A JAYTRADZ <br /> MEMBERSHIP?
      </h1>

      <div className="sliders why">
        <div className={slide1 ? "main-slide no-border" : "main-slide"}>
          <div className="section-slider" onClick={sliding1}>
            <div className="left-head">
              <img src={TickSquare} alt="" />
              <h3>Open for global participants </h3>
            </div>
            <div className={slide1 ? "right-arrow rotate" : "right-arrow"}>
              <img src={ArrowDown} alt="" />
            </div>
          </div>
          <div className={slide1 ? "slider-para  " : "hide-it slider-para "}>
            <p>
              Crypto technology facilitates the transaction and brings them
              closer to a worldwide audience. An added benefit of JayTradz
              Memberships is that they’re completely decentralized, so
              participation can be done freely across borders. The use of
              technology will facilitate a financial revolution that will leave
              everyone more financially connected, empowered, and enabled. This
              NFT has no border so these can be used no matter where you are
              located globally. This also has a huge effect on international
              payment fees. Traditionally international transfers have much
              higher fees than domestic transfers and payments. International
              payments and transfers with crypto are the same as domestic.
            </p>
          </div>
        </div>
        <div className={slide2 ? "main-slide no-border" : "main-slide"}>
          <div className="section-slider" onClick={sliding2}>
            <div className="left-head">
              <img src={TickSquare} alt="" />
              <h3>Free from corporate and government interference</h3>
            </div>
            <div className={slide2 ? "right-arrow rotate" : "right-arrow"}>
              <img src={ArrowDown} alt="" />
            </div>
          </div>
          <div className={slide2 ? "slider-para  " : "hide-it slider-para "}>
            <p>
              Crypto technology facilitates the transaction and brings them
              closer to a worldwide audience. An added benefit of JayTradz
              Memberships is that they’re completely decentralized, so
              participation can be done freely across borders. The use of
              technology will facilitate a financial revolution that will leave
              everyone more financially connected, empowered, and enabled. This
              NFT has no border so these can be used no matter where you are
              located globally. This also has a huge effect on international
              payment fees. Traditionally international transfers have much
              higher fees than domestic transfers and payments. International
              payments and transfers with crypto are the same as domestic.
            </p>
          </div>
        </div>
        <div className={slide3 ? "main-slide no-border" : "main-slide"}>
          <div className="section-slider" onClick={sliding3}>
            <div className="left-head">
              <img src={TickSquare} alt="" />
              <h3>Efficiency of payment transactions</h3>
            </div>
            <div className={slide3 ? "right-arrow rotate" : "right-arrow"}>
              <img src={ArrowDown} alt="" />
            </div>
          </div>
          <div className={slide3 ? "slider-para  " : "hide-it slider-para "}>
            <p>
              Standard transfers and foreign purchases typically involve fees
              and exchange costs. Since JayTradz Memberships transactions have
              no intermediary institutions or government involvement, the costs
              of transacting and receiving your revenue/royalty payments are
              kept very low as they are made directly into the NFT holders’
              crypto wallet.
            </p>
          </div>
        </div>
        <div className={slide4 ? "main-slide no-border" : "main-slide"}>
          <div className="section-slider" onClick={sliding4}>
            <div className="left-head">
              <img src={TickSquare} alt="" />
              <h3>Increased liquidity for Members:</h3>
            </div>
            <div className={slide4 ? "right-arrow rotate" : "right-arrow"}>
              <img src={ArrowDown} alt="" />
            </div>
          </div>
          <div className={slide4 ? "slider-para  " : "hide-it slider-para "}>
            <p>
              JayTradz Memberships enjoy high liquidity as they are traded
              because of our Reward Points. The importance of high liquidity
              includes fair asset prices, market stability, technical analysis
              accuracy, and quicker transactions.
            </p>
          </div>
        </div>
        <div className={slide5 ? "main-slide no-border" : "main-slide"}>
          <div className="section-slider" onClick={sliding5}>
            <div className="left-head">
              <img src={TickSquare} alt="" />
              <h3>ETHEREUM Blockchain compliant</h3>
            </div>
            <div className={slide5 ? "right-arrow rotate" : "right-arrow"}>
              <img src={ArrowDown} alt="" />
            </div>
          </div>
          <div className={slide5 ? "slider-para  " : "hide-it slider-para "}>
            <p>
              JayTradz Memberships are an Ethereum-compliant token means that it
              supports a few functions that all Ethereum NFTs support.
            </p>
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
