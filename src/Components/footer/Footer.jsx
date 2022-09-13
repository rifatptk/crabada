import "./footer.scss";
// import telegram from "../../assets/images/telegram.webp";
// import twitter from "../../assets/images/twitter.webp";
// import discord from "../../assets/images/discord.webp";
import logo from "../../assets/images/logo.png";
import footerbg from "../../assets/images/footerbg.webp";
import links1 from "../../assets/images/links1.png";
import links2 from "../../assets/images/links2.png";
import links3 from "../../assets/images/links3.png";
import links4 from "../../assets/images/links4.png";

const Footer = () => {
  return (
    <footer id="footer" className="">
      <img src={footerbg} alt="" width="100%" height="160px" />
      <div id="footerContent" className="">
        <img src={logo} alt="" width="8%" />
        <div className="tos">
          <small>Terms of service</small>
          <p>Copyright 2022 METAVIRUS LLC. All rights reserved.</p>
        </div>
        <div className="icons d-flex align-items-center ">
          <img src={links1} alt="" />
          <img src={links2} alt="" />
          <img src={links3} alt="" />
          <img src={links4} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
