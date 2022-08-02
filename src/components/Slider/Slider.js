import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img1 from "/home/amaury/repos/shopping-cart/src/images/img1.jpg";
import img2 from "/home/amaury/repos/shopping-cart/src/images/img2.jpg";
import './slider.css'

const property = {
  indicators : true,
  arrows : true
};

const Slider = () => {
  return (
    <div className="slide-container">
      <Slide {...property}>
        <div className="each-slide">
          <div>
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={img2} alt="" />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slider;
