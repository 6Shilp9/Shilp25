import {useState, useEffect} from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GuestCard from "../components/GuestCard";
import '../links/css/home.css';
import '../links/css/guests.css';
import Loader from "../components/LoadingScreen";

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
			{/* <ParticleBackground /> */}
			<Loader onComplete={() => setLoading(false)} />
			</div>
		) :
		<div className="App">
			
			<div className="body guest-body">
				
				<NavBar AllAuth={AllAuth} />
				
				{/* <div className=" Guesttitle">
					Guests
				</div> */}
				<div className=" Guesttitle">Coming Soon</div>
				<div className="guestContainer">
				{/* <h1>
					Chief Guest
				</h1> */}
				<div className="guestCards">
						<GuestCard name="Mr. Abhishek Yadav" desig="CPWD, Govt. Of India" desc="AIR 2, UPSC ESE 2022 (CIVIL) Experienced Officer with a demonstrated history of working in the oil & energy industry. Skilled in AutoCAD, Structural Engineering, Structural Analysis and STAAD-Pro. Strong professional with a Bachelor’s Degree focused in Civil Engineering and Master's in Structural Engineering from Indian Institute of Technology (Banaras Hindu University), Varanasi." url="./guests/guest1.jpeg"/>
						<GuestCard name="Mr. Anupam Awasthi" desig="Deputy Chief Project Manager,NHSRCL" desc="Deputy Chief Project Manager at the National High-Speed Rail Corporation Ltd (NHSRCL). He is also an alumnus of IIT (BHU). Recognized as the recipient of the Furuichi Award from the University of Tokyo and has received a dean's award after completion of master's." url="./guests/guest2.webp"/>
				</div>
					
				</div>	
			</div>
			<Footer />
		</div>
		
		}
		</>
	);
};

export default Guests;
