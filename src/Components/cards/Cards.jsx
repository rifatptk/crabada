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
    title: "Earn Rewards Effortlessly",
    description:
      "Earn rewards in idle gameplay as you send your Crabada to Battle anytime, anywhere!",
  },
  {
    id: 2,
    cardImageBg: cardimagebg,
    cardImage: cardimage1,
    title: "Go on an Exciting Adventure",
    description:
      "Discover rich new lands and engage in challenging boss fights as you progress through Adventure Mode!",
  },
  {
    id: 3,
    cardImageBg: cardimagebg,
    cardImage: cardimage1,
    title: "Expand your Crabada Forces",
    description:
      "Breed powerful and unique Crabada, each with their ow strengths and abilities to be used in battle!",
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
