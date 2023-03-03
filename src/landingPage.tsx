import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./css/landingPage.css";
import MissionList from "./composants/futurJob";
import EventList from "./composants/futurEvent";
import MeetupList from "./composants/futurMeetup";
import Navbar from './composants/NavBar';
import Footer from './componnents/Footer';

function LandingPage() {

    return (
        <div className="landingPage">
            <header className="landingPage-header">
            </header>
            <body style={{ overflowX: "hidden", position: "relative" }}>
                <Navbar />
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
                        <MissionList/>
                </section>
                <p className="color_text" style={{ fontSize: 30, marginLeft: '40px' }}>Les futures <span style={{ color: '#FC8855' }}>COMETE</span></p>
                <section style={{ width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: "center" }}>
                    <div>
                        <div className="color_text" style={{ backgroundColor: '#F6F6F6', opacity: 0.7, width: '316px', height: '98px', position: 'absolute', marginLeft: '53px', marginTop: '130px', zIndex: 4 }}>
                            <p className="color_text" style={{ fontSize: '13px', marginLeft: '10px' }}> <span className="color_text" style={{ fontSize: '16px', fontWeight: 'bold' }}> Guide de bonnes pratiques frugalité des usages numériques</span> <br />
                                03-03-2023 <br />
                                242 Rue du Faubourg Saint-Antoine 75012 Paris
                            </p>
                        </div>
                        <img style={{ height: '226px', width: '316px', marginLeft: 53, zIndex: 2 }} src="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg" />
                    </div>
                    <div>
                        <MeetupList />
                    </div>
                </section>
                <p className="color_text" style={{ fontSize: 30, marginLeft: 40 }}>Les futurs <span style={{ color: '#FC8855' }}>events</span></p>
                <section style={{ width: '100%', display: "flex", flexDirection: 'row', flexWrap: "wrap", justifyContent: "center", paddingBottom: 20 }}>
                        <EventList/>
                    <div>
                       
                    </div>
                </section>
            </body>
            <Footer />
        </div>
    );
}

export default LandingPage;