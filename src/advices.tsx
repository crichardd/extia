import React from 'react';

import "./css/Advices.css"
import AdviceCard from "./componnents/AdviceDetail/AdviceDetail";
import CompagnyCard from "./componnents/Company/Company";
import NavBar from "./componnents/Nav/NavBar";
import CompanyList from "./componnents/Company/Company";
import AdviceList from "./componnents/AdviceDetail/AdviceDetail";

function Advices(){
    return(
        <body>
            <NavBar/>
            <div className="advices-page">
                <div className="companies-container">
                    <CompanyList/>
                </div>
                <div className="advices-container">
                    <AdviceList/>
                </div>
            </div>
        </body>
    );
}

export default Advices;