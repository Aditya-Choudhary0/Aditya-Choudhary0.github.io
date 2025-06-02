import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import Github from './Components/Github';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <About/>
      <Experience />
      <Skills/>
      <Projects />
      <Github />
      <Contact />
      <Footer /> 
    </div>
  );
}

export default App;
