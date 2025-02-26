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
                            <h2>Devesh Sindhi</h2>
                            <a href="mailto:devesh.sindhi.civ21@itbhu.ac.in">devesh.sindhi.civ21@itbhu.ac.in</a>
                            <p>📞 +91 7752962212</p>
                        </div>
						</Fade>
						<Fade right>
                        <div className="contact">
                            <h2>Param Srivastava</h2>
                            <a href="mailto:param.srivastava.civ21@itbhu.ac.in">param.srivastava.civ21@itbhu.ac.in</a>
                            <p>📞 +91 8369895384</p>
                        </div>
						</Fade>
                        <Fade right>
                        <div className="contact">
                            <h2>Mugdha Chaturvedi</h2>
                            <a href="mailto:mugdha.chaturvedi.civ22@itbhu.ac.in">mugdha.chaturvedi.civ22@itbhu.ac.in</a>
                            <p>📞 +91 9305781467</p>
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
