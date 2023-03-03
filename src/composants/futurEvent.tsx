import React, { useEffect, useState } from 'react';

interface EventData {
    tag: string;
    date: string;
    address: Address;
}

interface Address {
    street: string,
    house: string,
    city: string,
}

const EventCard = ({ tag, date, address }: EventData) => {
    return (
        <div style={{  marginLeft: -25,marginBottom: 5, marginRight: 32, height: 102, width: 419, backgroundColor: '#F6F6F6' }}>
            <p className="color_text" style={{ marginLeft: 13, width: 332 }}>
                <span className="color_text" style={{ top: '10', fontWeight: 'bold' }}>{tag}</span> <br />
                {date} <br />
                {address.house} {address.street} {address.city}</p>
        </div>
    );
};

const EventList: React.FC = () => {
    const [events, setEvents] = useState<EventData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://63.33.61.128:3000/api/event/all');
            const data = await response.json();
            setEvents(data);
        };
        fetchData();
    }, []);

    return (
        <div style={{ display: "flex", flexWrap: 'wrap', width: '70%'}}>
            {events.map((event, index) => (
                <EventCard key={index} tag={event.tag} date={event.date} address={event.address} />
            ))}
        </div>
    );
};

export default EventList;