import "../links/css/techshowcase.css";
import Fade from "react-reveal/Fade";
import EventCard from "./EventCard";
import "../links/css/pdf.css";

function TechShowcase({ AllAuth, RegisteredEvents }) {
	return (
		<div className="techshowcase">
			<div className="main">
				<Fade top>
					<div className="heading">TECH SHOWCASE</div>
				</Fade>
				{/* <PdfComp className="pdf-container"/> */}
				<div className="tech-gallery">
					{/* Event-1 */}
					<Fade left>
						<EventCard
							name="ML Forge"
							details="A machine learning competition where you can showcase your skills and compete with the best!"
							className="eventCard"
							AllAuth={AllAuth}
							RegisteredEvents={RegisteredEvents}
						/>
					</Fade>

					{/* Event-2 */}
					<Fade bottom>
						<EventCard
							name="Codecraft"
							details=" Dive into the intersection of civil engineering and cutting-edge
							coding at our thrilling competition!"
							className="eventCard"
							AllAuth={AllAuth}
							RegisteredEvents={RegisteredEvents}
						/>
					</Fade>

					{/* Event -3 */}
					<Fade right>
						<EventCard
							name="Codeblitz"
							details="A coding competition that will test your coding skills and problem-solving abilities."
							className="eventCard"
							AllAuth={AllAuth}
							RegisteredEvents={RegisteredEvents}
						/>
					</Fade>

					{/* Event -4 */}
					<Fade right>
						<EventCard
							name="3 Minute Thesis"
							details="Present your research in a concise and engaging manner in just 3 minutes!"
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

export default TechShowcase;
