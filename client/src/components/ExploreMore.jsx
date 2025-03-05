import React from 'react';
import '../links/css/exploreMore.css';
import {Link} from 'react-router-dom'
import Button from './Button';
import Fade from 'react-reveal/Fade';

function ExploreMore() {
  return (
    <div className='events'>
      <Fade top>
      <h2 className="explore-heading">Featured Events</h2>
      </Fade>
      <div className="event-gallery">
      <Fade left delay={200}>
        <div className="event">
          <Link to="/events" className="no-underline">
            <img src="./EventPhotos/ML Forge.webp" alt="Technical Workshop" />
            <h3>ML Forge</h3>
            {/* <p>Hands-on learning experience</p> */}
          </Link>
        </div>
        </Fade>
        <Fade bottom delay={200}>
        <div className="event">
          <Link to="/events" className="no-underline">
            <img src='./EventPhotos/Cartodraft.webp' alt="Guest Lecture" />
            <h3>Cartodraft</h3>
            {/* <p>Industry experts sharing insights</p> */}
          </Link>
        </div>
        </Fade>
        <Fade right delay={200}>
        <div className="event">
          <Link to="/events" className="no-underline">
            <img src="./EventPhotos/Capture The Snap.webp" alt="Competition" />
            <h3>Capture The Snap</h3>
            {/* <p>Test your skills</p> */}
          </Link>
        </div>
        </Fade>
      </div>
      {/* Explore More Button */}
      <Fade bottom delay={400}>
      <div className="exploreMore">
        <Button name="Explore More!" url="/events" target="" />
      </div>
      </Fade>
    </div>
  );
}

export default ExploreMore;
