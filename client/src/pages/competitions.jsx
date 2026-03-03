import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../links/css/workshop.css";
import Fade from "react-reveal/Fade";

// import WorkshopCard from "../components/WorkshopCard";

import { getDoc, doc } from "@firebase/firestore";
import { db } from "../firebase";
import Loader from "../components/LoadingScreen";

const Competitions = ({ AllAuth }) => {
	const [loading, setLoading] = useState(true);
	// eslint-disable-next-line no-unused-vars
	const [RegisteredWorkshops, setRegisteredWorkshops] = useState([]);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);
	useEffect(() => {
		if(AllAuth.isAuth){
			const docRef = doc(db, "userProfile", localStorage.getItem("UID"));
			getDoc(docRef).then(async (docSnap) => {
				if (docSnap.exists()) {
					const data = docSnap.data();
					if (data.Workshops) {
						setRegisteredWorkshops(data.Workshops);
					}
				}
			});
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className="App">
			{loading ? (
				<div className="loader-container" style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", background:"black"}}>
					<Loader onComplete={() => setLoading(false)} />
				</div>
			) : (
				<>
					<div className="body workshop-body">
						<NavBar AllAuth={AllAuth} />
						<div className="workshop-container">
							<Fade top delay={200}>
								<p className="workshop-label">SHILP'26</p>
								<h1 className="workshop-heading">Workshops</h1>
							</Fade>
							<Fade bottom delay={400}>
								<div className="workshop-coming-soon">
									<h2>Coming Soon</h2>
									<p>Workshop details will be announced shortly. Stay tuned!</p>
								</div>
							</Fade>
						</div>
						<Fade bottom>
							<Footer />
						</Fade>
					</div>
				</>
			)}
		</div>
	);
};

export default Competitions;
