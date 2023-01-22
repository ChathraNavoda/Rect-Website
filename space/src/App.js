import "./App.css";
import Header from "./components/pages/Header";
import Section from "./components/pages/Section";
import Details from "./components/pages/Details";
import Carousel from "./components/pages/Carousel";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Details />
      <Carousel />
      <Contact />
    </div>
  );
}

export default App;
