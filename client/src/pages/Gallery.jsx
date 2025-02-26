import {useState, useEffect} from "react";
import "../links/css/home.css";
import "../links/css/gallery.css";
import NavBar from "../components/NavBar";
import image1 from "../links/img/galleryPhoto/1.jpg";
import image2 from "../links/img/galleryPhoto/2.jpg";
import image3 from "../links/img/galleryPhoto/3.jpg";
import image4 from "../links/img/galleryPhoto/4.jpg";
import Footer from "../components/Footer";
import Loader from "../components/LoadingScreen";

function Gallery({ AllAuth }) {

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 5000);
	}, []);

	return (
		<div className="App">
			{loading ? (
				<div className="loader-container" style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", background:"#271e29"}}>
					<Loader onComplete={() => setLoading(false)} />
				</div>
			) : 
			<div className="body gallery-body">
				<NavBar AllAuth={AllAuth} />

				<div className="gallerycontain">
					<div className="imgGallery">
						<div>
							<img className="galimg" src={image1} alt="" />
						</div>

						<div>
							<img className="galimg" src={image2} alt="" />
						</div>
						<div>
							<img className="galimg" src={image3} alt="" />
						</div>

						<div>
							<img className="galimg" src={image4} alt="" />
						</div>
						<div>
							<img className="galimg" src={image2} alt="" />
						</div>

						<div>
							<img className="galimg" src={image3} alt="" />
						</div>
						<div>
							<img className="galimg" src={image4} alt="" />
						</div>

						<div>
							<img className="galimg" src={image1} alt="" />
						</div>

						<div>
							<img className="galimg" src={image2} alt="" />
						</div>
						<div>
							<img className="galimg" src={image3} alt="" />
						</div>

						<div>
							<img className="galimg" src={image4} alt="" />
						</div>
						<div>
							<img className="galimg" src={image1} alt="" />
						</div>

						<div>
							<img className="galimg" src={image1} alt="" />
						</div>
					</div>
				</div>

				<Footer />
			</div>
}
		</div>
	);
}

export default Gallery;
