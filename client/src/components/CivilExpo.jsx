import "../links/css/civilexpo.css";
import Fade from "react-reveal/Fade";
import EventCard from "./EventCard";

function CivilExpo({ AllAuth, RegisteredEvents }) {
	return (
		<div className="civilexpo">
			<div className="main">
				<Fade top>
					<div className="heading">CIVIL EXPO</div>
				</Fade>
				<div className="expo-gallery-row1">
					{/* Event-1 */}
					<Fade left>
						<EventCard
							name="Cartodraft"
							details="A map-making competition where you can showcase your skills and compete with the best!"
							className="eventCard"
							AllAuth={AllAuth}
							RegisteredEvents={RegisteredEvents}
						/>
					</Fade>

					{/* Event-2 */}
					<Fade right>
						<EventCard
							name="Vintage Visionaries"
							details="A photography competition where you can showcase your photography skills!"
							className="eventCard"
							AllAuth={AllAuth}
							RegisteredEvents={RegisteredEvents}
						/>
					</Fade>
				</div>
				<div className="expo-gallery-row2">
					{/* Event -3 */}
					<Fade left>
						<EventCard
							name="Surveyor's Hunt"
							details="A treasure hunt competition that will test your knowledge and wit!"
							className="eventCard"
							AllAuth={AllAuth}
							RegisteredEvents={RegisteredEvents}
						/>
					</Fade>

					{/* Event -4 */}
					<Fade right>
						<EventCard
							name="BridgeIt"
							details="A bridge-building competition that will test your engineering and creativity skills."
							className="eventCard"
							AllAuth={AllAuth}
							RegisteredEvents={RegisteredEvents}
						/>
					</Fade>
				</div>
			</div>
		</div>
	);
}

export default CivilExpo;
