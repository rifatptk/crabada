import "./App.css";
import Discover from "./Components/discover/Discover";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Discover />
    </div>
  );
}

export default App;
