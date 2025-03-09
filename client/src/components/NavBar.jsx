import React from 'react';
import "../links/css/navbar.css";
import SHILP from "../links/img/SHILP.png";
import { Link, useLocation } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { useState } from "react";

const NavBar = ({ AllAuth }) => {
    const isAuth = AllAuth.isAuth;
    const setAuth = AllAuth.setAuth;
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isProgramsDropdownOpen, setIsProgramsDropdownOpen] = useState(false); 
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); 

    const onLogout = (e) => {
        e.preventDefault();
        signOut(auth).then(() => {
            localStorage.removeItem("displayName");
            localStorage.removeItem("photoURL");
            localStorage.removeItem("UID");
            localStorage.removeItem("email");
            setAuth(false);
            toast("Successfully Logged Out.");
        });
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleProgramsDropdown = () => {
        setIsProgramsDropdownOpen(!isProgramsDropdownOpen);
        setIsProfileDropdownOpen(false); 
    };

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
        setIsProgramsDropdownOpen(false); 
    };

    return (
        <Fade top>
            <nav
                className="navbar navbar-dark navbar-expand-xl vintage-navbar"
                style={{
                    position: isSidebarOpen ? "fixed" : "absolute",
                    width: "100%",
                    top: "0",
                    zIndex: "9999999",
                }}
            >
                <a className="navbar-brand mx-1 py-auto" href="#home">
                    <img src={SHILP} alt="SHILP logo" width="64px" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleSidebar}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={`navbar-collapse justify-content-end ${
                        isSidebarOpen ? "show" : ""
                    }`}
                    id="navbarText"
                >
                    <button className="close-icon" onClick={toggleSidebar}>
                        &#10005; {/* Close icon (X) */}
                    </button>
                    <ul className="navbar-nav">
                        <li className="nav-item px-2 mx-2">
                            <Link
                                className={
                                    "nav-link" +
                                    (location.pathname === "/" ? " active" : "")
                                }
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>

                        {/* Dropdown for Programs (Workshops & Events) */}
                        <li className="nav-item dropdown px-2 mx-2">
                            <button
                                className="nav-link dropdown-toggle"
                                type="button"
                                onClick={toggleProgramsDropdown}
                                aria-expanded={isProgramsDropdownOpen ? "true" : "false"}
                            >
                                Programs
                            </button>
                            <div
                                className={`dropdown-menu ${
                                    isProgramsDropdownOpen ? "show" : ""
                                }`}
                                aria-labelledby="navbarDropdown"
                                style={{ top: "100%" }} 
                            >
                                <Link className="dropdown-item" to="/competitions">
                                    Workshops
                                </Link>
                                <Link className="dropdown-item" to="/events">
                                    Events
                                </Link>
                            </div>
                        </li>

                        <li className="nav-item px-2 mx-2">
                            <Link
                                className={
                                    "nav-link" +
                                    (location.pathname === "/accommodations" ? " active" : "")
                                }
                                to="/accommodations"
                            >
                                Accommodations
                            </Link>
                        </li>
                        <li className="nav-item px-2 mx-2">
                            <Link
                                className={
                                    "nav-link" +
                                    (location.pathname === "/team" ? " active" : "")
                                }
                                to="/team"
                            >
                                Team
                            </Link>
                        </li>
                        <li className="nav-item px-2 mx-2">
                            <Link
                                className={
                                    "nav-link" +
                                    (location.pathname === "/gallery" ? " active" : "")
                                }
                                to="/gallery"
                            >
                                Gallery
                            </Link>
                        </li>
                        <li className="nav-item px-2 mx-2">
                            <Link
                                className={
                                    "nav-link" +
                                    (location.pathname === "/contacts" ? " active" : "")
                                }
                                to="/contacts"
                            >
                                Contacts
                            </Link>
                        </li>
                        <li className="nav-item px-2 mx-2">
                            <Link
                                className="nav-link"
                                to="https://forms.gle/oaFRmu7GhyRPuwqy6"
                            >
                                CA
                            </Link>
                        </li>

                        {/* Profile Dropdown */}
                        {isAuth ? (
                            <li className="nav-item px-2 mx-2 desktop-dropdown">
                                <div className="dropdown">
                                    <button
                                        className="nav-link dropdown-toggle"
                                        onClick={toggleProfileDropdown}
                                    >
                                        <img
                                            src={localStorage.getItem("photoURL")}
                                            alt="Profile Pic"
                                            className="ProfilePic"
                                        />
                                    </button>
                                    {isProfileDropdownOpen && (
                                        <div className="dropdown-menu show">
                                            <Link className="dropdown-item" to="/profile">
                                                Profile
                                            </Link>
                                            <button className="dropdown-item" onClick={onLogout}>
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </li>
                        ) : (
                            <li className="nav-item px-2 mx-2">
                                <Link
                                    className={
                                        "nav-link" +
                                        (location.pathname === "/login" ? " active" : "")
                                    }
                                    to="/login"
                                >
                                    Sign In
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </Fade>
    );
};

export default NavBar;
