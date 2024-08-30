import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/about";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
