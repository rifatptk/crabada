import "./footer.scss";
// import telegram from "../../assets/images/telegram.webp";
// import twitter from "../../assets/images/twitter.webp";
// import discord from "../../assets/images/discord.webp";
import crabada from "../../assets/images/crabada.webp";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer">
            <div className="footer_info">
              <img src={crabada} alt="Crabada" />
              <div className="flex flex-col">
                <div className="flex items-center">
                  <p>Terms of service</p>
                  <p>Whitepaper</p>
                </div>
                <p className="copyright">
                  Copyright © 2021 CRABADA LLC. All rights reserved
                </p>
              </div>
            </div>
            <ul>
              <li>
                <a href="https://t.me/playcrabada" title="Telegram">
                  {/* <img src={telegram} alt="Telegram" /> */}
                </a>
              </li>
              <li>
                <a href="http://discord.gg/PlayCrabada" title="Discord">
                  {/* <img src={discord} alt="Discord" /> */}
                </a>
              </li>
              <li>
                <a href="https://twitter.com/playcrabada?s=11" title="Twitter">
                  {/* <img src={twitter} alt="Twister" /> */}
                </a>
              </li>
              <li>
                <a href="https://medium.com/@PlayCrabada" title="Medium">
                  {/* <img
                    src="/static/media/logo_medium.932a875c6c1ac449fa6a58cc228ec4a7.svg"
                    alt="Medium"
                  /> */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
