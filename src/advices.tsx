import React from 'react';

import "./css/Advices.css"
import AdviceCard from "./componnents/AdviceDetail/AdviceDetail";
import CompagnyCard from "./componnents/Compagny/Compagny";
import NavBar from "./componnents/Nav/NavBar";

function advices(){
    return(
        <body>
            <NavBar/>
            <div className="advices-page">
                <div className="compagnies-container">
                    <div className="compagnies-grid">
                        {/*
                            data.map(function (compagny, i) {
                                return <CompagnyCard name={compagny.} note={4}/>
                            })
                        */}
                        <CompagnyCard name="Orange" note={4}/>
                        <CompagnyCard name="Orange" note={4}/>
                        <CompagnyCard name="Orange" note={4}/>
                        <CompagnyCard name="Orange" note={4}/>
                        <CompagnyCard name="Orange" note={4}/>
                        <CompagnyCard name="Orange" note={4}/>
                        <CompagnyCard name="Orange" note={4}/>
                        <CompagnyCard name="Orange" note={4}/>
                    </div>
                </div>
                <div className="advices-container">
                    <h1>Nom de l'entreprise</h1>
                    <AdviceCard date="01/03/2023" note={5} message="Intervention faite chez moi le 28/02/2023 pour installer la fibre : le technicien a coupé mon ADSL avant même d'avoir fait des vérifications au préalable ! Il part en me laissant sans internet, part en rigolant et annonçant qu'il faut reprendre un RV dans un délai de plusieurs semaines ! Totalement lamentable ! Réceptions de plusieurs SMS pour m'informer du nom de l'intervenant qui change tout le temps. Le dernier SMS est arrivé 2h après l'intervention !" />
                    <AdviceCard date="01/03/2023" note={5} message="Intervention faite chez moi le 28/02/2023 pour installer la fibre : le technicien a coupé mon ADSL avant même d'avoir fait des vérifications au préalable ! Il part en me laissant sans internet, part en rigolant et annonçant qu'il faut reprendre un RV dans un délai de plusieurs semaines ! Totalement lamentable ! Réceptions de plusieurs SMS pour m'informer du nom de l'intervenant qui change tout le temps. Le dernier SMS est arrivé 2h après l'intervention !" />
                </div>
            </div>
        </body>
    );
}

export default advices;