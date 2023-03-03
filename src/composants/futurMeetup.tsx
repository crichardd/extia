import React, { useEffect, useState } from 'react';

export interface MeetupData {
    tag: string;
    date: string;
    address: Address;
    img_url: string;
}

export interface Address {
    street: string,
    house: string,
    city: string,
}

const MeetupCard = ({ tag, date, address, img_url }: MeetupData) => {
    return (
        <section style={{ display: "flex", flexWrap: "nowrap", flexDirection: "row", justifyItems: "center", height: 101, width: 458, marginLeft: 16, marginBottom: 10, backgroundColor: '#F6F6F6' }}>
            <div>
                <p className="color_text" style={{ marginLeft: 13, width: 332 }}>
                    <span className="color_text" style={{ top: '10', fontWeight: 'bold' }}>{tag}</span> <br />
                    {date.substring(0, 10).split("-").reverse().join("-")} <br />
                    {address.house} {address.street} {address.city}</p>
            </div>
            <img width={108} height={101} src={img_url} style={{ position: "absolute", marginLeft: 350 }} />
        </section>
    );
};

const MeetupList: React.FC = () => {
    const [meetups, setMeetups] = useState<MeetupData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://63.33.61.128:3000/api/meet/all');
            const fullData = await response.json();
            if (fullData.length > 5) {
                const data = fullData.slice(0, 4)
                setMeetups(data);
            } else {
                const data = fullData.slice(0, fullData.length)
                setMeetups(data);
            }
        };
        fetchData();
    }, []);

    return (
        <div style={{ display: "flex", flexWrap: 'wrap'}}>
            {meetups.map((meetup, index) => (
                <MeetupCard key={index} tag={meetup.tag} date={meetup.date} address={meetup.address} img_url={meetup.img_url} />
            ))}
        </div>
    );
};

export default MeetupList;