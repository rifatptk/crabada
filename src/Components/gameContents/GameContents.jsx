import gameleft from "../../assets/images/gameleft.png";
import gameright from "../../assets/images/gameright.png";
import video from "../../assets/videos/video.mp4";
import j7 from "../../assets/images/j7.png";
import left from "../../assets/images/j2.png";
import right from "../../assets/images/j3.png";
import a5 from "../../assets/images/a-05.png";
import tokenchart from "../../assets/images/tokenchart.png";
import a71 from "../../assets/images/a-071.png";
import a72 from "../../assets/images/a-072.png";
import "./content.scss";

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
      <div className="text-center mt-5">
        <h3>A little gameplay</h3>
        <div className=" ">
          <video
            controls
            muted
            className="rounded"
            src={video}
            width="50%"
          ></video>
        </div>
        {/* <div className="col-md-6">
          <img src={eleven} className="rounded" alt="" width="100%" />
          <img src={lo} className="mt-3 rounded" alt="" width="100%" />
          <img src={thirteen} className="mt-3 rounded" alt="" width="100%" />
        </div> */}
      </div>

      <h1 className="mt-5 pt-5 mb-2 text-center">More details</h1>
      <h5 className="text-center">Token & Liquidity</h5>

      <div className="container py-5">
        <h1 id="why-title" className="mb-5">
          Token Distribution
        </h1>
        <div className="row align-items-center">
          <div className="col-md-6">
            <table className="tbl">
              <thead>
                <tr>
                  <th>CONTENT</th>
                  <th>PERCENTAGE</th>
                  <th>NUMBER</th>
                  <th>PRICE (USD)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total issuance</td>
                  <td>100%</td>
                  <td>100,000,000</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Cornerstone round financing (Done)</td>
                  <td>3%</td>
                  <td>3,000,000</td>
                  <td>$300,000</td>
                </tr>
                <tr>
                  <td>Seed round financing (In progress)</td>
                  <td>7%</td>
                  <td>7,000,000</td>
                  <td>$1,400,000</td>
                </tr>
                <tr>
                  <td>First pre sale</td>
                  <td>4%</td>
                  <td>4,000,000</td>
                  <td>1,200,000</td>
                </tr>
                <tr>
                  <td>Second batch of pre sale</td>
                  <td>6%</td>
                  <td>6,000,000</td>
                  <td>$2,40,000</td>
                </tr>
                <tr>
                  <td>ICO/IDO</td>
                  <td>10%</td>
                  <td>10,000,000</td>
                  <td>$5,000,000</td>
                </tr>
                <tr>
                  <td>Founder & Team</td>
                  <td>18%</td>
                  <td>18,000,000</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Consultant</td>
                  <td>6%</td>
                  <td>6,000,000</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Game output</td>
                  <td>20%</td>
                  <td>20,000,000</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Marketing cooperation</td>
                  <td>6%</td>
                  <td>6,000,000</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Community airdrop</td>
                  <td>3%</td>
                  <td>3,000,000</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>User creation reward</td>
                  <td>7%</td>
                  <td>7,000,000</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Company reserve</td>
                  <td>10%</td>
                  <td>10,000,000</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-6 mt-sm-5">
            <img src={tokenchart} alt="" width="100%" />
          </div>
        </div>
      </div>

      <div className=" py-5">
        <h2 className="text-center mt-5">Interactive System</h2>
        <img src={a5} alt="" className="rounded" width="100%" />

        <h2 className="text-center mt-5 mb-0 pt-5">Liquidity Distribution</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={a71} alt="" className="rounded my-5" width="100%" />
          </div>
          <div className="col-md-6">
            <img src={a72} alt="" className="rounded my-5" width="100%" />
          </div>
        </div>

        {/* <img src={a6} alt="" className="rounded my-5" width="100%" /> */}
        {/* <img id="process" src={a8} alt="" className="rounded" width="100%" /> */}
        <h1 className="mt-5 pt-5 mb-2 text-center">Team</h1>
        <h5 className="text-center mb-5">Meet our team</h5>
        <div className="row">
          <div className="col-md-6 p-3">
            <h3>Brice Bian - Founder and Game Producer</h3>
            <small>
              More than 17 years of experience in gam development and more than
              4 years of experience in blockchain game development. Head of the
              development and operation team of several tens of millions of
              traditional online game products,serial entrepreneur, and
              successfull executive. Living in canada, Brice owns lucrative
              companies in many fields including food delivery, biodegradable
              plastic products in cities like Vancouver in western canada.
              Brice's expericnce in creation and management has ecouraged the
              metavirus project with maturity and excellence in the design of
              the game product itself, while strengthening output efficiency and
              the close cooperation of the founding team.
            </small>
          </div>
          <div className="col-md-6 p-3">
            <h3>Qilin - Co-founder and COO</h3>
            <small>
              Plentiful practical experience in the fields of blockchain,
              finance and media, Qilin has operated several successful projects
              in the blockchain field, managed & operated a blockchain
              distributed overseas storage branch. Qilin is blockchain angel
              investor, founder of beijing gongxin sunac cloud technology
              co.,Ltd. And chairman of the yottachain education committee, an
              internationally renowned public storage chain. Qilin's
              entrepreneurial and investment experience in the blockchain field
              gives sufficient depth and innovation to the MetaVirus projects's
              decentralized structure, management thinking & financial attribute
              design. and can develop an industry leading marketing strategy for
              the project.
            </small>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-6 p-3">
            <h3>TT - Co-founder and CTO</h3>
            <small>
              More than 18 years of experience in gam development. Chief
              architect and technical director of millions online traditional
              online gam products. Technical director of large-scale travel
              experience VR game products. TT's massively multiplayer online
              game developement experience can ensure that the product is
              technically stable, functional & scalable.
            </small>
          </div>
          <div className="col-md-6 p-3">
            <h3>Chiris - Copywriting & Graphics director</h3>
            <small>
              Chiris Horwood is a teacher and coach who has spent almost two
              decades in asia and travelling the world. Chiris has produced one
              feature-length documentary and multiple short films. His
              photography and digital art has featured in various publication
              and some of his work can be found in personal collections and on
              the walls of select cafes and restaurants.
            </small>
          </div>
        </div>
        {/* <img src={a9} alt="" className="rounded my-5" width="100%" /> */}
      </div>
    </div>
  );
};

export default GameContents;
