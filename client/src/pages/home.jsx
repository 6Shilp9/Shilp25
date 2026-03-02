import {useState, useEffect} from "react";
import "../links/css/home.css";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";
import Shilp from "../components/shilp";
import About from "../components/About";
// eslint-disable-next-line no-unused-vars
import ExploreMore from "../components/ExploreMore";
import EventSchedule from "../components/EventSchedule";

import Loader from "../components/LoadingScreen"


const Home = ({ AllAuth }) => {

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 4000);
	}, []);


	return (
		<div className="App">
			{loading ? (
				<div className="loader-container" style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", background:"black"}}>
					{/* <ParticleBackground /> */}
					<Loader onComplete={() => setLoading(false)} />
				</div>
			) : <div className="home-body">
			{/* <ParticleBackground /> */}
			<NavBar AllAuth={AllAuth} />
			<Hero />
			<Marquee />
			<Shilp />
			<Marquee items={["Bridge IT", "CartoDraft", "Civic Alchemy", "ML Forge", "CodeBlitz", "Feast for Brains", "Capture the Snap"]} />
			<EventSchedule />
			<Marquee items={["Civil Engineering Society", "IIT BHU", "Est. 1949", "Innovation", "Collaboration", "Excellence"]}/>
			<About />
			{/* <ExploreMore /> */}
			<EventSchedule />
			{/* <ContactInformation/> */}
			<Footer />
		</div>
		}
		</div>
	);
};

export default Home;
