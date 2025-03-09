import React, { useState } from "react";
import "../links/css/EventSchedule.css";
import Fade from "react-reveal/Fade"

const EventSchedule = () => {
  const [activeDay, setActiveDay] = useState("Day 1");

  const schedule = {
    "Day 1": [
      { title: "Workshop 1", location: "Online/ABLT2", time: "10:00 AM - 1:00 PM" },
      { title: "Opening Cerenomy", location: "ABLT4", time: "11:00 AM - 1:00 PM" },
      { title: "Vintage Visionaries", location: "Civil Department", time: "2:00 PM - 5:00 PM" },
      { title: "Code Craft", location: "Online", time: "5:30 PM - 7:30 PM" },
    ],
    "Day 2": [
      { title: "Capture the  Snap / ML Forge", location: "Civil Department", time: "9:00 AM - 5:00 PM" },
      { title: "Feast for Brain", location: "Civil Department", time: "8:00 AM - 10:00 AM / 11:00 AM - 1:00 PM"},
      { title: "CodeBlitz (hackathon)", location: "Online", time: "Deadline for submission: 5:00 PM" },
      { title: "Workshop 2", location: "Online", time: "2:00 PM - 3:30 PM" },
      { title: "BridgeIt", location: "Civil department", time: "2:00 PM - 5:00 PM" },
    ],
    "Day 3": [
      { title: "Surveyor's Hunt / 3 Minute Thesis", location: "Civil Department", time: "8:00 AM - 11:00 AM" },
      { title: "CartoDraft", location: "Civil Department", time: "1:30 PM - 4:30 PM" },
      { title: "Closing Ceremony", location: "Civil Department", time: "5:00 PM - 6:00 PM" },
    ],
  };

  // Progress Bar Width Calculation
  const progressWidth = (Object.keys(schedule).indexOf(activeDay) + 1) / Object.keys(schedule).length * 100;

  return (
    <div className = "schedule">
    <div className="event-schedule">
      <Fade top>
      <h2 className="title">Event Schedule</h2>
      </Fade>
      {/* Tabs */}
      <div className="tabs">
        {Object.keys(schedule).map((day) => (
          <button
            key={day}
            className={`tab ${activeDay === day ? "active" : ""}`}
            onClick={() => setActiveDay(day)}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="progress-bar-schedule">
        <div className="progress-schedule" style={{ width: `${progressWidth}%` }}></div>
      </div>

      {/* Schedule Details */}
      <div className="schedule-details">
        {schedule[activeDay].map((event, index) => (
          <Fade {...(index % 2 === 0 ? { left: true, delay: index * 100 } : { right: true, delay: index * 100 })}>
          <div key={index} className="event-card">
            <div className="event-info">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-location">{event.location}</p>
            </div>
            <div className="event-time">
              <p className="time">{event.time}</p>
              <p className="duration">{event.duration}</p>
            </div>
          </div>
          </Fade>
        ))}
      </div>
    </div>
    </div>
  );
};

export default EventSchedule;
