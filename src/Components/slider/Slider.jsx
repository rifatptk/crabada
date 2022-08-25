import React from "react";
import marketplace from "../../assets/images/marketplace.webp";
import stacking from "../../assets/images/stacking.webp";
import swimmer from "../../assets/images/swimmer network.webp";
import "./slider.scss";
import { motion } from "framer-motion";

const Slider = () => {
  const slidersAnimate = {
    offscreen: { y: 40, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "smooth", duration: 0.5 },
    },
  };
  return (
    <motion.div id="slider">
      <div className="container" style={{ marginTop: 24 }}>
        <motion.div
          className="row"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div className="col-md-4" variants={slidersAnimate}>
            <img width="100%" src={marketplace} alt="" />
          </motion.div>
          <motion.div className="col-md-4" variants={slidersAnimate}>
            <img width="100%" src={stacking} alt="" />
          </motion.div>
          <motion.div className="col-md-4" variants={slidersAnimate}>
            <img width="100%" src={swimmer} alt="" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Slider;
