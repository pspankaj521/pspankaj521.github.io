import Navbar from "./Components/navbar"
import './App.css';
import About from "./Pages/About";
import { Particle } from "./Components/P_demo";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
function App() {
  return (
    <div className="App">
     <Particle/>
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
