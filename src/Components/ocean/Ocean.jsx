import "./Ocean.scss";
import bottombg from "../../assets/images/bottombg.jpg";
import bottomPlatform from "../../assets/images/bottomPlatform.png";
import bottomOwl from "../../assets/images/bottomOwl.png";
import bottomRocket from "../../assets/images/bottomRocket.png";
import bottomJewel from "../../assets/images/bottomJewel.png";
import bottomCoins from "../../assets/images/bottomCoins.png";

const Ocean = () => {
  return (
    <div id="ocean">
      {/* <img id="ocnbk" src={oceanback} alt="" /> */}
      <img id="bottombg" src={bottombg} alt="" />
      <img id="bottomPlatform" src={bottomPlatform} alt="" />
      <img id="bottomOwl" src={bottomOwl} alt="" />
      <img id="bottomRocket" src={bottomRocket} alt="" />
      <img id="bottomCoins" src={bottomCoins} alt="" />
      <img id="bottomJewel" src={bottomJewel} alt="" />
    </div>
  );
};

export default Ocean;
