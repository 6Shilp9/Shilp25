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
                    <div className="contact-body">
						<Fade left>
                        <div className="contact">
                            <h2>Prithvi Dutta</h2>
                            <a href="mailto:prithvi.dutta.civ22@itbhu.ac.in">prithvi.dutta.civ22@itbhu.ac.in</a>
                            <p>📞 +91 6009193323</p>
                        </div>
						</Fade>
						<Fade right>
                        <div className="contact">
                            <h2>Sunil Parswal</h2>
                            <a href="mailto:sunil.parswal.civ22@itbhu.ac.in">sunil.parswal.civ22@itbhu.ac.in</a>
                            <p>📞 +91 7976050475</p>
                        </div>
						</Fade>
                        <Fade right>
                        <div className="contact">
                            <h2>Ayush Kumar</h2>
                            <a href="mailto:ayush.kumar.civ22@itbhu.ac.in">ayush.kumar.civ22@itbhu.ac.in</a>
                            <p>📞 +91 6386442663</p>
                        </div>
						</Fade>
                    </div>
					</div>
                    <Footer />
                </div>
            )}
        </div>
    );
};

export default Contacts;
