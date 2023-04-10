import "./App.css";
// Components
import Navbar from "./Components/Navbar/Navbar";

// Pages
import Hero from "./Pages/Hero/Hero";
import About from "./Pages/About/About";
import Introduce from "./Pages/Introduce/Introduce";
import Collection from "./Pages/Collection/Collection";
import Roadmap from "./Pages/Roadmap/Roadmap";
import Ourteam from "./Pages/Ourteam/Ourteam";
import Questions from "./Pages/Questions/Questions";
import Experience from "./Pages/Experience/Experience";
import Muzo from "./Pages/Muzo/Muzo";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Introduce />
      <Collection />
      <Roadmap />
      <Ourteam />
      <Questions />
      <Experience />
      <Muzo />
      <Footer />
    </div>
  );
};

export default App;
