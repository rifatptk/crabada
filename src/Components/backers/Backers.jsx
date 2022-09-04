import "./backers.scss";
import avalance from "../../assets/images/avalance.png";

const Backers = () => {
  return (
    <section className="backers">
      <div className="container">
        <div className="backers_bg">
          <div className="common_title">
            <span>Backers</span>
          </div>
          <div className="backers_brands">
            <div className="w-75 mx-auto d-flex justify-content-between">
              <div className="h-25">
                {/* <img src={avalance} alt="Avalanche" /> */}
              </div>
              <div className="h-25">
                {/* <img src={avalance} alt="Avalanche" /> */}
              </div>
            </div>

            <div className="w-75 mx-auto d-flex justify-content-between">
              <div className="backers_brand">
                <img src={avalance} alt="Sky Vision Capital" />
              </div>
              <div className="backers_brand">
                <img src={avalance} alt="Wangarian" />
              </div>
            </div>

            <div className="backers_brand">
              <img src={avalance} alt="Not3lau White" />
            </div>
            <div className="backers_brand">
              <img src={avalance} alt="Zeep Prime Whie" />
            </div>
            <div className="backers_brand">
              <img src={avalance} alt="Devmons" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Backers;
