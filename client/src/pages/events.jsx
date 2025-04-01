import React, { useState, useEffect } from "react";
import "../links/css/home.css";
import "../links/css/events.css";
import NavBar from "../components/NavBar";
import InnovationOdyssey from "../components/InnovationOdyssey";
import TechShowcase from "../components/TechShowcase";
import CivilExpo from "../components/CivilExpo";
import ClashCarnival from "../components/ClashCarnival";
import Footer from "../components/Footer";
import Fade from "react-reveal/Fade";
import Loader from "../components/LoadingScreen";
import Button from "../components/Button";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

const Events = ({ AllAuth }) => {
  const [RegisteredEvents, setRegisteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const uid = localStorage.getItem("UID");

    // Only fetch registered events if the user is authenticated
    if (uid) {
      const docRef = doc(db, "userProfile", uid);
      getDoc(docRef)
        .then((docSnap) => {
          if (docSnap.exists()) {
            const data = docSnap.data();
            if (data.Events) {
              setRegisteredEvents(data.Events);
            }
          }
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
    }
  }, []);

  // Function to handle registration
  const handleRegister = () => {
    const uid = localStorage.getItem("UID");

    // If the user is not authenticated, redirect to the login page
    if (!uid) {
      navigate("/login");
      return;
    }

    // If the user is authenticated, proceed with registration
    // Add your registration logic here
    console.log("User is authenticated. Proceeding with registration...");
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
            background: "#271e29",
          }}
        >
          <Loader onComplete={() => setLoading(false)} />
        </div>
      ) : (
        <div className="body events-body">
          <NavBar AllAuth={AllAuth} />
          <InnovationOdyssey />
          <div className = "note-payment"> Pay the Registration fee for complete registration</div> 
          <div className="Container">
            <TechShowcase
              AllAuth={AllAuth}
              RegisteredEvents={RegisteredEvents}
              onRegister={handleRegister} // Pass the handleRegister function
            />
            <CivilExpo
              AllAuth={AllAuth}
              RegisteredEvents={RegisteredEvents}
              onRegister={handleRegister} // Pass the handleRegister function
            />
            <ClashCarnival
              AllAuth={AllAuth}
              RegisteredEvents={RegisteredEvents}
              onRegister={handleRegister} // Pass the handleRegister function
            />
          </div>
          <Button
            name="RULEBOOK"
            url="/pdfs/RULEBOOK(Main Events).pdf"
            target="_blank"
          />
          <div className="Bottom">
            <Fade bottom>
              <Footer />
            </Fade>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;