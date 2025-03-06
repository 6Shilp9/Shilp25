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
                        "url": "./TeamPhotos/Co_Convenor.webp",
                        "Name": "Param Srivastava",
                        "Email": "param.srivastava.civ21@itbhu.ac.in",
                        "Instagram": "",
                        "Linkedin": "https://www.linkedin.com/in/param-srivastava-016ba6261",
                        "MobileNo": ""
                    },
                    {
                        "url": "./TeamPhotos/III Year/MUGDHA_CHATURVEDI_CO_CONVENER.webp",
                        "Name": "MUGDHA CHATURVEDI",
                        "Email": "mugdha.chaturvedi.civ22@itbhu.ac.in",
                        "Instagram": "https://www.instagram.com/mugdha__chaturvedi?igsh=Nm1kZmR3M2Z6ZmFr",
                        "Linkedin": "https://www.linkedin.com/in/mugdha-chaturvedi-096853258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                        "MobileNo": ""
                    }
                ]
    }
];

const Team = ({ AllAuth }) => {
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
