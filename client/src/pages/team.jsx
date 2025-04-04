import React, { useState, useEffect } from "react";
import "../links/css/team.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TeamCard from "../components/TeamCard";
import Contacts from "../components/Contact Information";
import Loader from "../components/LoadingScreen";


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

                        {Contacts.map((t) => (
                            <div className="team-box" key={t.id}>
                                <div className="team-title">{t.Team}</div>
                                {t.team.map((role) => (
                                    <>
                                        {role.Designation && <div className="team-subheading">{role.Designation}</div>}
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
