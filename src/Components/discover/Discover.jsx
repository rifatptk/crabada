import React from "react";
import "./discover.scss";
import dragon from "../../assets/images/dragon.webp";
import tower from "../../assets/images/tower.webp";
import seashellCover from "../../assets/images/seashellCover.webp";
import seashell from "../../assets/images/seashell.webp";
import smoke from "../../assets/images/smoke.webp";
import bee from "../../assets/images/bee.webp";
import soldiar from "../../assets/images/soldiar.webp";
import fruit from "../../assets/images/fruit.webp";
import helping from "../../assets/images/helping.webp";

const Discover = () => {
  return (
    <div id="discover">
      <div id="discoverHeader">
        <h3 style={{ fontSize: "2rem" }}>Discover</h3>
        <h2 id="title">An Exciting Undersea Adventure!</h2>
      </div>

      <div id="images">
        <img src={dragon} id="dragon" alt="" />
        <img src={tower} id="tower" alt="" />
        <img src={seashellCover} id="seashellCover" alt="" />
        <img src={smoke} id="smoke" alt="" />
        <img src={seashell} id="seashell" alt="" />
        <img src={bee} id="bee" alt="" />
        <img src={soldiar} id="soldiar" alt="" />
        <img src={fruit} id="fruit" alt="" />
        <img src={helping} id="helping" alt="" />
      </div>
    </div>
  );
};

export default Discover;
