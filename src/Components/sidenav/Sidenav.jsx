import "./sidenav.scss";
import home from "../../assets/images/icon_home.webp";
import battle from "../../assets/images/icon_battle.webp";
import download from "../../assets/images/icon_download.webp";
import roadmap from "../../assets/images/icon_roadmap.webp";
import { motion } from "framer-motion";

const Sidenav = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      id="sidenav"
    >
      <a href="#header" className="text-decoration-none">
        <div className="navItem d-flex align-items-center gap-3 justify-content-end">
          <div className="navTitle">Home</div>
          <img src={home} alt="" className="navLogo" />
        </div>
      </a>
      <a href="#cards" className="text-decoration-none">
        <div className="navItem d-flex align-items-center gap-3 justify-content-end">
          <div className="navTitle">Battle</div>
          <img src={battle} alt="" className="navLogo" />
        </div>
      </a>

      <div className="navItem d-flex align-items-center gap-3 justify-content-end">
        <div className="navTitle">Download</div>
        <img src={download} alt="" className="navLogo" />
      </div>
      <a href="#roadmap" className="text-decoration-none">
        <div className="navItem d-flex align-items-center gap-3 justify-content-end">
          <div className="navTitle">Roadmap</div>
          <img src={roadmap} alt="" className="navLogo" />
        </div>
      </a>
    </motion.div>
  );
};

export default Sidenav;
