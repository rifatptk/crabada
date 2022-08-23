import React from "react";
import video from "../../assets/videos/video.webm";
import "./video.scss";

const Video = () => {
  return (
    <div id="video">
      <video
        autoPlay
        muted
        loop
        width="100%"
        height="100%"
        preload="auto"
        id="myVideo"
      >
        <source src={video} type="video/webm" />
      </video>
    </div>
  );
};

export default Video;
