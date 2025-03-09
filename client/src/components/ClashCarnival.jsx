import "../links/css/clashCarnival.css";
import Fade from "react-reveal/Fade";
import EventCard from "./EventCard";

function ClashCarnival({ AllAuth, RegisteredEvents }) {
	return (
		<div className="clashCarnival">
			<div className="main">
				<Fade top>
					<div className="heading">CLASH CARNIVAL</div>
				</Fade>
				<div className="carnival-gallery">
					{/* Event-1 */}
					<Fade left>
						<EventCard
							name="Feast For Brains"
							details="A quiz competition that will test your knowledge and wit!"
							className="eventCard"
							AllAuth={AllAuth}
							RegisteredEvents={RegisteredEvents}
						/>
					</Fade>

					{/* Event-2 */}
					<Fade bottom>
						<EventCard
							name="Capture The Snap"
							details="A photography competition where you can showcase your photography skills!"
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

export default ClashCarnival;
