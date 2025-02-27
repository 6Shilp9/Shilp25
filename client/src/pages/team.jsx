import React, { useState, useEffect } from "react";
import "../links/css/team.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TeamCard from "../components/TeamCard";
import Contacts from "../components/Contact Information";
import Loader from "../components/LoadingScreen";

const convenors = [
    {
        id: 1,
        Designation: "Convenor",
        data: [
            {
                url: "./TeamPhotos/IV Year/Ashutosh Gupta_ Convenor.webp",
                Name: "Ashutosh Gupta",
                Email: "ashutosh.gupta.civ20@iitbhu.ac.in",
                Instagram: "https://www.instagram.com/interesting10ashu",
                Linkedin: "https://www.linkedin.com/in/ashutosh-gupta-3a7577203",
                MobileNo: "7458842288",
            },
        ],
    },
    {
        id: 2,
        Designation: "Co-Convenor",
        data: [
            {
                url: "./TeamPhotos/IV Year/Kanhaiya Kumar _ Co-Convener.webp",
                Name: "Kanhaiya Kumar",
                Email: "",
                Instagram: "",
                Linkedin: "",
                MobileNo: "",
            },
            {
                url: "/TeamPhotos/III Year/NANDINI BHIMSARIA_ CO-CONVENOR_page-0001 (1).webp",
                Name: "Nandini Bhimsaria",
                Email: "",
                Instagram: "",
                Linkedin: "",
                MobileNo: "",
            },
        ],
    },
];

const Team = ({ AllAuth }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);

    return (
        <div className="App">
            {loading ? (
                <Loader />
            ) : (
                <div className="body">
                    <NavBar AllAuth={AllAuth} />

                    <div className="shilp-team">
                        <header className="team-header">
                            <h1>Meet Our SHILP Team</h1>
                        </header>
                        <div className="conveynor-box">
                        <div className="conveynor-title">Conveynor</div>
                        <div className="conveynor-container">
                        {convenors.map((e) => (
                            <div className="box" key={e.id}>
                                <div className="team-title conveynor-subtitle">{e.Designation}</div>
                                <div className="team-container conveynor-container">
                                    {e.data.map((member, memberIndex) => (
                                        <TeamCard
                                        key={`team-${member.Name}-${memberIndex}`} // ✅ Unique key
                                                    Name={member.Name}
                                                    ProfilePhoto={member.url}
                                                    LinkedIn={member.Linkedin}
                                                    Gmail={member.Email}
                                                    Instagram={member.Instagram} />
                                    ))}
                                </div>
                            </div>
                        ))}
                        </div>
                        </div>

                        {Contacts.map((team) => (
                            <div className="team-box" key={team.id}>
                                <div className="team-title">{team.Team}</div>
                                {team.team.map((role) => (
                                    <>
                                        <div className="team-subheading">{role.Designation}</div>
                                        <div className="team-container">
                                            {role.data.map((member, memberIndex) => (
                                                <TeamCard
                                                key={`team-${member.Name}-${memberIndex}`} // ✅ Unique key
                                                    Name={member.Name}
                                                    ProfilePhoto={member.url}
                                                    LinkedIn={member.Linkedin}
                                                    Gmail={member.Email}
                                                    Instagram={member.Instagram}
                                                    />
                                            ))}
                                        </div>
                                    </>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default Team;
