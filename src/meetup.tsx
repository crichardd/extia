import "./css/meetup.scss"
import "./css/global.scss"
import {useState, useEffect} from "react";


interface MissionData {
    title: string;
    startDate: string;
    skill: String[]

}

const Meetup : React.FC = () => {

    const [meetup, setMeetup] = useState<MissionData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://63.33.61.128:3000/api/mission/all');
            const data = await response.json();
            setMeetup(data);
        };
        fetchData();
    }, []);

    return (
        <>
            <img src={"missionsTitle.svg"} alt={"Liste des missions"} className={"m-titleMission"}/>
            <main className={"o-main"}>
                <section className={"o-main__m-sectionOne"}>
                    <h2 className={"o-main__m-titleh2"}><span>COMET</span> à venir</h2>
                    <div className={"o-main__m-containerOption"}>
                        <nav>
                            <input type={"search"} placeholder={"Tag"} className={"o-main__m-searchBar"}/>
                            <button type={"submit"} className={"o-main__m-searchBar--submit"}>Rechercher</button>
                        </nav>
                        <button className={'o-main__m-buttonAdd'}><img src={"add.svg"} alt={"Add"}/></button>
                    </div>
                    {/*TODO: Font not working*/}
                    <div className={"o-main__m-articles"}>
                        {
                            meetup.map((meet) => {
                                return (
                                    <div className={"o-main__m-comet"}>
                                        <nav className={"o-main__m-comet--a-containerType"}>
                                            <h3 className={"o-main__m-comet--a-textComet"}>Traduction du site en français</h3>
                                            <nav className={"o-main__m-comet--a-participants"}>
                                                <a href={"/support-comet"} className={"o-main__m-comet--a-icon o-main__m-comet--a-video"}><img src={"video.png"}/></a>
                                                <p>118</p>
                                                <button className={"o-main__m-comet--a-icon"}><img src={"cloche.svg"} alt={"Alert"}/></button>
                                            </nav>
                                        </nav>
                                        <nav className={"o-main__m-comet--m-containerName"}>
                                            <p>Foxart</p>
                                            <nav className={"o-main__m-comet--a-tag"}>Content manager</nav>
                                            <nav className={"o-main__m-comet--a-tag"}>Content manager</nav>
                                        </nav>
                                        <p className={"o-main__m-comet--a-city"}>Paris - 20/08/2023</p>
                                        <p className={"o-main__m-comet--a-desc"}>Pour commencer, vous accompagnerez le métier dans la définition du produit et élaborerez les dossiers d'analyses associés. En parallèle, vous mènerez des études d’opportunité et d’impact sur les systèmes existants. Vous contribuerez auprès des architectes dans la conception de la solution technique.</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
                <section className={"o-main__m-sectionTwo"}>

                </section>
            </main>
        </>
    )
}

export default Meetup;