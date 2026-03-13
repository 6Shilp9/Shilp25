import React from 'react'
import '../../links/css/Accommodation-AboutUs.css'
import Zoom from 'react-reveal/Zoom';

function ReachingIITBHU() {
  return (
    <div className='outer-body reaching-outer-body'>
        <Zoom>
            <div className="inner-body reaching-inner-body">
                <h2 className="section-heading">Reaching IIT BHU</h2>
                <p style={{color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontFamily: "Inter, sans-serif"}}>
                    Getting to IIT BHU is facilitated by convenient transportation options in Varanasi. The city is well-connected by air, rail, and road.
                </p>
                <ul className="policy-list">
                    <li>
                        <strong style={{color: "#3ddc84"}}>By Air</strong> — Lal Bahadur Shastri International Airport (VNS) is the nearest airport, connecting Varanasi to major cities across India.
                    </li>
                    <li>
                        <strong style={{color: "#3ddc84"}}>By Train</strong> — Varanasi Junction (BSB) is the primary railway station with excellent connectivity across the country.
                    </li>
                    <li>
                        <strong style={{color: "#3ddc84"}}>From Delhi</strong> — By Air: IGI Airport (DEL) → VNS. By Train: New Delhi (NDLS) → Varanasi Junction (BSB).
                    </li>
                    <li>
                        <strong style={{color: "#3ddc84"}}>From Mumbai</strong> — By Air: CSMIA (BOM) → VNS. By Train: CSMT → Varanasi Junction (BSB).
                    </li>
                    <li>
                        <strong style={{color: "#3ddc84"}}>From Kolkata</strong> — By Air: NSCBI Airport (CCU) → VNS. By Train: Howrah Junction (HWH) → Varanasi Junction (BSB).
                    </li>
                    <li>
                        <strong style={{color: "#3ddc84"}}>From Chennai</strong> — By Air: Chennai Airport (MAA) → VNS. By Train: Chennai Central (MAS) → Varanasi Junction (BSB).
                    </li>
                    <li>
                        <strong style={{color: "#3ddc84"}}>From Bangalore</strong> — By Air: Kempegowda Airport (BLR) → VNS. By Train: Yesvantpur Junction (YPR) → Varanasi Junction (BSB).
                    </li>
                    <li>
                        <strong style={{color: "#3ddc84"}}>From Ahmedabad</strong> — By Air: SVP Airport (AMD) → VNS. By Train: Ahmedabad Junction (ADI) → Varanasi Junction (BSB).
                    </li>
                    <li>
                        <strong style={{color: "#3ddc84"}}>From Hyderabad</strong> — By Air: Rajiv Gandhi Airport (HYD) → VNS. By Train: Secunderabad Junction (SC) → Varanasi Junction (BSB).
                    </li>
                    <li>
                        <strong style={{color: "#3ddc84"}}>From Jaipur</strong> — By Air: Jaipur Airport (JAI) → VNS. By Train: Jaipur Junction (JP) → Varanasi Junction (BSB).
                    </li>
                </ul>
            </div>
        </Zoom>
    </div>
  )
}

export default ReachingIITBHU;