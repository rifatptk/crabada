import "./App.css";
import Cards from "./Components/cards/Cards";
import Discover from "./Components/discover/Discover";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Discover />
      <Cards />
    </div>
  );
}

export default App;
