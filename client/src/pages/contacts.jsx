import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Fade from "react-reveal/Fade";
import Loader from "../components/LoadingScreen";
import "../links/css/Contact.css";

const Contacts = ({ AllAuth }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <div className="App">
            {loading ? (
                <div className="loader-container">
                    <Loader onComplete={() => setLoading(false)} />
                </div>
            ) : (
                <div className="body" id="contact">
                    <div className="contactus">
                        <NavBar AllAuth={AllAuth} />
                        <Fade top>
                            <div className="contactusTop">Get in Touch</div>
                        </Fade>

                        {/* ── Contact People ── */}
                        <div className="contact-body">
                            <Fade left>
                                <div className="contact">
                                    <h2>Prithvi Dutta</h2>
                                    <a href="mailto:prithvi.dutta.civ22@itbhu.ac.in" title="prithvi.dutta.civ22@itbhu.ac.in">
                                        <span className="mail-icon">✉️</span>
                                        prithvi.dutta.civ22@itbhu.ac.in
                                    </a>
                                    <p>📞 +91 6009193323</p>
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div className="contact">
                                    <h2>Sunil Parswal</h2>
                                    <a href="mailto:sunil.parswal.civ22@itbhu.ac.in" title="sunil.parswal.civ22@itbhu.ac.in">
                                        <span className="mail-icon">✉️</span>
                                        sunil.parswal.civ22@itbhu.ac.in
                                    </a>
                                    <p>📞 +91 7976050475</p>
                                </div>
                            </Fade>
                            <Fade right>
                                <div className="contact">
                                    <h2>Ayush Kumar</h2>
                                    <a href="mailto:ayush.kumar.civ22@itbhu.ac.in" title="ayush.kumar.civ22@itbhu.ac.in">
                                        <span className="mail-icon">✉️</span>
                                        ayush.kumar.civ22@itbhu.ac.in
                                    </a>
                                    <p>📞 +91 6386442663</p>
                                </div>
                            </Fade>
                        </div>

                        {/* ── Social & Email ── */}
                        <Fade bottom delay={200}>
                            <div className="contact-socials">
                                <h3 className="socials-heading">Connect With Us</h3>
                                <div className="socials-body">
                                    <a href="mailto:shilp@itbhu.ac.in" className="social-item">
                                        <span className="social-icon">✉️</span>
                                        <span>shilp@itbhu.ac.in</span>
                                    </a>
                                    <a href="https://www.instagram.com/shilp.iitbhu" target="_blank" rel="noreferrer" className="social-item">
                                        <span className="social-icon">📸</span>
                                        <span>instagram.com/shilp.iitbhu</span>
                                    </a>
                                    <a href="https://www.facebook.com/shilpiitbhu" target="_blank" rel="noreferrer" className="social-item">
                                        <span className="social-icon">📘</span>
                                        <span>facebook.com/shilpiitbhu</span>
                                    </a>
                                    <a href="https://www.linkedin.com/company/civil-engineering-society-iit-bhu" target="_blank" rel="noreferrer" className="social-item">
                                        <span className="social-icon">💼</span>
                                        <span>Civil Engineering Society IIT BHU</span>
                                    </a>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <Footer />
                </div>
            )}
        </div>
    );
};

export default Contacts;
