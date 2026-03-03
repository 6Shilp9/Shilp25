import {useState, useEffect} from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// eslint-disable-next-line no-unused-vars
import GuestCard from "../components/GuestCard";
import '../links/css/home.css';
import '../links/css/guests.css';
import Loader from "../components/LoadingScreen";
import { Fade } from "react-reveal";

const Guests = ({ AllAuth }) => {

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	return (
		<>
			{loading ? (
				<div className="loader-container" style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", background:"black"}}>
					<Loader onComplete={() => setLoading(false)} />
				</div>
			) :
			<div className="App">
				<div className="body guest-body">
					<NavBar AllAuth={AllAuth} />
					<div className="guest-container">
						<Fade top delay={200}>
							<p className="guest-label">SHILP'26</p>
							<h1 className="guest-heading">Guests</h1>
						</Fade>
						<Fade bottom delay={400}>
							<div className="guest-coming-soon">
								<h2>Coming Soon</h2>
								<p>Our distinguished guests will be announced shortly. Stay tuned!</p>
							</div>
						</Fade>
					</div>
				</div>
				<Footer />
			</div>
			}
		</>
	);
};

export default Guests;
