import Navbar from "./Components/navbar"
import './App.css';
import About from "./Pages/About";
import { Particle } from "./Components/P_demo";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
     <Particle/>
      <Navbar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
