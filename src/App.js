import './App.css';
import Navbar from "./components/NavBar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import TheGoods from "./components/TheGoods/TheGoods";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Portfolio />
      <TheGoods />
      <Contact />
    </div>
  );
}

export default App;
