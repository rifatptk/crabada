import "./App.css";
import Book from "./Components/book/Book";
import Cards from "./Components/cards/Cards";
import Discover from "./Components/discover/Discover";
import Download from "./Components/download/Download";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Discover />
      <Cards />
      <Book />
      <Download />
    </div>
  );
}

export default App;
