import React,{useState, useEffect} from "react";
import Register from "../components/Login/Register";
import NavBar from "../components/NavBar";
import Loader from "../components/LoadingScreen";


const RegisterPage = ({ AllAuth }) => {

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	return (
		<div className="App">
			{loading ? (
				<div className="loader-container" style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", background:"#271e29"}}>
										<Loader onComplete={() => setLoading(false)} />

				</div>
			) : 
			<div className="body">
				<NavBar AllAuth={AllAuth} />

				<Register setAuth={setAuth} />
			</div>
			}
		</div>
	);
};

export default RegisterPage;
