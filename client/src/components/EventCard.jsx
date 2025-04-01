import React, { useState, useEffect } from "react";
import "../links/css/EventCard.css";
import { Link, useNavigate } from "react-router-dom";
import { getDoc, setDoc, doc } from "@firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";

function EventCard(props) {
	const navigate = useNavigate();
	const isProf = props.AllAuth.isProf;
	const isAuth = props.AllAuth.isAuth;
	const RegisteredEvents = props.RegisteredEvents;
	const [isRegistered, setIsRegistered] = useState(false);
	const [paidRegistration, setPaidRegistration] = useState(false);

	useEffect(() => {
		let data;
		if(isAuth){
			const docRef = doc(db, "userProfile", localStorage.getItem("UID"));
			getDoc(docRef).then(async (docSnap) => {
				if (docSnap.exists()) {
					data = docSnap.data();
					if(data.accommodationStatus === "IIT BHU Student"){
						setPaidRegistration(true);
					}
					else if(data.PaidRegistration){
						setPaidRegistration(true);
					}
					if (data.Events && data.Events.includes(props.name)) {
						setIsRegistered(true);
					}
				}
			});
	}
	}, [props.name]);

	const unstopp = async(eventName) => {
		if( !isAuth ){
			toast.error("Please login to register for this event");
			navigate("../login");
			return;
		}
		if (!isProf) {
			toast.warn("Please complete your profile");
			navigate("../profile");
			return;
		}

		if(!paidRegistration){
			toast.error("Please Pay the registration fee to register for this event");
		}
			if(eventName === "ML Forge"){
				window.open("https://unstop.com/p/nexus-ml-competition-shilp25-iit-bhu-1419778","_blank");
			}
			if(eventName === "Codecraft"){
				window.open("https://unstop.com/p/codecraft-shilp25-iit-bhu-1421366","_blank");
			}
			if(eventName === "Codeblitz"){
				window.open("https://unstop.com/p/codeblitz-shilp25-iit-bhu-1421360", "_blank");
			}
			if(eventName === "Capture The Snap"){
				window.open("https://unstop.com/p/capture-the-snap-shilp25-iit-bhu-1421381", "_blank");
			}
	}

	const RegisterEvent = async (EventId) => {
		if( !isAuth ){
			toast.error("Please login to register for this event");
			navigate("../login");
			return;
		}
		let data;
		if (!isProf) {
			toast.warn("Please complete your profile");
			navigate("../profile");
			return;
		}
		if (RegisteredEvents.includes(props.name)) {
			return;
		}
		if(!paidRegistration){
			toast.error("Please pay the registration fee to completely register for this event");
		}
		const docRef = doc(db, "userProfile", localStorage.getItem("UID"));
		getDoc(docRef).then(async (docSnap) => {
			if (docSnap.exists()) {
				data = docSnap.data();
				if (data.Events) {
					if (!data.Events.includes(EventId)) {
						data.Events.push(EventId);
					}
				} else {
					data.Events = [EventId];
				}
				await setDoc(
					doc(db, "userProfile", localStorage.getItem("UID")),
					data
				).then(() => {
					setIsRegistered(true);
					if(paidRegistration){
						toast.success(
							"Successfully registered for Event: " + EventId
						);
					}
				});
			}
		});

		const docEvent = doc(db, EventId, localStorage.getItem("UID"));
		getDoc(docEvent)
			.then(async (docSnap) => {
				let eventData;
				if (docSnap.exists()) {
					eventData = docSnap.data();
				}
				if (!eventData) {
					eventData = {
						uid: localStorage.getItem("UID"),
						paid: paidRegistration,
						isRegistered: true,
					};
				} else {
					eventData.isRegistered = true;
					eventData.paid = paidRegistration;
				}
				await setDoc(
					doc(db, EventId, localStorage.getItem("UID")),
					eventData
				);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	const UnRegisterEvent = async (EventId) => {
		let data;
		const docRef = doc(db, "userProfile", localStorage.getItem("UID"));
		getDoc(docRef).then(async (docSnap) => {
			if (docSnap.exists()) {
				data = docSnap.data();
				if (data.Events) {
					if (data.Events.includes(EventId)) {
						data.Events.splice(data.Events.indexOf(EventId), 1);
					}
				}
			}

			await setDoc(
				doc(db, "userProfile", localStorage.getItem("UID")),
				data
			).then(() => {
				setIsRegistered(false);
				toast.error("Successfully Unregistered from Event: " + EventId);
			});
		});

		const docEvent = doc(db, EventId, localStorage.getItem("UID"));
		getDoc(docEvent)
			.then(async (docSnap) => {
				let eventData;
				if (docSnap.exists()) {
					eventData = docSnap.data();
				}
				if (eventData) {
					eventData.isRegistered = false;
				}
				await setDoc(
					doc(db, EventId, localStorage.getItem("UID")),
					eventData
				);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};
	return (
		<div
			className="card"
			style={{
				backgroundImage: `url("./EventPhotos/${props.name}.webp")`,
			}}
		>
			<div className="card-content">
				<h2 className="card-title">{props.name}</h2>
				<p className="card-body">{props.details}</p>
				<Link
					target="_blank"
					to={`/pdfs/${props.name}.pdf`}
					className="button"
				>
					Explore
				</Link>
				<p
					className={
						"button" +
						(RegisteredEvents.includes(props.name) || isRegistered
							? " registered"
							: "")
					}
					onClick={() => {
						props.name === "ML Forge" || props.name === "Codecraft" || props.name === "Codeblitz" || props.name === "Capture The Snap"
						?
						unstopp(props.name)
						:
						RegisterEvent(props.name);
					}}
				>
					{RegisteredEvents.includes(props.name) || isRegistered
						? "Registered"
						: "Register"}
				</p>
				{RegisteredEvents.includes(props.name) || isRegistered ? (
					<p
						className="button unregister"
						onClick={() => {
							UnRegisterEvent(props.name);
						}}
					>
						Unregister
					</p>
				) : (
					<> </>
				)}
			</div>
		</div>
	);
}

export default EventCard;