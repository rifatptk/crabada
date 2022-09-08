import React from "react";
import "./cards.scss";
import cardbg from "../../assets/images/cardbg.webp";
import cardpaper from "../../assets/images/cardpaper.webp";
import cardimagebg from "../../assets/images/cardimagebg.webp";
import cardimage1 from "../../assets/images/cardimage1.webp";
import { motion } from "framer-motion";

const cardsData = [
  {
    id: 1,
    cardImageBg: cardimagebg,
    cardImage: cardimage1,
    title: "Auto battle",
    description:
      "Auto battle pet RPG mobile online game. Q version cute style.",
  },
  {
    id: 2,
    cardImageBg: cardimagebg,
    cardImage: cardimage1,
    title: "Faction fight",
    description:
      "Faction fight and union war. Infinite growth Fusion Reincarnation system.",
  },
  {
    id: 3,
    cardImageBg: cardimagebg,
    cardImage: cardimage1,
    title: "In game wallet",
    description: "In-game wallet, exchange, NFT auction house.",
  },
];
const Cards = () => {
  const cardsAnimate = {
    hidden: { opacity: 0 },
    shown: { opacity: 1 },
  };

  return (
    <div id="cardsContainer">
      <motion.div
        id="cards"
        initial={"hidden"}
        whileInView={"shown"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {cardsData.map((cardData) => (
          <motion.div
            variants={cardsAnimate}
            className="infoCard "
            key={cardData.id}
          >
            <img src={cardbg} className="cardbg" alt="" />
            <img src={cardpaper} className="cardpaper" alt="" />
            <div className="cardContent">
              <div>
                <img src={cardData.cardImageBg} alt="" />
                <img src={cardData.cardImage} alt="" />
              </div>
              <h2>{cardData.title}</h2>
              <p>{cardData.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Cards;
