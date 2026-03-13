import React, { useState } from "react";
import "../links/css/EventSchedule.css";
import Fade from "react-reveal/Fade";

import CivilGotTalent from "../links/img/CivilGotTalent.png";
import KaviSamelan from "../links/img/KaviSamelan.png"
import KiteFlying from "../links/img/KiteFlying.png"
import TraditionalPhotoshoot from "../links/img/TraditionalPhotoshoot.png"

import BridgeIt from "../links/img/EventPhotos/BridgeIt.jpg";
import FeastForBrains from "../links/img/EventPhotos/Feast For Brains.jpg";
import MLForge from "../links/img/EventPhotos/Hackathon and ML.jpg";
import Cartodraft from "../links/img/EventPhotos/Cartodraft.png";
import CivicAlchemy from "../links/img/EventPhotos/Case Clash.jpg";
import CodeBlitz from "../links/img/EventPhotos/Codecraft.webp";

export const events = {
    Technical: [
        {
            title: "Civic Alchemy",
            badge: "Flagship",
            image: CivicAlchemy,
            description: "Civic Alchemy is the flagship case study event where participants analyze urban or historic civic systems and reimagine them for modern cities. Teams propose innovative and sustainable solutions that transform existing infrastructure into future-ready urban assets.",
        },
        {
            title: "Bridge IT",
            badge: "Offline",
            image: BridgeIt,
            description: "It challenges teams to design and build small, sustainable bridges using recycled materials, which are then tested under varying loads to evaluate strength, efficiency, and resilience.",
        },
        {
            title: "CartoDraft",
            badge: "Offline",
            image: Cartodraft,
            description: "See the world like a drafter and draw it like a professional. CartoDraft tests participants on their ability to observe real structures, interpret details, and transform them into precise 2D AutoCAD drawings within a limited time.",
        },
        {
            title: "Feast for Brains",
            badge: "Offline",
            image: FeastForBrains,
            description: "Feast for Brains is a high-energy civil engineering quiz that tests core concepts, quick thinking, and industry awareness. Challenge your knowledge, outthink the competition, and claim the title of Quiz Champion.",
        },
        {
            title: "ML Forge",
            badge: "Offline",
            image: MLForge,
            description: "Step into the world of intelligent systems and data-driven decision making. ML Forge challenges participants to analyze real problem statements, build effective machine learning models, and optimize them for performance.",
        },
        {
            title: "CodeBlitz",
            badge: "Offline",
            image: CodeBlitz,
            description: "A high-speed coding challenge where ideas turn into live websites. CodeBlitz tests participants on creativity, logic, and clean execution within a strict time limit. Think fast, build smarter, and stand out with your code.",
        },
    ],
    Cultural: [
        {
            title: "Kavi Sammelan",
            badge: "Cultural",
            image: KaviSamelan,
            description: "An enchanting poetry night featuring renowned poets who captivate the audience with powerful words, rhythm, and emotion, celebrating the rich literary spirit of India.",
        },
        {
            title: "Kite Flying Competition",
            badge: "Cultural",
            image: KiteFlying,
            description: "A lively and colorful contest that fills the sky with energy, strategy, and festive spirit, bringing participants together in friendly yet thrilling competition.",
        },
        {
            title: "Civil Got Latent",
            badge: "Cultural",
            image: CivilGotTalent,
            description: "A vibrant talent showcase where participants take the stage to display their hidden skills, creativity, and performance flair in an exciting competitive format.",
        },
        {
            title: "Traditional Photoshoot Night",
            badge: "Cultural",
            image: TraditionalPhotoshoot,
            description: "A memorable evening where members come together in traditional attire, capturing the cultural essence and unity of SHILP under the night sky.",
        },
    ],
    "Pre-Events": [
    {
        title: "Alumni Meet-Up",
        badge: "Pre-Event",
        noImage: true,
        description: "An exclusive gathering of esteemed Civil Engineering alumni of IIT (BHU), creating a platform for mentorship, networking, and celebrating the enduring legacy of SHILP and CES.",
    },
    {
        title: "Technovista",
        badge: "Pre-Event",
        noImage: true,
        description: "An outreach initiative welcoming school students to participate in creative engineering competitions, nurturing young minds and igniting their passion for innovation and problem-solving.",
    },
],
};

export const badgeColors = {
    Flagship: "#f0c040",
    Offline: "#4a9b6f",
    Online: "#7b6fe8",
    Cultural: "#e87b9b",
    "Pre-Event": "#4a9b9b",
};

const EventSchedule = () => {
    const [activeCategory, setActiveCategory] = useState("Technical");

    return (
        <div className="schedule">
            <div className="event-schedule">
                <Fade top>
                    <p className="schedule-label">SHILP'26</p>
                    <h2 className="title">Our Events</h2>
                </Fade>

                {/* ── Tabs ── */}
                <Fade top delay={200}>
                    <div className="tabs">
                        {Object.keys(events).map((category) => (
                            <button
                                key={category}
                                className={`tab ${activeCategory === category ? "active" : ""}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </Fade>

                {/* ── Event Cards ── */}
                <div className="schedule-details">
                    {events[activeCategory].map((event, index) => (
                        <Fade key={index} bottom delay={index * 100}>
                            <div className={`event-card ${event.badge === "Flagship" ? "flagship" : ""}`}>
                                {!event.noImage && (
                                    <div className="event-image">
                                        {event.image ? (
                                            <img src={event.image} alt={event.title} />
                                        ) : (
                                            <div className="event-image-placeholder">
                                                <span>{event.title[0]}</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                                <div className="event-info">
                                    <span
                                        className="event-badge"
                                        style={{ background: badgeColors[event.badge] }}
                                    >
                                        {event.badge}
                                    </span>
                                    <h3 className="event-title">{event.title}</h3>
                                    <p className="event-description">{event.description}</p>
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