import logo from "../../assets/logos/logo.webp";
import "./header.scss";

function Header() {
  return (
    <div
      id="header"
      className="d-flex justify-content-between align-items-center mx-5 my-3"
    >
      <div id="logoContainer">
        <img src={logo} alt="" />
      </div>
      <div id="navbarContainer">
        <ul id="navLinks" className="d-flex gap-4">
          <li className="navLink">
            <a href=".">Home</a>{" "}
          </li>
          <li className="navLink">
            <a href="#marketplace">Marketplace</a>{" "}
          </li>
          <li className="navLink">
            <a href="#staking">Staking</a>{" "}
          </li>
          <li className="navLink">
            <a href="#bounty">Bounty</a>{" "}
          </li>
          <li className="navLink">
            <a href="#more">More</a>{" "}
          </li>
          <li className="navLink">
            <a href="#whitepaper">Whitepaper</a>{" "}
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
}

export default Header;
