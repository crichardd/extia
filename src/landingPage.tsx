import EventCard from "./composants/futurEvent";
import MissionCard from "./composants/futurJob";
import MeetupCard from "./composants/futurMeetup";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./css/landingPage.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Mission } from "./services/Mission.interface";

function LandingPage() {
    //const [missions, setMissions] = useState<any[]>([]);
    const [data, setData] = useState<any[]>([]);

    const fetchData = () => {
        axios
        .get('http://63.33.61.128:3000/api/mission/all')
        .then((response) => {
            console.log(response)
            setData(response.data)
        })
        .catch((error)=> {
            console.log(error)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    /*
    useEffect(() => {
        axios.get('http://63.33.61.128:3000/api/mission/all')
            .then(response => setMissions(response.data))
            .catch(error => console.error(error));
    }, []);
    */


    return (
        <div className="landingPage">
            <header className="landingPage-header">
            </header>
            <body style={{ overflowX: "hidden", position: "relative" }}>
                <img style={{ borderRadius: '50%', height: '400px', width: '600px', position: 'absolute', top: -160, right: -250, zIndex: 2, rotate: '-6deg' }} src='https://www.meosis.fr/wp-content/uploads/2020/09/gif-code.gif'></img>
                <section>
                    <div>
                        <p style={{ fontSize: 128, color: '#3A4248', opacity: 0.2, marginTop: '30px', marginLeft: '49px', position: 'absolute' }}>Bienvenue</p>
                        <p className="color_text" style={{ fontSize: 50, paddingTop: '57px', marginLeft: '70px', position: 'relative' }}>Bienvenue <br /> chez <span style={{ color: '#FC8855' }}>Wait for Extia</span></p>
                    </div>
                </section>
                <section>
                    <p className="color_text" style={{ height: '76px', width: '819px', marginLeft: '49px' }}>
                        Société de conseil spécialisée dans les métiers de l’IT et du digital, Extia privilégie depuis sa création en 2007 une approche qui allie performance et bien-être au travail. Une vision de l’entreprise partagée aujourd’hui par plus de 2 500 Extien(ne)s en France et à l'international et récompensée depuis 2012 par le label Great Place to Work®. D'abord qui, ensuite quoi. Découvrez l'expérience positive by Extia.
                    </p>
                </section>
                <section>
                    <p className="color_text" style={{ fontSize: 30, marginLeft: '40px' }}>Vos prochaines <span style={{ color: '#FC8855' }}>missions</span></p>
                    {data.map(item =>
                        <div style={{ display: "flex", flexWrap: 'wrap' }}>
                            <MissionCard name={item.title} company={item.company.name} tag="Content Manager" city={item.company.address} date={item.startDate.toLocaleDateString()} />
                        </div>
                    )}
                </section>
                <p className="color_text" style={{ fontSize: 30, marginLeft: '40px' }}>Les futures <span style={{ color: '#FC8855' }}>COMETE</span></p>
                <section style={{ width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: "center" }}>
                    <div>
                        <div className="color_text" style={{ backgroundColor: '#F6F6F6', opacity: 0.7, width: '316px', height: '98px', position: 'absolute', marginLeft: '53px', marginTop: '130px', zIndex: 4 }}>
                            <p className="color_text" style={{ fontSize: '13px', marginLeft: '10px' }}> <span className="color_text" style={{ fontSize: '16px', fontWeight: 'bold' }}> Guide de bonnes pratiques frugalité des usages numériques</span> <br />
                                Vendredi 3 mars 2023 - 15h00 <br />
                                Extia - salle 08
                            </p>
                        </div>
                        <img style={{ height: '226px', width: '316px', marginLeft: 53, zIndex: 2 }} src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg" />
                    </div>
                    <div>
                        <div style={{ display: "flex", flexWrap: 'wrap' }}>
                            <MeetupCard name="Paris Vidéo Tech #20 : Save the date" date="Jeudi 9 mars 2023 - 17h30" lieu="Extia - salle 121" photo="https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg" />
                            <MeetupCard name="Debrief WWDC2 : les dernières actualités Apple" date="Mardi 7 mars 2023 - 13h30" lieu="Extia - salle 120" photo="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg" />
                        </div>
                    </div>
                </section>
                <p className="color_text" style={{ fontSize: 30, marginLeft: 40 }}>Les futurs <span style={{ color: '#FC8855' }}>events</span></p>
                <section style={{ width: '100%', display: "flex", flexDirection: 'row', flexWrap: "nowrap", justifyContent: "center" }}>
                    <div style={{ display: "flex", flexWrap: 'wrap', width: '70%' }}>
                        <EventCard name="Job dating #203" date="Mardi 16 mars 2023 - 16h39" lieu="Extia - salle 118" />
                        <EventCard name="Job dating #204" date="Mardi 16 mars 2023 - 16h39" lieu="Extia - salle 118" />
                    </div>
                    <div>
                        <Calendar />
                    </div>
                </section>
            </body>
        </div>
    );
}

export default LandingPage;