import styles from "./App.module.css";
import About from "./components/About/About";
import Contact from "./components/Contact/contact";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import particlesJS from "particles.js";

// particlesJS.load(@dom-id, @path-json, @callback (optional));
particlesJS.load("particles-js", "assets/particles.json", function () {
  console.log("callback - particles.js config loaded");
});

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
