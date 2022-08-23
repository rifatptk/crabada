import React from "react";
import marketplace from "../../assets/images/marketplace.webp";
import stacking from "../../assets/images/stacking.webp";
import swimmer from "../../assets/images/swimmer network.webp";
import "./slider.scss";

const Slider = () => {
  return (
    <div id="slider">
      <div className="container" style={{ marginTop: 24 }}>
        <div className="row">
          <div className="col-md-4">
            <img width="100%" src={marketplace} alt="" />
          </div>
          <div className="col-md-4">
            <img width="100%" src={stacking} alt="" />
          </div>
          <div className="col-md-4">
            <img width="100%" src={swimmer} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
