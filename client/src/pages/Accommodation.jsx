import React, { useState, useEffect } from "react";
import "../links/css/home.css";
import "../links/css/accommodation.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AccomodationPolicies from "../components/Accommodation/AccommodationPolicies";
import Instructions from "../components/Accommodation/Instructions";
import Faqs from "../components/Accommodation/Faqs";
import ReachingIITBHU from "../components/Accommodation/ReachingIITBHU";
import Fade from "react-reveal/Fade";
import Loader from "../components/LoadingScreen";

const Accommodation = ({ AllAuth }) => {
  const [onButton, setOnButton] = useState("accommodationPolicies");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const buttonStyle = {
    backgroundColor: "rgb(209, 159, 33)",
  };

  return (
    <div className="App">
      {loading ? (
        <div
          className="loader-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: "black",
          }}
        >
          <Loader onComplete={() => setLoading(false)} />
        </div>
      ) : (
        <div className="body">
          <NavBar AllAuth={AllAuth} />
          <Fade top>
            <div className="accommodation-heading">
              <h1>
                <span>ACCOMMODATION</span> AT{" "}
                <div className="desktop-view">SHILP IIT BHU</div>
              </h1>
            </div>
          </Fade>
          <div className="accommodation-tabs">
            <div className="buttons">
              <button
                className="btn"
                style={
                  onButton === "accommodationPolicies"
                    ? buttonStyle
                    : { backgroundColor: "rgb(68, 49, 24)" }
                }
                onClick={() => setOnButton("accommodationPolicies")}
              >
                Accommodation Policies
              </button>
              <button
                className="btn"
                style={
                  onButton === "instructions"
                    ? buttonStyle
                    : { backgroundColor: "rgb(68, 49, 24)" }
                }
                onClick={() => setOnButton("instructions")}
              >
                Instructions
              </button>
              <button
                className="btn"
                style={
                  onButton === "faqs"
                    ? buttonStyle
                    : { backgroundColor: "rgb(68, 49, 24)" }
                }
                onClick={() => setOnButton("faqs")}
              >
                FAQs
              </button>
              <button
                className="btn"
                style={
                  onButton === "reachingIITBHU"
                    ? buttonStyle
                    : { backgroundColor: "rgb(68, 49, 24)" }
                }
                onClick={() => setOnButton("reachingIITBHU")}
              >
                Reaching IIT BHU
              </button>
            </div>
            {onButton === "accommodationPolicies" ? (
              <AccomodationPolicies />
            ) : onButton === "instructions" ? (
              <Instructions />
            ) : onButton === "faqs" ? (
              <Faqs />
            ) : onButton === "reachingIITBHU" ? (
              <ReachingIITBHU />
            ) : null}
          </div>
          <Fade bottom>
            <Footer className="footer"></Footer>
          </Fade>
        </div>
      )}
    </div>
  );
};

export default Accommodation;
