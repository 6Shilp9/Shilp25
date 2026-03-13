import React, { useState } from "react";
import shilp from "../../links/img/SHILP.png";
import GoogleButton from "react-google-button";
import { signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, provider, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Fade from "react-reveal/Fade";

const Login = ({ AllAuth }) => {
	const setAuth = AllAuth.setAuth;
	const setIsProf = AllAuth.setIsProf;
	const navigate = useNavigate();


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

	return (
		<div className="background">
			<div className="login-content">
				<div className="login-left">
					<Fade top delay={200}>
						<img src={shilp} alt="Shilp Logo" className="login-logo" />
					</Fade>
					<Fade top delay={400}>
						<h2 className="login-welcome">
							Welcome!
							<span> To <span className="login-brand">Shilp!</span></span>
						</h2>
					</Fade>
				</div>
				<div className="login-right">
					<Fade right delay={600}>
						<p className="login-hint">Sign in to continue</p>
					</Fade>
					<Fade right delay={800}>
						<GoogleButton
							className="google-button"
							disabled={submitButtonDisabled}
							onClick={() => onFormSubmit()}
						/>
					</Fade>
				</div>
			</div>
		</div>
	);
};

export default Login;
