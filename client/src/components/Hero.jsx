import React from 'react';
import '../links/css/Hero.css';
import Timer from './Timer';
import ShilpLogo from '../links/img/Shilp-logo.png';
import Fade from "react-reveal/Fade";


function Hero() {
  return (
    <div className="hero-container" id="home">
      <div className="hero-content">
        <Fade left>
        <div className="hero-left"></div>
        </Fade>
        <Fade right>
        <div className="hero-right"></div>
        </Fade>
        <Fade top delay={1400}>
        <h1 className="hero-title">SHILP'26</h1>
        <h2 className="hero-subtitle">Civil Engineering Society</h2>
        </Fade>
        <Fade delay={1000}>
        <img src={ShilpLogo} alt="Shilp Logo" className="hero-logo" />
        </Fade>
      </div>
      <div className="hero-bottom">
        <Fade bottom delay = {1600}>
        <h3 className="hero-date">3-5 April, 2025</h3>
        <div className="countdown-timer">
          <Timer />
        </div>
        </Fade>
      </div>
    </div>
  );
}

export default Hero;
