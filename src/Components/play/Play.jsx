import React from "react";
import boat from "../../assets/images/boat.webp";
import wheel from "../../assets/images/steering.webp";
import play from "../../assets/images/play.webp";
import "./play.scss";

const Play = () => {
  return (
    <div id="play">
      <div id="playImages">
        <img src={boat} alt="" id="boat" />
        <img src={wheel} alt="" id="wheel" />
        <img src={play} alt="" id="play" />
      </div>
    </div>
  );
};

export default Play;
