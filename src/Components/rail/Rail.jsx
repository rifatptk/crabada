import React from "react";
import track from "../../assets/images/railtrack.webp";
import cart from "../../assets/images/cart.webp";
import "./Rail.scss";
import { motion } from "framer-motion";

function Rail() {
  return (
    <div id="railContainer">
      <img id="track" src={track} width="100%" alt="" />
      <motion.img
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        id="rail"
        src={cart}
        alt=""
      />
      <div id="texts" className="mx-4 text-center">
        <div className="row">
          <div className="col-md-4">
            <h2 className="title">Crabada</h2>
            <p>(NFT Assets)</p>
            <p className="mt-2">
              Crabada can be bred and used in games to earn in-game rewards. All
              Crabada live on the blockchain so players have full control of
              their assets.
            </p>
          </div>
          <div className="col-md-4">
            <h2 className="title">CRA</h2>
            <p>(Crabada Token)</p>
            <p className="mt-2">
              CRA is a governance token which is rewarded via staking and
              playing the game during the incentive period.
            </p>
          </div>
          <div className="col-md-4">
            <h2 className="title">TUS</h2>
            <p>(Treasure Under Sea)</p>
            <p className="mt-2">
              TUS is the in-game currency earned via playing the game, or
              crafted using in-game Material through various available game
              modes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rail;
