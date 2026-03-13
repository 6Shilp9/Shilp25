import React from 'react';
import '../links/css/marquee.css';

const defaultItems = ["IIT BHU", "Civil Engineering Society", "Annual Technical Fest", "Urban Alchemy", "Smart Cities, Green Future", "SHILP'26"];

function Marquee({ items = defaultItems }) {
    return (
        <div className="marquee-wrapper">
            <div className="marquee-track">
                {[...items, ...items].map((item, i) => (
                    <span key={i} className="marquee-item">
                        {item} <span className="marquee-dot">◆</span>
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Marquee;