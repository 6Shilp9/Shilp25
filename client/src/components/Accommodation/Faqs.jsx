import '../../links/css/Accommodation-AboutUs.css'
import Zoom from 'react-reveal/Zoom';

function AllCollapseExample(){
  return (
    <Zoom>
        <div className="outer-body faq-outer-body">
            <h2 className="section-heading" style={{padding: "0 0 1rem 0", marginBottom: "1.5rem"}}>
                Frequently Asked Questions
            </h2>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            How to avail accommodation?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul className="policy-list">
                                <li>Click on Register Now and complete the payment procedure.</li>
                                <li>A confirmation will be sent to you. Report at the accommodation desk upon arrival.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            What is the payment procedure?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            The payment procedure will be online. You will need to report at the accommodation desk near the SHILP room with the email printout and mandatory documents. Failing to bring any documents may lead to cancellation of accommodation.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            How do I know my payment is confirmed?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Payment is not confirmed until a confirmation email is received within 24 hours. If not received, mail your transaction ID, SHILP ID, name, and amount to shilp@itbhu.ac.in with the subject: Transaction ID :: Team ID :: Confirmation mail not received.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            What documents should guests carry?
                        </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul className="policy-list">
                                <li>Any valid Government photo ID</li>
                                <li>Printout of email confirmation</li>
                                <li>Gate pass</li>
                                <li>Valid college ID for participants</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            Should I carry my ID card with me?
                        </button>
                    </h2>
                    <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Yes, it is mandatory for all guest participants to carry college IDs at all times. You will be asked to produce your college ID card at the time of room allotment.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                            What are the accommodation charges?
                        </button>
                    </h2>
                    <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Accommodation charges and payment details will be available under the Accommodation Charges tab.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                            What kind of accommodation is provided?
                        </button>
                    </h2>
                    <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Accommodation is provided on a shared basis inside campus hostels. One mattress and space for luggage will be provided. Girls and boys will be accommodated separately. The number of guests per room will be decided by SHILP.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                            Does accommodation include food facilities?
                        </button>
                    </h2>
                    <div id="flush-collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            No, accommodation charges do not include food. Guests can purchase meals from hostel canteens or messes at INR 50 per meal.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                            What are the food facilities inside IIT BHU?
                        </button>
                    </h2>
                    <div id="flush-collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            You can eat at the many canteens and messes available inside the campus.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                            Can I enter IIT BHU campus at any time?
                        </button>
                    </h2>
                    <div id="flush-collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            You can enter the IIT Main Gate anytime from 6 AM to 10 PM by showing a valid photo ID. You must have campus accommodation to stay after 10 PM.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEleven" aria-expanded="false" aria-controls="flush-collapseEleven">
                            Can we get accommodation on the spot at SHILP?
                        </button>
                    </h2>
                    <div id="flush-collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            No confirmed accommodation will be provided on the spot. It is completely subject to room availability.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Zoom>
  )
}
export default AllCollapseExample;