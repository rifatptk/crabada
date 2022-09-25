import React from "react";
import "./download.scss";
import crabada2 from "../../assets/images/kabada-02.png";
import crabada3 from "../../assets/images/kabada-03.png";
import crabada4 from "../../assets/images/kabada-04.png";
import download from "../../assets/images/download.webp";

const Download = () => {
  return (
    <div id="download">
      <img id="dbg" src={download} alt="" width="100%" />
      <div id="platforms">
        <h1 className="text-center">Download</h1>
        <div id="brands" className="d-flex justify-content-around w-100">
          <a href="#ASD">
            <img className="logo" src={crabada2} alt="" />
          </a>
          <a href="#FDS">
            <img className="logo" src={crabada3} alt="" />
          </a>
          <a href="#SDFSDF">
            <img className="logo" src={crabada4} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Download;
