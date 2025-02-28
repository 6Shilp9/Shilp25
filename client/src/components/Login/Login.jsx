import React, { useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import shilp from "../../links/img/SHILP.png";
import GoogleButton from "react-google-button";
import { signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, provider, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = ({ AllAuth }) => {
	const setAuth = AllAuth.setAuth;
	const setIsProf = AllAuth.setIsProf;
	const navigate = useNavigate();

	// Set initial position values
	const initialX = -542;
	const initialY = -255;
	const x = useMotionValue(initialX);
	const y = useMotionValue(initialY);
	const rotateX = useTransform(y, [-338, -138], [20, -20]);
	const rotateY = useTransform(x, [-642, -442], [-20, 20]);

	const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

	const onFormSubmit = async () => {
		try {
			setSubmitButtonDisabled(true);
			signInWithPopup(auth, provider)
				.then((data) => {
					localStorage.setItem("displayName", data.user.displayName);
					localStorage.setItem("photoURL", data.user.photoURL);
					localStorage.setItem("UID", data.user.uid);
					localStorage.setItem("email", data.user.email);

					const docRef = doc(
						db,
						"userProfile",
						localStorage.getItem("UID")
					);
					getDoc(docRef).then(async (docSnap) => {
						if (!docSnap.exists()) {
							const sendData = {
								uid: data.user.uid,
								Email: data.user.email,
								Name: data.user.displayName,
							};
							await setDoc(
								doc(
									db,
									"userProfile",
									localStorage.getItem("UID")
								),
								sendData
							);
							setIsProf(false);
							navigate("/profile");
						}
					});
					toast.success(
						<div>
							{"Successfully Logged In!"} <br />{" "}
							{"Welcome " + localStorage.getItem("displayName")}
						</div>
					);
					setSubmitButtonDisabled(false);
					setAuth(true);
				})
				.catch((error) => {
					console.log(error.message);
				});
		} catch (error) {
			console.error(error.message);
			setSubmitButtonDisabled(false);
		}
	};

	// Handle mouse movement for hover effect
	const handleMouseMove = (e) => {
		const { clientX, clientY } = e;
		const { innerWidth, innerHeight } = window;

		// Update position based on cursor movement
		x.set(initialX + (clientX - innerWidth / 2) / 20);
		y.set(initialY + (clientY - innerHeight / 2) / 20);
	};

	// Reset smoothly when mouse leaves
	const handleMouseLeave = () => {
		animate(x, initialX, { type: "spring", stiffness: 100, damping: 15 });
		animate(y, initialY, { type: "spring", stiffness: 100, damping: 15 });
	};

	return (
		<>
			<div className="background" style={{ perspective: 2000 }}>
				<motion.div
					style={{ x, y, rotateX, rotateY, z: 100 }}
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
					className="loginContainer"
				>
					<div className="content">
						<img src={shilp} alt="Shilp Logo" />
						<div className="text-sci">
							<h2>
								Welcome! <br />
								<span>
									To the <span>Shilp</span>
								</span>
							</h2>
						</div>
					</div>

					<div className="login">
						<div className="form-box">
							<GoogleButton
								className="google-button"
								disabled={submitButtonDisabled}
								onClick={() => {
									onFormSubmit();
								}}
								style={{ background: "#000" }}
							/>
						</div>
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default Login;
