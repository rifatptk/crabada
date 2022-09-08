import React from "react";
// import HeroTitle from "../heroTitle/HeroTitle";
import Play from "../play/Play";
import Slider from "../slider/Slider";
import Video from "../video/Video";

const Hero = () => {
  return (
    <div>
      <Video />
      <Play />
      {/* <HeroTitle /> */}
      <Slider />
    </div>
  );
};

export default Hero;
