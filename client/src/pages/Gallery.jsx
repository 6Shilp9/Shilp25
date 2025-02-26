import { useState, useEffect } from "react";
import "../links/css/home.css";
import "../links/css/gallery.css";
import NavBar from "../components/NavBar";
import image1 from "../links/img/galleryPhoto/IMG_4274.JPG";
import image2 from "../links/img/galleryPhoto/IMG_4282.JPG";
import image3 from "../links/img/galleryPhoto/IMG_4301.JPG";
import image4 from "../links/img/galleryPhoto/IMG_4329.JPG";
import image5 from "../links/img/galleryPhoto/department-of-civil-engineering.jpg";
import image6 from "../links/img/galleryPhoto/IMG_3486.JPG";
import image7 from "../links/img/galleryPhoto/IMG_3502.JPG";
import image8 from "../links/img/galleryPhoto/IMG_3512.JPG";
import image9 from "../links/img/galleryPhoto/IMG_3516.JPG";
import image10 from "../links/img/galleryPhoto/IMG_3522.JPG";
import image11 from "../links/img/galleryPhoto/IMG_3528.JPG";
import image12 from "../links/img/galleryPhoto/IMG_3530.JPG";
import image13 from "../links/img/galleryPhoto/IMG_3532.JPG";
import image14 from "../links/img/galleryPhoto/IMG_3533.JPG"; 
import image15 from "../links/img/galleryPhoto/IMG_3607.JPG";
import image16 from "../links/img/galleryPhoto/IMG_3633.JPG";
import image17 from "../links/img/galleryPhoto/IMG_3822.JPG";
import image18 from "../links/img/galleryPhoto/IMG_3867.JPG";
import image19 from "../links/img/galleryPhoto/IMG_3869.JPG";
import image20 from "../links/img/galleryPhoto/IMG_3900.JPG";
import image21 from "../links/img/galleryPhoto/IMG_3909.JPG";
import image22 from "../links/img/galleryPhoto/IMG_3924.JPG";
import image23 from "../links/img/galleryPhoto/IMG_3964.JPG";
import image24 from "../links/img/galleryPhoto/IMG_4060.JPG";
import image25 from "../links/img/galleryPhoto/IMG_4225.JPG";
import image26 from "../links/img/galleryPhoto/IMG_4264.JPG";
import image27 from "../links/img/galleryPhoto/IMG_4255.JPG";
import Footer from "../components/Footer";
import Loader from "../components/LoadingScreen";

function Gallery({ AllAuth }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

 
  const images = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
    image11, image12, image13, image14, image15, image16, image17, image18, image19, 
    image20, image21, image22, image23, image24, image25, image26,image27,
  ];

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
            <div className="imgGallery">
              {images.map((img, index) => (
                <div className="frame" key={index}>
                  <img className="galimg" src={img} alt={`Gallery Image ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          
        </div>
      )}
	  <Footer />
    </div>
  );
}

export default Gallery;
