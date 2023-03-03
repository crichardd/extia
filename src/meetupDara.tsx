import "./css/meetup.scss"
import "./css/global.scss"
import React, {useState, useEffect} from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
//import '';

interface MeetupDara {
    title: String;
    date: Date;
    tag: String
    description: String
    img_url : String

}

interface Adresse {
    street: string
    house: string
    city: string
}


const Meetup : React.FC = () => {

    const [meetupnext, setMeetupNext] = useState<MeetupDara[]>([]);    const [meetup, setMeetup] = useState<MeetupDara[]>([]);
    const [meetuppast, setMeetupPast] = useState<MeetupDara[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://63.33.61.128:3000/api/meet/all');
            const data = await response.json();
            data.sort((before: MeetupDara, after: MeetupDara) => (new Date(before.date) < new Date(before.date)) ? 1 : (before.date > after.date) ? -1 : 0);
            /*Get futures meet*/
            let currentDate : Date = new Date
            var next : MeetupDara[] = [];
            var past : MeetupDara[] = [];
            data.map((meet: MeetupDara,i: Number) => {
                if (new Date(meet.date) > currentDate) {
                    next.push(meet)
                    console.log(meet)
                } else {
                    past.push(meet)
                }
            })
            setMeetupNext(data);
            setMeetupPast(data)
            /*Get past meet*/
        };
        fetchData();
    }, []);

    return (
        <>
            <section>
                <div style={{width: "40%"}} className={"meetup-title"}>
                    <p style={{ fontSize: 128, color: '#3A4248', opacity: 0.2, marginTop: '10px', marginLeft: '90px', position: 'absolute' }}>COMET</p>
                    <p className="color_text" style={{ fontSize: 50, paddingTop: '57px',marginRight: "30%", position: 'relative' }}>Liste des <span style={{color : "#FC8855"}}>COMET</span></p>
                </div>
            </section>
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
                    <div className={"o-main__m-articles"}>
                        {
                            meetupnext.map((meet) => {
                                return (
                                    <div className={"o-main__m-comet"}>
                                        <nav className={"o-main__m-comet--a-containerType"}>
                                            <h3 className={"o-main__m-comet--a-textComet"}>{meet.title}</h3>
                                            <nav className={"o-main__m-comet--a-participants"}>
                                                <a href={"/support-comet"} className={"o-main__m-comet--a-icon o-main__m-comet--a-video"}><img src={"video.png"}/></a>
                                                <p>118</p>
                                                <button className={"o-main__m-comet--a-icon"}><img src={"cloche.svg"} alt={"Alert"}/></button>
                                            </nav>
                                        </nav>
                                        <nav className={"o-main__m-comet--m-containerName"}>
                                            <p>Foxart</p>
                                            <nav className={"o-main__m-comet--a-tag"}>{meet.tag}</nav>
                                        </nav>
                                        <p className={"o-main__m-comet--a-city"}>Paris - 20/08/2023</p>
                                        <p className={"o-main__m-comet--a-desc"}>{meet.description}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
                <section className={"o-main__m-sectionTwo"}>
                    <Calendar/>
                    <div className={"o-main__m-articlesPast"}>
                        {
                            meetuppast.map((meet) => {
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
            </main>
        </>
    )
}

export default Meetup;