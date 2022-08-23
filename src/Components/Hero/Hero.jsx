import React from "react";
import HeroTitle from "../heroTitle/HeroTitle";
import Play from "../play/Play";
import Video from "../video/Video";

const Hero = () => {
  return (
    <div>
      <Video />
      <Play />
      <HeroTitle />
    </div>
  );
};

export default Hero;
