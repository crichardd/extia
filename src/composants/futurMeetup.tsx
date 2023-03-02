import { relative } from "path";
import React from "react";

interface Meetup {
    name: string;
    date: string;
    //date: datetime;
    lieu: string;
    photo: string;
}

const MeetupCard = ({ name, date, lieu, photo }: Meetup) => {
    return (
        <section style={{ display: "flex", flexWrap: "nowrap", flexDirection: "row", justifyItems: "center", height: 101, width: 458, marginLeft: 16, marginBottom: 10, backgroundColor: '#F6F6F6' }}>
            <div>
                <p className="color_text" style={{ marginLeft: 13, width: 332 }}>
                    <span className="color_text" style={{ top: '10', fontWeight: 'bold' }}>{name}</span> <br />
                    {date} <br />
                    {lieu}</p>
            </div>
                <img width={108} height={101} src={photo} style={{ position: "absolute", marginLeft: 350 }} />
        </section>
    );
};

export default MeetupCard;