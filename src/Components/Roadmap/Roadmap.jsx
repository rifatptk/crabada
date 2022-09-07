import "./Roadmap.scss";
import q4 from "../../assets/images/q4.webp";
import roadmapbg from "../../assets/images/roadmapbg.webp";
import { motion } from "framer-motion";

const Roadmap = () => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ type: "smooth", duration: 0.3 }}
      id="roadmap"
    >
      <img id="roadmapbg" src={roadmapbg} alt="" width="100%" />
      <div id="roadmapContainer">
        <h1 id="title" className="text-center m-0">
          ROADMAP
        </h1>
        <div id="quarters">
          <div className="quarter">
            <div className="quarterHeader">
              <img src={q4} alt="" />
              <h2>Q4-2021</h2>
            </div>
            <ul className="points">
              <li>Community Bootstrap Event</li>
              <li>Special Crabada Breeding Event</li>
              <li>Crabada Breeding Feature</li>
              <li>Crabada Markeplace</li>
              <li>Idle Game Release</li>
              <li>Battle Game Prototype</li>
            </ul>
          </div>
          <div className="quarter">
            <div className="quarterHeader">
              <img src={q4} alt="" />
              <h2>Q4-2021</h2>
            </div>
            <ul className="points">
              <li>Community Bootstrap Event</li>
              <li>Special Crabada Breeding Event</li>
              <li>Crabada Breeding Feature</li>
              <li>Crabada Markeplace</li>
              <li>Idle Game Release</li>
              <li>Battle Game Prototype</li>
            </ul>
          </div>
          <div className="quarter">
            <div className="quarterHeader">
              <img src={q4} alt="" />
              <h2>Q4-2021</h2>
            </div>
            <ul className="points">
              <li>Community Bootstrap Event</li>
              <li>Special Crabada Breeding Event</li>
              <li>Crabada Breeding Feature</li>
              <li>Crabada Markeplace</li>
              <li>Idle Game Release</li>
              <li>Battle Game Prototype</li>
            </ul>
          </div>
          <div className="quarter">
            <div className="quarterHeader">
              <img src={q4} alt="" />
              <h2>Q4-2021</h2>
            </div>
            <ul className="points">
              <li>Community Bootstrap Event</li>
              <li>Special Crabada Breeding Event</li>
              <li>Crabada Breeding Feature</li>
              <li>Crabada Markeplace</li>
              <li>Idle Game Release</li>
              <li>Battle Game Prototype</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Roadmap;
