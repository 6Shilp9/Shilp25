import React from 'react';
import '../links/css/Hero.css';
import Timer from './Timer';
import ShilpLogo from '../links/img/SHILP.png';
import Fade from "react-reveal/Fade";


function Hero() {
  return (
    <div className="hero-container" id="home">
      <div className="hero-content">
        <div>
          <Fade left delay={400}>
            <h1 className="hero-title">SHILP'26</h1>
          </Fade>
          <Fade left delay={500}>
            <h2 className="hero-subtitle">Civil Engineering Society</h2>
          </Fade>
          <div className="hero-bottom">
            <Fade bottom delay = {600}>
              <h3 className="hero-date">3-5 April, 2026</h3>
            </Fade>
            <Fade bottom delay={700}>
              <div className="countdown-timer">
                <Timer />
              </div>
            </Fade>
          </div>
        </div>
        <div>
          <Fade right delay={1000}>
            <img src={ShilpLogo} alt="Shilp Logo" className="hero-logo" />
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Hero;