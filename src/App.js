import Navbar from './components/Navbar.js';
import Hero from './components/Home.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Experience from './components/Experience.js';
import Contact from './components/Contact.js';
import './App.css'; // Import your CSS file for styling

const App = () => {
  return (
    <>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default App;
