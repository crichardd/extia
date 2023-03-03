import React, { useEffect, useState } from 'react';

interface MissionData {
    title: string;
    startDate: string;
    company: Company;
    skill: [string];
}

interface Company {
    name: string,
    address: string,
}

const MissionCard = ({ title, startDate, company, skill }: MissionData) => {
    return (
        <div className="component-mission" style={{ paddingLeft: 16, paddingRight: 16, paddingBottom: 4 }}>
            <i className="color_text" style={{ top: '10' }}>{title}</i><br />
            <span className="marge_div" style={{ color: '#FC8855' }}>{company?.name}</span>
            {skill.map(tag =>
                <button className="mission_tag color_text" style={{ border: 'none', backgroundColor: '#D9D9D9', borderRadius: '50px', marginLeft: 3 }}>{tag}</button>
            )}
            <br />
            <p style={{ width: '100%'}}>
                <i className="color_text">{company?.address} <br/>
                / {startDate.substring(0, 10).split("-").reverse().join("-")}</i>
            </p>
        </div>
    );
};

const MissionList: React.FC = () => {
    const [missions, setMissions] = useState<MissionData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://63.33.61.128:3000/api/mission/all');
            const fullData = await response.json();
            if (fullData.length > 9){
                const data = fullData.slice(0, 8)
                setMissions(data);
            }else{
                const data = fullData.slice(0, fullData.length)
                setMissions(data);
            }
        };
        fetchData();
    }, []);

    return (
        <div style={{ display: "flex", flexWrap: 'wrap' }}>
            {missions.map((mission, index) => (
                <MissionCard key={index} title={mission.title} startDate={mission.startDate} company={mission.company} skill={mission.skill} />
            ))}
        </div>
    );
};

export default MissionList;