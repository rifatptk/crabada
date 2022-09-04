import "./sidenav.scss";
import home from "../../assets/images/icon_home.webp";
import battle from "../../assets/images/icon_battle.webp";
import download from "../../assets/images/icon_download.webp";
import roadmap from "../../assets/images/icon_roadmap.webp";

const Sidenav = () => {
  return (
    <div id="sidenav">
      <div className="navItem d-flex align-items-center gap-3 justify-content-end">
        <div className="navTitle">Home</div>
        <img src={home} alt="" className="navLogo" />
      </div>
      <div className="navItem d-flex align-items-center gap-3 justify-content-end">
        <div className="navTitle">Battle</div>
        <img src={battle} alt="" className="navLogo" />
      </div>
      <div className="navItem d-flex align-items-center gap-3 justify-content-end">
        <div className="navTitle">Download</div>
        <img src={download} alt="" className="navLogo" />
      </div>
      <div className="navItem d-flex align-items-center gap-3 justify-content-end">
        <div className="navTitle">Roadmap</div>
        <img src={roadmap} alt="" className="navLogo" />
      </div>
    </div>
  );
};

export default Sidenav;
