import React, { useState } from "react";
import "../links/css/EventCard.css";
import { Link, useNavigate } from "react-router-dom";
// import { pdfjs } from 'react-pdf';
import "../links/css/pdf.css";
import { getDoc, setDoc, doc } from "@firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/build/pdf.worker.min.js',
//     import.meta.url,
//   ).toString();

function EventCard(props) {
	const navigate = useNavigate();
	const isProf = props.AllAuth.isProf;
	const RegisteredEvents = props.RegisteredEvents;
	const [isRegistred, setIsRegistered] = useState(false);

	const RegisterEvent = async (EventId) => {
		let data;
		if (!isProf) {
			navigate("../profile");
			return;
		}
		if (RegisteredEvents.includes(props.name)) {
			return;
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
					toast.success(
						"Successfully registered for Event: " + EventId
					);
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
						paid: false,
						isRegistred: true,
					};
				} else {
					eventData.isRegistred = true;
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
		// let events;
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
					eventData.isRegistred = false;
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
				<Link
					to={
						props.name === "ML Forge"
						? "https://unstop.com/p/nexus-ml-competition-shilp25-iit-bhu-1419778"
						:
						props.name === "Codeblitz"
							? "https://unstop.com/p/codeblitz-shilp25-iit-bhu-1421360"
							: 
							props.name === "Codecraft"
							? "https://unstop.com/p/codecraft-shilp25-iit-bhu-1421366"
							:
							props.name === "Capture The Snap"
							? "https://unstop.com/p/capture-the-snap-shilp25-iit-bhu-1421381"
							:
							"#"
					}
					className={
						"button" +
						(RegisteredEvents.includes(props.name) || isRegistred
							? " registered"
							: "")
					}
					onClick={
						(props.name !== "ML Forge" && props.name !== "Codeblitz" && props.name !== "Codecraft" && props.name !== "Capture The Snap")
							? () => {
									RegisterEvent(props.name);
							  }
							: null
					}
				>
					{RegisteredEvents.includes(props.name) || isRegistred
						? "Registered"
						: "Register"}
				</Link>
				{RegisteredEvents.includes(props.name) || isRegistred ? (
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
