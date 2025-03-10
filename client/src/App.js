import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/home";
import Events from "./pages/events";
import Competitions from "./pages/competitions";
import Guests from "./pages/guests";
import Contacts from "./pages/contacts";
import Store from "./pages/Store";
import Accommodation from "./pages/Accommodation";
import Team from "./pages/team";
import Media from "./pages/media";
import LoginPage from "./pages/loginPage";
import Admin from "./pages/admin";
import Gallery from "./pages/Gallery";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isProfileComplete, setIsProfileComplete] = useState(false);

  const AllAuth = {
    setAuth: setIsAuthenticated,
    isAuth: isAuthenticated,
    setIsProf: setIsProfileComplete,
    isProf: isProfileComplete,
  };

  // Check authentication and profile completion status
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setIsAuthenticated(true);
        try {
          const docRef = doc(db, "userProfile", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const userData = docSnap.data();
            const isProfileComplete =
              userData.Email &&
              userData.Mobile &&
              userData.College &&
              userData.Year;
            setIsProfileComplete(!!isProfileComplete);
          } else {
            setIsProfileComplete(false);
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
          setIsProfileComplete(false);
        }
      } else {
        setIsAuthenticated(false);
        setIsProfileComplete(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route exact path="/" element={<Home AllAuth={AllAuth} />} />
        <Route exact path="/events" element={<Events AllAuth={AllAuth} />} />
        <Route
          exact
          path="/competitions"
          element={<Competitions AllAuth={AllAuth} />}
        />
        <Route exact path="/guests" element={<Guests AllAuth={AllAuth} />} />
        <Route
          exact
          path="/contacts"
          element={<Contacts AllAuth={AllAuth} />}
        />
        <Route exact path="/store" element={<Store AllAuth={AllAuth} />} />
        <Route
          exact
          path="/accommodations"
          element={<Accommodation AllAuth={AllAuth} />}
        />
        <Route exact path="/team" element={<Team AllAuth={AllAuth} />} />
        <Route exact path="/media" element={<Media AllAuth={AllAuth} />} />
        <Route exact path="/gallery" element={<Gallery AllAuth={AllAuth} />} />

        {/* Protected Routes */}
        <Route
          exact
          path="/profile"
          element={
            isAuthenticated ? (
              <Profile AllAuth={AllAuth} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          exact
          path="/admin"
          element={
            isAuthenticated ? (
              <Admin AllAuth={AllAuth} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Auth Routes */}
        <Route
          exact
          path="/login"
          element={
            !isAuthenticated ? (
              <LoginPage AllAuth={AllAuth} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;