import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";  
import '../links/css/shilp.css'
import shilp_logo from '../links/img/SHILPLOGOWHITE.png'
import { FaUsers, FaCalendarAlt, FaTrophy } from "react-icons/fa";
import Fade from "react-reveal/Fade";

function Shilp() {
    const [showParticipants, setShowParticipants] = useState(false);
    const [showEvents, setShowEvents] = useState(false);
    const [showPrize, setShowPrize] = useState(false);

    const participantsRef = useRef(null);
    const eventsRef = useRef(null);
    const prizeRef = useRef(null);

    // 📌 Function to observe each number separately
    useEffect(() => {
        const observerOptions = { threshold: 0.5 };

        // Function to create an observer
        const createObserver = (ref, setState) => {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setState(true);
                }
            }, observerOptions);

            if (ref.current) observer.observe(ref.current);

            return () => {
                if (ref.current) observer.unobserve(ref.current);
            };
        };

        const cleanup1 = createObserver(participantsRef, setShowParticipants);
        const cleanup2 = createObserver(eventsRef, setShowEvents);
        const cleanup3 = createObserver(prizeRef, setShowPrize);

        return () => {
            cleanup1();
            cleanup2();
            cleanup3();
        };
    }, []);

    return (
        <div className="shilp-wrapper">

            {/* ── Part 1: Theme Section ── */}
            <div className="theme-section">
                <Fade bottom delay={200}>
                    <p className="theme-label">Theme</p>
                    <h2 className="theme-title">Urban Alchemy</h2>
                    <p className="theme-tagline">Smart Cities, Green Future</p>
                    <p className="theme-description">
                        Just as alchemy transforms base elements into something extraordinary, 
                        Urban Alchemy symbolizes the evolution of urban spaces into smart, 
                        resilient, and green ecosystems — where technology and environmental 
                        responsibility converge.
                    </p>
                </Fade>
            </div>

            {/* ── Part 2: About Shilp ── */}
            <div className="contain">
                <Fade left delay={250}>
                    <div className="shilp-logo">
                        <img src={shilp_logo} alt="Shilp Logo"/>
                    </div>
                </Fade>
                <div className="description">
                    <Fade right delay={350}>
                        <p>
                            <strong className="shilp-strong">Shilp</strong>, the annual fest by the Civil Engineering Society, is a dynamic celebration of creativity and innovation. A pivotal platform fostering collaboration, promoting innovation, and celebrating engineering excellence at the national level.
                        </p>
                    </Fade>

                    <div className="stats">
                        <Fade delay={650} duration={500}>
                            <div className="stat-item">
                                <FaTrophy className="icon prize"/>
                                <h2 ref={prizeRef}>
                                    ₹<CountUp start={0} end={showPrize ? 100 : 0} duration={2.5} decimals={1} />K+
                                </h2>
                                <p>Prize pool</p>
                            </div>
                        </Fade>
                        <Fade delay={450} duration={500}>
                            <div className="stat-item">
                                <FaUsers className="icon people"/>
                                <h2 ref={participantsRef}>
                                    <CountUp start={0} end={showParticipants ? 200 : 0} duration={2.5} />+
                                </h2>
                                <p>Participants from across India</p>
                            </div>
                        </Fade>
                        <Fade delay={550} duration={500}>
                            <div className="stat-item culture">
                                <FaCalendarAlt className="icon cult" />
                                <h2 ref={eventsRef}>
                                    <CountUp start={0} end={showEvents ? 15 : 0} duration={2.5} />+
                                </h2>
                                <p>Technical and Cultural programs</p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Shilp;
