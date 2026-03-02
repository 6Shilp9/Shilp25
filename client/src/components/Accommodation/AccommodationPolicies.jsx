import React from 'react'
import '../../links/css/Accommodation-AboutUs.css'
import Zoom from 'react-reveal/Zoom';

function AccommodationPolicies() {
  return (
    <div className='outer-body accommodationPolicies-outer-body'>
        <Zoom>
            <div className="inner-body accommodationPolicies-inner-body">
                <h2 className="section-heading">Accommodation Policies</h2>
                <ul className="policy-list">
                    <li>Guests will be supplied with mattresses and additional amenities such as pillows and mattress covers.</li>
                    <li>Upon checkout, guests are expected to return all provided items in good condition.</li>
                    <li>All participants must return to the hostel before 10 PM. No entry will be provided after closing of the hostel gates.</li>
                    <li>Random checks will be conducted to prevent unauthorized stays. Failure to present lodging receipts will result in penalties and disqualification.</li>
                    <li>All guests must carry valid physical student photo ID proofs and a government-issued ID card at all times. Entry will be strictly denied without a valid ID.</li>
                    <li>The campus strictly prohibits alcohol, drugs, sharp objects, explosives, and any hazardous items. Final decision in disputes rests with the Security team.</li>
                    <li>Shilp and IIT (BHU) Varanasi will not assume responsibility for any mishaps during the stay. No outside vehicles will be allowed within campus during the fest.</li>
                    <li>Accommodation will be provided from 11th April 2024 (07:00 AM) to 14th April 2024 (up to 7:00 AM).</li>
                    <li>Note: Separate accommodation will be provided for boys and girls.</li>
                </ul>
            </div>
        </Zoom>
    </div>
  )
}

export default AccommodationPolicies;
