import React from "react";
import "./cards.scss";
import cardbg from "../../assets/images/cardbg.png";

import { motion } from "framer-motion";

const cardsData = [
  {
    id: 1,
    title: "GameFi Thinking",
    description:
      "F2P（Free to Play）free games P2E（Play to Earn）Earn money while playing Incentivize Crypto and asset trading behavior among players",
  },
  {
    id: 2,
    title: "Income Distribution",
    description:
      "Faction fight and union war. Infinite growth Fusion Reincarnation system.Players acquire resources and currency through in-game labor Game teams and investors get game tax dividends by holding governance tokens Decentralized smart contracts realize automatic distribution of income",
  },
  {
    id: 3,
    title: "Crypto Circulation",
    description:
      "Players will never be able to recharge in-game All demand currency comes from game output or exchange purchasePlay to earn game currency and NFT (scarce resource non-fungible token)In-game wallet, exchange, NFT auction house.",
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
        viewport={{ once: false, amount: 0.1 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {cardsData.map((cardData) => (
          <motion.div
            variants={cardsAnimate}
            className="infoCard "
            key={cardData.id}
          >
            <img src={cardbg} className="cardbg" alt="" />
            <div className="cardContent">
              <div>
                <h2>{cardData.title}</h2>
                <p>{cardData.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Cards;
