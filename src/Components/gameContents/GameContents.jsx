import gameleft from "../../assets/images/gameleft.png";
import gameright from "../../assets/images/gameright.png";

const GameContents = () => {
  return (
    <div id="contents" className="container mb-5">
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
    </div>
  );
};

export default GameContents;
