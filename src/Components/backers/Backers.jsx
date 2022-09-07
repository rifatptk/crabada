import "./backers.scss";
import avalance from "../../assets/images/avalance.png";
import svc from "../../assets/images/svc.png";
import wangarian from "../../assets/images/wangarian.webp";
import capital from "../../assets/images/capital.png";
import zee from "../../assets/images/zee.png";
import devmons from "../../assets/images/devmons.png";
import backersbg from "../../assets/images/backerbg.webp";
import { motion } from "framer-motion";

const Backers = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      id="backers"
    >
      <img id="bg" src={backersbg} alt="" />
      <div id="brandsCont">
        <h1 className="text-center" id="title">
          Backers
        </h1>
        <div id="brands">
          <img src={avalance} alt="" />
          <img src={svc} alt="" />
          <img src={wangarian} alt="" />
          <img src={capital} alt="" />
          <img src={zee} alt="" />
          <img src={devmons} alt="" />
        </div>
      </div>
    </motion.div>
  );
};

export default Backers;
