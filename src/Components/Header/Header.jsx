import logo from "../../assets/images/logo.png";
import "./header.scss";
import { TbArrowBigUpLines } from "react-icons/tb";
import { useState } from "react";
import { motion } from "framer-motion";
import { CgMenuGridO } from "react-icons/cg";

function Header() {
  const [showMobileNav, setshowMobileNav] = useState(false);
  const [showMore, setShowMore] = useState(false);
  return (
    <div id="header" className="mx-5 my-3">
      <div id="logoContainer">
        <img src={logo} alt="" />
      </div>
      <div id="navbarContainer">
        <ul id="navLinks" className="d-flex gap-4">
          <li className="navLink">
            <a href=".">Home</a>{" "}
          </li>
          <li className="navLink">
            <a href="#book">Marketplace</a>{" "}
          </li>
          <li className="navLink">
            <a href="#cards">Economic</a>{" "}
          </li>
          <li className="navLink">
            <a href="#download">Download</a>{" "}
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
                <a
                  href="#contents"
                  style={{ textShadow: "unset" }}
                  className="moreItem"
                >
                  Game Contents
                </a>
                <div id="border"></div>
                <div className="moreItem">Lucky Draw</div>
              </motion.div>
            )}
          </li>
          <li className="navLink">
            <a href="#roadmap">Process</a>{" "}
          </li>
        </ul>
      </div>

      <div id="mobileNavBtn" onClick={() => setshowMobileNav(!showMobileNav)}>
        <CgMenuGridO />
      </div>
      {showMobileNav && (
        <div id="mobileNav">
          <ul id="mobileNavLinks" className="">
            <li className="navLink">
              <a href=".">Home</a>{" "}
            </li>
            <li className="navLink">
              <a href="#book">Marketplace</a>{" "}
            </li>
            <li className="navLink">
              <a href="#cards">Economic</a>{" "}
            </li>
            <li className="navLink">
              <a href="#download">Download</a>{" "}
            </li>
            <li className="navLink">
              <a href="#contents">Game Contents</a>
            </li>
            <li className="navLink">
              <a href="#process">Process</a>{" "}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
