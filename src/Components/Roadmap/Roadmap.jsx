import "./Roadmap.scss";
import q4 from "../../assets/images/q4.webp";

const Roadmap = () => {
  return (
    <div id="roadmap">
      <div id="roadmapContainer">
        <h1 id="title">ROADMAP</h1>
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
    </div>
  );
};

export default Roadmap;
