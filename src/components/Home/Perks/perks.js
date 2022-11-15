import React from "react";
import "./perks.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Perks = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    speed: 500,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="perks-section">
      <div className="perks-flex">
        <div className="perks-left">
          <h1>Perks/Benefits</h1>
          <p>
            Perks/Benefits Please note that ALL access to JayTradz content,
            including perks/benefits, are valid ONLY for the current holder of
            the JayTradz Membership at the time of the event. Should the
            Membership be sold on the secondary market, the benefits will
            transfer to the new owner
          </p>
        </div>
        <div className="perks-right">
          <Slider {...settings}>
            <div>
              <div className="slider-card"></div>
            </div>
            <div>
              <div className="slider-card"></div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Perks;
