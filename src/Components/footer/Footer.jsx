import "./footer.scss";
// import telegram from "../../assets/images/telegram.webp";
// import twitter from "../../assets/images/twitter.webp";
// import discord from "../../assets/images/discord.webp";
import crabada from "../../assets/images/crabada.webp";
import footerbg from "../../assets/images/footerbg.webp";
import iconframe from "../../assets/images/iconframe.webp";

const Footer = () => {
  return (
    <footer id="footer" className="">
      <img src={footerbg} alt="" width="100%" />
      <div id="footerContent" className="">
        <img src={crabada} alt="" width="20%" />
        <div className="tos">
          <small>Terms of service</small>
          <p>Copyright 2022 CRABADA LLC. All rights reserved.</p>
        </div>
        <div className="icons d-flex ">
          <img src={iconframe} alt="" width="70px" />
          <img src={iconframe} alt="" width="70px" />
          <img src={iconframe} alt="" width="70px" />
          <img src={iconframe} alt="" width="70px" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
