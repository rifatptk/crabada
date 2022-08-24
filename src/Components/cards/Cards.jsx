import React from "react";
import "./cards.scss";
import cardbg from "../../assets/images/cardbg.webp";
import cardpaper from "../../assets/images/cardpaper.webp";

const Cards = () => {
  return (
    <div id="cardsContainer">
      <div id="cards" className="">
        <div className="infoCard ">
          <img src={cardbg} className="cardbg" alt="" />
          <img src={cardpaper} className="cardpaper" alt="" />
        </div>
        <div className="infoCard ">
          <img src={cardbg} className="cardbg" alt="" />
          <img src={cardpaper} className="cardpaper" alt="" />
        </div>
        <div className="infoCard ">
          <img src={cardbg} className="cardbg" alt="" />
          <img src={cardpaper} className="cardpaper" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
