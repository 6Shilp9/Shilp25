import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { useMotionValue, useTransform, motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../links/css/alumnCard.css";

function TeamCard({ Name, ProfilePhoto, style, LinkedIn, Gmail, Instagram }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [-10, 10]); 
  const rotateY = useTransform(x, [-50, 50], [10, -10]); 

  const handleMouseMove = (event) => {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const xPos = (event.clientX - left - width / 2) / 10; 
    const yPos = (event.clientY - top - height / 2) / 10; 
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="team-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="team-content">
        <div className="imgBx">
          <img src={ProfilePhoto} alt="ProfilePhoto" style={style}/>
        </div>
        <div className="contentBx">
          <div className="profile-Name">{Name}</div>
        </div>
      </div>
      <ul className="sci">
        {LinkedIn ? (
          <li>
            <Link to={LinkedIn} style={{ background: "transparent", border: "none", fontSize: "28px" }}>
              <FaLinkedin className="linkedIn" />
            </Link>
          </li>
        ) : (
          <li></li>
        )}
        {Gmail ? (
          <li>
            <a
              href={`mailto:${Gmail}`}
              style={{ background: "transparent", border: "none", fontSize: "28px" }}
              className="gmail-link"
            >
              <BiLogoGmail className="gmail" />
            </a>
          </li>
        ) : (
          <li></li>
        )}
        {Instagram ? (
          <li>
            <Link to={Instagram} style={{ background: "transparent", border: "none", fontSize: "28px" }}>
              <FaInstagram className="instagram" />
            </Link>
          </li>
        ) : (
          <li></li>
        )}
      </ul>
    </motion.div>
  );
}

export default TeamCard;
