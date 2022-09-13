import "./backers.scss";

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
          Finance Target
        </h1>
        <div id="brands">
          <ul>
            <h3 className="mb-5 text-center ">
              The current funding is in the seed round:
            </h3>
            <li>
              <h5>
                The cornerstone round of 300,000 US dollars, accounting for 3%
                of the total issued tokens, has been completed.
              </h5>
            </li>
            <li>
              <h5>
                The seed round target of 1.4 million US dollars accounts for 7%
                of the total issued tokens.
              </h5>
            </li>
            <li>
              <h5>
                At present, USD 100,000 has been in place (cornerstone investors
                participated in advance).
              </h5>
            </li>
            <li>
              <h5>Minimum investment of $200,000.</h5>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Backers;
