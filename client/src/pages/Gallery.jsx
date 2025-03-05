import { useState, useEffect } from "react";
import "../links/css/home.css";
import "../links/css/gallery.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Loader from "../components/LoadingScreen";

function Gallery({ AllAuth }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  const groups = {
    "DEPARTMENT": [1],
    "OPENING CEREMONY": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12],
    "SHILP DECOR": [13, 14, 15, 16, 17, 18],
    "EVENTS": [19, 20, 21, 22, 23, 24, 25, 26],
    "SPECIAL PERFORMANCE BY IMC": [27, 28, 29, 30, 31, 32],
    "CLOSING CEREMONY": [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51],
  };

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
            {Object.keys(groups).map((group, index) => (
              <div key={index} className="group-section">
                <h2 className="group-title">{group}</h2>
                <div className="imgGallery">
                  {groups[group].map((img, imgIndex) => (
                    <div className="frame" key={imgIndex}>
                      <img className="galimg" src={`./galleryPhoto/${img}.webp`} alt={`${group} ${imgIndex + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Gallery;

