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
    </div>
  );
}

export default Rail;
