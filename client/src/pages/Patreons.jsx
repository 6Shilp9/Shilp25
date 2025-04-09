import React, {useState, useEffect} from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import Loader from "../components/LoadingScreen";

const Patreons = ({AllAuth})=>{
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    return (
        <div className="App">
        {loading ? (
            <Loader />
        ) : (
            <div className="body">
                <NavBar AllAuth={AllAuth} />
            </div>
        )}
        <Footer />
    </div>
    );
}

export default Patreons;