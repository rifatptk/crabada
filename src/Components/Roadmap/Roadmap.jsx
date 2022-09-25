import "./Roadmap.scss";
import q4 from "../../assets/images/q4.webp";
import roadmapbg from "../../assets/images/roadmapbg.webp";
import { motion } from "framer-motion";

const Roadmap = () => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ type: "smooth", duration: 0.3 }}
      id="roadmap"
    >
      <img id="roadmapbg" src={roadmapbg} alt="" width="100%" height="1100px" />
      <div id="roadmapContainer">
        <h1 id="title" className="text-center m-0">
          PROCESS
        </h1>
        <div id="quarters">
          <div className="quarter">
            <div className="quarterHeader">
              <img src={q4} alt="" />
              <h2>03/22-09/22</h2>
            </div>
            <ul className="points">
              <li>Token contract</li>
              <li>Cornerstone round</li>
              <li>VIRU exchange</li>
              <li>Seed round</li>
              <li>Demo</li>
              <li>First pre-sale</li>
            </ul>
          </div>
          <div className="quarter">
            <div className="quarterHeader">
              <img src={q4} alt="" />
              <h2>10/22-12/22</h2>
            </div>
            <ul className="points">
              <li>Trailer</li>
              <li>Virul marketing</li>
              <li>Petri dish</li>
              <li>Second pre-sale</li>
              <li>Playable demo</li>
              <li>IDO</li>
            </ul>
          </div>
          <div className="quarter">
            <div className="quarterHeader">
              <img src={q4} alt="" />
              <h2>01/23-01/24</h2>
            </div>
            <ul className="points">
              <li>Exchanges</li>
              <li>Asset pre-sale</li>
              <li>Closed test</li>
              <li>Game platform warm-up</li>
              <li>Internal test</li>
              <li>Public test & game platform release</li>
              <li>Official operation</li>
            </ul>
          </div>
          <div className="quarter">
            <div className="quarterHeader">
              <img src={q4} alt="" />
              <h2>2024 & beyond</h2>
            </div>
            <ul className="points">
              <li>
                Open the editor to encourage other game developers to join the
                MetaVirus game ecosystem.
              </li>
              <li>
                Launch online and offline interaction, and virtual reality
                interacts with reality.
              </li>
              <li>
                Introduce real-world brands and establish a link between
                gameplay and advertising that serves as a mechanism to encourage
                the community to be the main body of brand interaction and
                cooperation.
              </li>
              <li>
                Launch augmented reality (AR) technology that has been
                strengthened by expected technical advances in the industry.
              </li>
              <li>
                AR equipment can be launched in conjunction with equipment
                manufacturers or independently.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Roadmap;
