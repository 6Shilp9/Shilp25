import { useState, useEffect } from "react";
import "../links/css/home.css";
import "../links/css/gallery.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Loader from "../components/LoadingScreen";
import GallerySlider from "../components/Patreons/donars"; 
import donarsData from "../components/donarsData"; 
import  "../links/css/Patreons.css";

function Patreons({ AllAuth }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#271e29" }}>
          <Loader onComplete={() => setLoading(false)} />
        </div>
      ) : (
        <div className="body gallery-body">
          <NavBar AllAuth={AllAuth} />
          <div className="gallerycontain">
            <h2 className="group-title">OUR PATREONS</h2>
            <GallerySlider patreons={donarsData} />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Patreons;
