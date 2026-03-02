import React from 'react'
import '../../links/css/Accommodation-AboutUs.css'
import Zoom from 'react-reveal/Zoom';

function Instructions() {
  return (
    <div className='outer-body instructions-outer-body'>
        <Zoom>
            <div className="inner-body instructions-inner-body">
                <h2 className="section-heading">Instructions</h2>
                <ul className="policy-list">
                    <li>All guests carrying electronic items must declare them at the IIT BHU main gate through a Gate Pass. Belongings will also be checked on exit — failure to comply will result in items being impounded.</li>
                    <li>All guests will be provided with a mattress. SHILP will not provide mattress covers, blankets, or pillows. Guests are encouraged to arrange these on their own if required.</li>
                    <li>Any items issued to guests must be returned in sound condition to the organizers during check-out.</li>
                    <li>Random checks will be conducted to avoid illegal stays on campus. Any team failing to produce electronic or physical accommodation receipts will be heavily fined and disqualified.</li>
                    <li>Entry will be only through the Main Gate of IIT BHU. All other gates will remain closed for entry.</li>
                    <li>All guests must carry valid government photo ID proofs at all times. Student participants must also carry a valid College photo ID card. Entry will be denied without a valid ID.</li>
                    <li>Alcohol, drugs, sharp objects, and explosives are strictly prohibited inside the campus. Any item deemed unsafe will also be prohibited. The decision of the Security and Events team will be final in case of disputes.</li>
                    <li>All guests must maintain the decorum and cleanliness of the campus and follow campus rules at all times.</li>
                    <li>SHILP and IIT BHU will not be responsible for any mishaps that occur during the duration of stay.</li>
                </ul>
            </div>
        </Zoom>
    </div>
  )
}

export default Instructions;