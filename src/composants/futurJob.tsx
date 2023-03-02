import React from "react";

interface Mission {
    name: string;
    company: string;
    tag: string;
    city: string;
    date: string;
    //date: Date;
}

const MissionCard = ({ name, company, tag, city, date}: Mission) => {
    return (
        <div className="component-mission">
            <i className="color_text" style={{ marginLeft: '16px', top: '10' }}>{name}</i><br />
            <span className="marge_div" style={{ color: '#FC8855', marginLeft: '16px' }}>{company}</span>
            <button className="mission_tag color_text" style={{ border: 'none', backgroundColor: '#D9D9D9', borderRadius: '50px', marginLeft: '20px' }}>{tag}</button>
            <button className="mission_tag color_text" style={{ border: 'none', backgroundColor: '#D9D9D9', borderRadius: '50px', marginLeft: '3px' }}>AR</button><br />
            <i className="color_text" style={{ marginLeft: '16px' }}>{city} - {date}</i>
        </div>
    );
};

export default MissionCard;