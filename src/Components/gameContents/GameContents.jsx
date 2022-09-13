import gameleft from "../../assets/images/gameleft.png";
import gameright from "../../assets/images/gameright.png";
import video from "../../assets/videos/video.mp4";
import j7 from "../../assets/images/j7.png";
import a1 from "../../assets/images/a-01.jpg";
import bemil from "../../assets/images/index.jpg";
import lo from "../../assets/images/12.jpg";
import left from "../../assets/images/j2.png";
import right from "../../assets/images/j3.png";
import eleven from "../../assets/images/11.jpg";
import thirteen from "../../assets/images/13.jpg";
import a6 from "../../assets/images/a-06.jpg";
import a7 from "../../assets/images/a-07.jpg";
import a8 from "../../assets/images/a-08.jpg";
import a9 from "../../assets/images/a-09.jpg";

const GameContents = () => {
  return (
    <div id="contents" className="container mb-5">
      <div className="row align-items-center mb-5">
        <div className="col-md-1">
          <img src={left} className="d-block mx-auto" alt="" />
        </div>
        <div className="col-md-10">
          <img src={j7} width="50%" className="d-block mx-auto" alt="" />
        </div>
        <div className="col-md-1">
          <img src={right} className="d-block mx-auto" alt="" />
        </div>
      </div>
      <h1 className="text-center mb-5">Game Content</h1>
      <div className="row">
        <div className="col-md-6">
          <h3>Game Basics</h3>
          <ul className="lh-lg">
            <li>Auto battle pet RPG mobile online game</li>
            <li>Q version cute style</li>
            <li>Faction fight and union war</li>
            <li>Infinite growth fusion reincarnation system</li>
            <li>In-game wallet, exchange, NFT auction house</li>
            <li>Unity engine</li>
            <li>Real-time voice</li>
          </ul>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          <div className="flex-1 align-self-end">
            <img src={gameleft} alt="" height="240px" />
          </div>
          <div className="flex-1">
            <img src={gameright} alt="" height="320px" />
          </div>
        </div>
      </div>
      <div className="row">
        <h3>A little gameplay</h3>
        <div className="col-md-6 ">
          <video
            controls
            muted
            className="rounded"
            src={video}
            width="100%"
          ></video>
        </div>
        <div className="col-md-6">
          <img src={a1} className="rounded" alt="" width="100%" />
          <img src={lo} className="mt-3 rounded" alt="" width="100%" />
          <img src={bemil} className="mt-3 rounded" alt="" width="100%" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img src={thirteen} alt="" className="mt-5 rounded" width="100%" />
        </div>
        <div className="col-md-6">
          <img src={eleven} alt="" className="mt-5 rounded" width="100%" />
        </div>
      </div>

      <div className=" py-5">
        <img src={a6} alt="" className="rounded" width="100%" />
        <img src={a7} alt="" className="rounded my-5" width="100%" />
        <img src={a8} alt="" className="rounded" width="100%" />
        <img src={a9} alt="" className="rounded my-5" width="100%" />
      </div>
    </div>
  );
};

export default GameContents;
