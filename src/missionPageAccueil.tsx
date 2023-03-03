import MissionPage from "./composants/missionPage";
import Footer from "./componnents/Footer";
import Search from "./composants/Search";

function MissionPageAccueil() {

    return (
        <div>
        <section>
            <div>
                        <p style={{ fontSize: 128, color: '#3A4248', opacity: 0.2, marginTop: '30px', marginLeft: '49px', position: 'absolute' }}>Missions</p>
                        <p className="color_text" style={{ fontSize: 50, paddingTop: '75px', marginLeft: '70px', position: 'relative' }}>Liste des <span style={{ color: '#FC8855' }}>Missions</span></p>
                    </div>
        </section>
        <Search/>
        <MissionPage />
        <Footer/>
        </div>
    );
}

export default MissionPageAccueil;