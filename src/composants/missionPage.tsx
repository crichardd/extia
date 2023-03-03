import React, { useEffect, useState } from 'react';
import '../css/mission-page.css';
interface MissionData {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  skill: [string];
}

const MissionItem = ({ title, startDate, endDate, description, skill }: MissionData) => {
    return (
      <div className="mission-item">
      <h3>{title}</h3>
      <p>
        <span className="paraph-color">Foxart</span>
        {skill?.map(el => <span className="tag">{el}</span>)}
        
      </p>
      <p>Paris -  {startDate.substring(0, 10).split("/").reverse().join("/")}</p>
      <p>
        {description}
      </p>
    </div>
    );
};

const MissionPage: React.FC = () => {
    const [missions, setMissions] = useState<MissionData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://63.33.61.128:3000/api/mission/all');
            const data = await response.json();
            setMissions(data)   
          console.log(data);     };
        fetchData();
    }, []);

    return (
        <div className="mission">
            {missions.map((meetup, index) => (     
                <MissionItem key={index} title={meetup.title} startDate={meetup.startDate} endDate={meetup.endDate} skill={meetup.skill} description={meetup.description} />
            ))}
        </div>
    );
};

export default MissionPage;