import React from "react";
import "./download.scss";
import apple from "../../assets/images/apple.webp";

const Download = () => {
  return (
    <div id="download">
      <div
        id="platforms"
        className="d-flex justify-content-around w-75 mx-auto"
      >
        <div className="platform">
          <img className="platformLogo" src={apple} alt="" />
          <div className="platformName">MAC OS</div>
        </div>
        <div className="platform">
          <img className="platformLogo" src={apple} alt="" />
          <div className="platformName">MAC OS</div>
        </div>
        <div className="platform">
          <img className="platformLogo" src={apple} alt="" />
          <div className="platformName">MAC OS</div>
        </div>
        <div className="platform">
          <img className="platformLogo" src={apple} alt="" />
          <div className="platformName">MAC OS</div>
        </div>
        <div className="platform">
          <img className="platformLogo" src={apple} alt="" />
          <div className="platformName">MAC OS</div>
        </div>
      </div>
    </div>
  );
};

export default Download;
