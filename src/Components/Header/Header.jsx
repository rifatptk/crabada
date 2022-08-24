import logo from "../../assets/logos/logo.webp";
import "./header.scss";
import { TbArrowBigUpLines } from "react-icons/tb";
import { useState } from "react";
import { motion } from "framer-motion";

function Header() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div
      id="header"
      className="d-flex justify-content-between align-items-center mx-5 my-3"
    >
      <div id="logoContainer">
        <img src={logo} alt="" />
      </div>
      <div id="navbarContainer">
        <ul id="navLinks" className="d-flex gap-4">
          <li className="navLink">
            <a href=".">Home</a>{" "}
          </li>
          <li className="navLink">
            <a href="#marketplace">Marketplace</a>{" "}
          </li>
          <li className="navLink">
            <a href="#staking">Staking</a>{" "}
          </li>
          <li className="navLink">
            <a href="#bounty">Bounty</a>{" "}
          </li>
          <li className="navLink" onClick={() => setShowMore(!showMore)}>
            <a href="#more">
              More{" "}
              <TbArrowBigUpLines
                style={!showMore && { transform: "rotate(180deg)" }}
              />
            </a>
            {showMore && (
              <motion.div
                initial={{ y: -40 }}
                animate={{ y: 0 }}
                id="moreItems"
              >
                <div className="moreItem">Add Team</div>
                <div id="border"></div>
                <div className="moreItem">Lucky Draw</div>
              </motion.div>
            )}
          </li>
          <li className="navLink">
            <a href="#whitepaper">Whitepaper</a>{" "}
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
}

export default Header;