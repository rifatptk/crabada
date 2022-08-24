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
          <div className="cardContent">
            <div>
              <img src={cardimagebg} alt="" />
              <img src={cardimage1} alt="" />
            </div>
            <h2>Go on an Exciting Adventure</h2>
            <p>
              Discover rich new lands and engage in challenging boss fights as
              you progress through Adventure Mode!
            </p>
          </div>
        </div>
        <div className="infoCard ">
          <img src={cardbg} className="cardbg" alt="" />
          <img src={cardpaper} className="cardpaper" alt="" />
          <div className="cardContent">
            <div>
              <img src={cardimagebg} alt="" />
              <img src={cardimage1} alt="" />
            </div>
            <h2>Expand your Crabada Forces</h2>
            <p>
              Breed powerful and unique Crabada, each with their ow strengths
              and abilities to be used in battle!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
