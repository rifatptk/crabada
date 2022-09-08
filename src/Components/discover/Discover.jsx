import React from "react";
import "./discover.scss";
import dragon from "../../assets/images/dragon.webp";
import tower from "../../assets/images/tower.webp";
import seashellCover from "../../assets/images/seashellCover.webp";
import seashell from "../../assets/images/seashell.webp";
import smoke from "../../assets/images/smoke.webp";
import bee from "../../assets/images/bee.webp";
import soldiar from "../../assets/images/soldiar.webp";
import fruit from "../../assets/images/fruit.webp";
import helping from "../../assets/images/helping.webp";
import bitcoin from "../../assets/images/bitcoin.webp";
import flash from "../../assets/images/flash.webp";
import { motion } from "framer-motion";

const Discover = () => {
  return (
    <div id="discover">
      <div id="discoverHeader">
        <h3 style={{ fontSize: "3rem" }}>Discover</h3>
        <h2 id="title">
          Using Token Economy to Create a Decentralized and Freely Traded Mobile
          Pet Game
        </h2>
      </div>

      <div id="images">
        <img src={dragon} id="dragon" alt="" />
        <motion.img
          initial={{ opacity: 0, y: 200 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: "smooth", duration: 1 },
          }}
          viewport={{ once: false, amount: 0.01 }}
          src={tower}
          id="tower"
          alt=""
        />
        <img src={seashellCover} id="seashellCover" alt="" />
        <img src={smoke} id="smoke" alt="" />
        <img src={seashell} id="seashell" alt="" />
        <img src={bee} id="bee" alt="" />
        <motion.img
          initial={{ opacity: 0, x: -200, y: -200 }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
            transition: { type: "smooth", duration: 1 },
          }}
          viewport={{ once: false, amount: 0.8 }}
          src={soldiar}
          id="soldiar"
          alt=""
        />
        <img src={fruit} id="fruit" alt="" />
        <img src={helping} id="helping" alt="" />
      </div>
      <div id="joinTheBattle">
        <h2>Blockchain technology application</h2>
        <p>Involved in the blockchain field for six years.</p>
      </div>
      <div id="slideFromOutside">
        <motion.img
          initial={{ opacity: 0, marginRight: 400 }}
          whileInView={{
            opacity: 1,
            marginRight: 0,
            transition: { type: "smooth", duration: 1.5 },
          }}
          viewport={{ once: false, amount: 0.5 }}
          src={bitcoin}
          id="bitcoin"
          alt=""
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { type: "smooth", duration: 1.5 },
          }}
          viewport={{ once: false, amount: 0.5 }}
          src={flash}
          id="flash"
          alt=""
        />
      </div>
      <div id="joinTheBattle">
        <h2>MetaVirus Excellency</h2>
        <p>17 years of fgame development and operation experience.</p>
      </div>
      <div id="crabada">
        <h2>MetaVirus - An Exciting Blockchain Mobile Pet Game</h2>
        <p>
          MetaVirus is an idle game available on most native platforms. Earn
          in-gam rewards.
        </p>
      </div>
    </div>
  );
};

export default Discover;
