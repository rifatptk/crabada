import React from "react";
import slider from "../../assets/images/slider.jpg";
import "./slider.scss";
import { motion } from "framer-motion";

const Slider = () => {
  return (
    <motion.div id="slider">
      <div className="container" style={{ marginTop: 24 }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <img width="100%" src={slider} alt="" style={{ borderRadius: 24 }} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Slider;
