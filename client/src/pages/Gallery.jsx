import { useState, useEffect } from "react";
import "../links/css/home.css";
import "../links/css/gallery.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Loader from "../components/LoadingScreen";

import image1 from "../links/img/galleryPhoto/1.webp";
import image2 from "../links/img/galleryPhoto/2.webp";
import image3 from "../links/img/galleryPhoto/3.webp";
import image4 from "../links/img/galleryPhoto/4.webp";
import image5 from "../links/img/galleryPhoto/5.webp";
import image6 from "../links/img/galleryPhoto/6.webp";
import image7 from "../links/img/galleryPhoto/7.webp";
import image8 from "../links/img/galleryPhoto/8.webp";
import image9 from "../links/img/galleryPhoto/9.webp";
import image10 from "../links/img/galleryPhoto/10.webp";
import image11 from "../links/img/galleryPhoto/11.webp";
import image12 from "../links/img/galleryPhoto/12.webp";
import image13 from "../links/img/galleryPhoto/13.webp";
import image14 from "../links/img/galleryPhoto/14.webp";
import image15 from "../links/img/galleryPhoto/15.webp";
import image16 from "../links/img/galleryPhoto/16.webp";
import image17 from "../links/img/galleryPhoto/17.webp";
import image18 from "../links/img/galleryPhoto/18.webp";
import image19 from "../links/img/galleryPhoto/19.webp";
import image20 from "../links/img/galleryPhoto/20.webp";
import image21 from "../links/img/galleryPhoto/21.webp";
import image22 from "../links/img/galleryPhoto/22.webp";
import image23 from "../links/img/galleryPhoto/23.webp";
import image24 from "../links/img/galleryPhoto/24.webp";
import image25 from "../links/img/galleryPhoto/25.webp";
import image26 from "../links/img/galleryPhoto/26.webp";
import image27 from "../links/img/galleryPhoto/27.webp";
import image28 from "../links/img/galleryPhoto/28.webp";
import image29 from "../links/img/galleryPhoto/29.webp";
import image30 from "../links/img/galleryPhoto/30.webp";
import image31 from "../links/img/galleryPhoto/31.webp";
import image32 from "../links/img/galleryPhoto/32.webp";
import image33 from "../links/img/galleryPhoto/33.webp";
import image34 from "../links/img/galleryPhoto/34.webp";
import image35 from "../links/img/galleryPhoto/35.webp";
import image36 from "../links/img/galleryPhoto/36.webp";
import image37 from "../links/img/galleryPhoto/37.webp";
import image38 from "../links/img/galleryPhoto/38.webp";
import image39 from "../links/img/galleryPhoto/39.webp";
import image40 from "../links/img/galleryPhoto/40.webp";
import image41 from "../links/img/galleryPhoto/41.webp";
import image42 from "../links/img/galleryPhoto/42.webp";
import image43 from "../links/img/galleryPhoto/43.webp";
import image44 from "../links/img/galleryPhoto/44.webp";
import image45 from "../links/img/galleryPhoto/45.webp";
import image46 from "../links/img/galleryPhoto/46.webp";
import image47 from "../links/img/galleryPhoto/47.webp";
import image48 from "../links/img/galleryPhoto/48.webp";
import image49 from "../links/img/galleryPhoto/49.webp";
import image50 from "../links/img/galleryPhoto/50.webp";
import image51 from "../links/img/galleryPhoto/51.webp";

function Gallery({ AllAuth }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  const groups = {
    "DEPARTMENT": [image1],
    "OPENING CEREMONY": [image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12],
    "SHILP DECOR": [image13, image14, image15, image16, image17, image18],
    "EVENTS": [image19, image20, image21, image22, image23, image24, image25, image26],
    "SPECIAL PERFORMANCE BY IMC": [image27, image28, image29, image30, image31, image32],
    "CLOSING CEREMONY": [image33, image34, image35, image36, image37, image38, image39, image40, image41, image42, image43, image44, image45, image46, image47, image48, image49, image50, image51]
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
                      <img className="galimg" src={img} alt={`${group} Image ${imgIndex + 1}`} />
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

