import "./Ocean.scss";
import oceanback from "../../assets/images/oceanback.webp";
import oceanfront from "../../assets/images/oceanfront.webp";
import lightwala from "../../assets/images/lightwala.webp";
import cloudy from "../../assets/images/cloudy.webp";
import cartleft from "../../assets/images/cartleft.webp";
import cartright from "../../assets/images/cartright.webp";
import jhulonto from "../../assets/images/jhulonto.webp";
import camocwala from "../../assets/images/camocwala.webp";

const Ocean = () => {
  return (
    <div id="ocean">
      <img id="ocnbk" src={oceanback} alt="" />
      <img id="ocnfr" src={oceanfront} alt="" />
      <img id="lgtwala" src={lightwala} alt="" />
      <img id="cloudy" src={cloudy} alt="" />
      <img id="cartleft" src={cartleft} alt="" />
      <img id="cartright" src={cartright} alt="" />
      <img id="jhulonto" src={jhulonto} alt="" />
      <img id="camocwala" src={camocwala} alt="" />
    </div>
  );
};

export default Ocean;
