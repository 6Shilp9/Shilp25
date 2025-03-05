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

	return (
		<Fade top>
			<nav className="navbar navbar-dark navbar-expand-xl vintage-navbar">
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
						<li className="nav-item px-2 mx-2">
							<Link
								className={
									"nav-link" +
									(location.pathname === "/competitions"
										? " active"
										: "")
								}
								to="/competitions"
							>
								Workshops
							</Link>
						</li>
						<li className="nav-item px-2 mx-2">
							<Link
								className={
									"nav-link" +
									(location.pathname === "/guests"
										? " active"
										: "")
								}
								to="/guests"
							>
								Guests
							</Link>
						</li>
						<li className="nav-item px-2 mx-2">
							<Link
								className={
									"nav-link" +
									(location.pathname === "/events"
										? " active"
										: "")
								}
								to="/events"
							>
								Events
							</Link>
						</li>
						<li className="nav-item px-2 mx-2">
							<Link
								className={
									"nav-link" +
									(location.pathname === "/accommodations"
										? " active"
										: "")
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
									(location.pathname === "/team"
										? " active"
										: "")
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
									(location.pathname === "/gallery"
										? " active"
										: "")
								}
								to="/gallery"
							>
								Gallery
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
						<li className="nav-item px-2 mx-2">
							<Link
								className={
									"nav-link" +
									(location.pathname === "/contacts"
										? " active"
										: "")
								}
								to="/contacts"
							>
								Contacts
							</Link>
						</li>

						{isAuth ? (
							<>
								<li className="nav-item px-2 mx-2">
									<button
										className="nav-link"
										onClick={(e) => {
											onLogout(e);
										}}
									>
										Logout
									</button>
								</li>
								<Link
									className={
										"nav-link" +
										(location.pathname === "/profile"
											? " active"
											: "")
									}
									to="/profile"
								>
									<img
										src={localStorage.getItem("photoURL")}
										alt="Profile Pic"
										className="ProfilePic"
									/>
								</Link>
							</>
						) : (
							<>
								<li className="nav-item px-2 mx-2">
									<Link
										className={
											"nav-link" +
											(location.pathname === "/login"
												? " active"
												: "")
										}
										to="/login"
									>
										Sign In
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</nav>
		</Fade>
	);
};

export default NavBar;