import React from "react";
import "./cards.scss";
import cardbg from "../../assets/images/cardbg.webp";
import cardpaper from "../../assets/images/cardpaper.webp";
import cardimagebg from "../../assets/images/cardimagebg.webp";
import cardimage1 from "../../assets/images/cardimage1.webp";

const Cards = () => {
  return (
    <div id="cardsContainer">
      <div id="cards" className="">
        <div className="infoCard ">
          <img src={cardbg} className="cardbg" alt="" />
          <img src={cardpaper} className="cardpaper" alt="" />
          <div className="cardContent">
            <div>
              <img src={cardimagebg} alt="" />
              <img src={cardimage1} alt="" />
            </div>
            <h2>Earn Rewards Effortlessly</h2>
            <p>
              Earn rewards in idle gameplay as you send your Crabada to Battle
              anytime, anywhere!
            </p>
          </div>
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
