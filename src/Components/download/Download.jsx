import React from "react";
import "./download.scss";
import crabada1 from "../../assets/images/kabada-01.png";
import crabada2 from "../../assets/images/kabada-02.png";
import crabada3 from "../../assets/images/kabada-03.png";
import crabada4 from "../../assets/images/kabada-04.png";
import crabada5 from "../../assets/images/kabada-05.png";
import download from "../../assets/images/download.webp";

const Download = () => {
  return (
    <div id="download">
      <img src={download} alt="" width="100%" />
      <div
        id="platforms"
        className="d-flex justify-content-around w-100 mx-auto"
      >
        <a href="#">
          <img className="logo" src={crabada1} alt="" />
        </a>
        <a href="#">
          <img className="logo" src={crabada2} alt="" />
        </a>
        <a href="#">
          <img className="logo" src={crabada3} alt="" />
        </a>
        <a href="#">
          <img className="logo" src={crabada4} alt="" />
        </a>
        <a href="#">
          <img className="logo" src={crabada5} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Download;
