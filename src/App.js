import { useEffect, useState } from "react";
import "./App.css";
import Backers from "./Components/backers/Backers";
import Book from "./Components/book/Book";
import Cards from "./Components/cards/Cards";
import Discover from "./Components/discover/Discover";
import Footer from "./Components/footer/Footer";
// import Download from "./Components/download/Download";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Rail from "./Components/rail/Rail";
import Roadmap from "./Components/Roadmap/Roadmap";
import Sidenav from "./Components/sidenav/Sidenav";

function App() {
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div className="App">
      {show && <Sidenav />}
      <Header />
      <Hero />
      <Discover />
      <Cards />
      <Book />
      {/* <Download /> */}
      <Rail />
      {/* <Roadmap /> */}
      <Backers />
      <Footer />
    </div>
  );
}

export default App;
