import { relative } from "path";
import React from "react";

interface Event {
    name: string;
    date: string;
    //date: datetime;
    lieu: string;
}

const EventCard = ({ name, date, lieu }: Event) => {
    return (
        <div style={{  marginLeft: -25,marginBottom: 5, marginRight: 32, height: 102, width: 419, backgroundColor: '#F6F6F6' }}>
            <p className="color_text" style={{ marginLeft: 13, width: 332 }}>
                <span className="color_text" style={{ top: '10', fontWeight: 'bold' }}>{name}</span> <br />
                {date} <br />
                {lieu}</p>
        </div>
    );
};

export default EventCard;