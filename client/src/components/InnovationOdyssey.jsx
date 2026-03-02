import React, { useState } from 'react'
import '../links/css/innovationOdyssey.css'
import Fade from 'react-reveal/Fade';
import { events, badgeColors } from './EventSchedule';

function InnovationOdyssey() {
    const [activeCategory, setActiveCategory] = useState("Technical");

  return (
    <div className='innovation-odyssey'>
        <Fade top delay={200}>
            <p className="events-label">SHILP'26</p>
            <h1 className="events-heading">Our Events</h1>
            <p className="events-tagline">Urban Alchemy · Smart Cities, Green Future</p>
        </Fade>

        {/* ── Tab Switcher ── */}
        <Fade top delay={300}>
            <div className="events-tabs">
                {Object.keys(events).map((category) => (
                    <button
                        key={category}
                        className={`events-tab ${activeCategory === category ? "active" : ""}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </Fade>

        {/* ── Event Rows ── */}
        <div className="events-list">
            {events[activeCategory].map((event, index) => (
                <Fade key={index} bottom delay={index * 100}>
                    <div className={`events-row ${index % 2 !== 0 ? "reverse" : ""} ${event.badge === "Flagship" ? "flagship" : ""}`}>
                        {!event.noImage && (
                            <div className="events-row-image">
                                {event.image ? (
                                    <img src={event.image} alt={event.title} />
                                ) : (
                                    <div className="events-row-placeholder">
                                        <span>{event.title[0]}</span>
                                    </div>
                                )}
                            </div>
                        )}
                        <div className={`events-row-info ${event.noImage ? "full-width" : ""}`}>
                            <span
                                className="events-card-badge"
                                style={{ background: badgeColors[event.badge] }}
                            >
                                {event.badge}
                            </span>
                            <h3 className="events-card-title">{event.title}</h3>
                            <p className="events-card-description">{event.description}</p>
                        </div>
                    </div>
                </Fade>
            ))}
        </div>
    </div>
  )
}

export default InnovationOdyssey