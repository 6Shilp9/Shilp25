import React, { useState, useEffect } from "react";
import "../links/css/team.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TeamCard from "../components/TeamCard";
import Contacts from "../components/Contact Information";
import Loader from "../components/LoadingScreen";

const convenors = [
    // "id": 8,
    //     "Team": "Convenors",
    //     "team": [
    //         {
    //             "Designation": "Co-Convenor",
    //             "data": [
    //                 {
    //                     "url": "./TeamPhotos/III Year/MUGDHA_CHATURVEDI_CO_CONVENOR.webp",
    //                     "Name": "Mugdha Chaturvedi",
    //                     "Email": "mugdha.chaturvedi.civ22@itbhu.ac.in",
    //                     "Instagram": "https://www.instagram.com/mugdha__chaturvedi?igsh=Nm1kZmR3M2Z6ZmFr",
    //                     "Linkedin": "https://www.linkedin.com/in/mugdha-chaturvedi-096853258",
    //                     "MobileNo": ""
    //                 },
    //                 {
    //                     "url": "./TeamPhotos/III Year/PARAM_SRIVASTAVA_CO_CONVENOR.webp",
    //                     "Name": "Param Srivastava",
    //                     "Email": "param.srivastava.civ21@itbhu.ac.in",
    //                     "Instagram": "",
    //                     "Linkedin": "https://www.linkedin.com/in/param-srivastava-016ba6261",
    //                     "MobileNo": ""
    //                 }
    //             ]
    //         },
    //         {
    //             "Designation": "Convenor",
    //             "data": [
                    // {
                    //     "url": "./TeamPhotos/III Year/DEVESH_SINDHI_CONVENOR.webp",
                    //     "Name": "Devesh Sindhi",
                    //     "Email": "devesh.sindhi.civ21@itbhu.ac.in",
                    //     "Instagram": "",
                    //     "Linkedin": "",
                    //     "MobileNo": ""
                    // }
    //             ]
    //         }
    //     ]
    // },
    {
        id: 1,
        Designation: "Convenor",
        data: [
            {
                "url": "./TeamPhotos/IV Year/DEVESH_SINDHI_CONVENOR.webp",
                "Name": "Devesh Sindhi",
                "Email": "devesh.sindhi.civ21@itbhu.ac.in",
                "Instagram": "",
                "Linkedin": "",
                "MobileNo": ""
            }
        ],
    },
    {
        id: 2,
            
                Designation: "Co-Convenor",
                data: [
                    {
                                            "url": "./TeamPhotos/III Year/MUGDHA_CHATURVEDI_CO_CONVENER.webp",
                                            "Name": "Mugdha Chaturvedi",
                                            "Email": "mugdha.chaturvedi.civ22@itbhu.ac.in",
                                            "Instagram": "https://www.instagram.com/mugdha__chaturvedi?igsh=Nm1kZmR3M2Z6ZmFr",
                                            "Linkedin": "https://www.linkedin.com/in/mugdha-chaturvedi-096853258",
                                            "MobileNo": ""
                                        },
                                        {
                                            "url": "./TeamPhotos/IV Year/PARAM_SRIVASTAVA_CO_CONVENOR.webp",
                                            "Name": "Param Srivastava",
                                            "Email": "param.srivastava.civ21@itbhu.ac.in",
                                            "Instagram": "",
                                            "Linkedin": "https://www.linkedin.com/in/param-srivastava-016ba6261",
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

                        {Contacts.map((t) => (
                            <div className="team-box" key={t.id}>
                                <div className="team-title">{t.Team}</div>
                                {t.team.map((role) => (
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
