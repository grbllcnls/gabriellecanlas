import logo from './logo.svg';
import './App.css';

import { FaGithub, FaLinkedin, FaDeviantart } from "react-icons/fa";
import gabImage from './images/me.jpg';
import backgroundImage from './images/laundromat.gif'
function App() {
  return (
    <div className="app-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <header className="header">
      <div className="gab-container">
        <img 
          src={gabImage} 
          alt="Gabrielle" 
          className="gab-image"
        />
      <div class="container">
      <div class="pixel"><p>Gabrielle Canlas</p></div>
     
      <div className="social-links">
        <a href="https://github.com/grbllcnls" target="_blank"><FaGithub size={30} /></a>
        <a href="https://www.linkedin.com/in/gabrielle-canlas/" target="_blank"><FaLinkedin size={30} /></a>
        <a href="https://www.deviantart.com/gbrllcnls" target="_blank"><FaDeviantart size={30} /></a>
      </div>
      </div>
      </div>
    </header>
  </div>
  );
  }


export default App;
