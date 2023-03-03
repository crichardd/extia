import React, { useState, useEffect } from 'react';

import "../../css/company.css"

interface CompanyData {
    mark: string;
    name: string;
    logo: string;
}

const CompanyList : React.FC = () => {
    const [companies, setCompanies] = useState<CompanyData[]>([]);
    const [selectedItem, setSelectedItem] = useState<CompanyData>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://63.33.61.128:3000/api/company/all');
            const data = await response.json();
            setCompanies(data);
        };
        fetchData();
    }, []);

    /*
    const filterList = (name: string) =>  {
        companies.forEach((element, i) => {
            if (element.name == name){
                setSelectedItem(element);
            }
        })
    }
    */

    const CompanyCard = ({name, logo, mark}: CompanyData) => {
        return(
            /*<button className="company-card" onClick={() => filterList(name)}>*/
            <button className="company-card">
                <div className="company-card-header">
                    <p className="company-name">{name}</p>
                </div>
                <div className="company-card-body">
                    <img className="company-icon" src={logo} width="37" height="37"></img>
                </div>
                <div className="company-card-footer">
                    <p>{mark}</p>
                </div>
            </button>
        );
    };

    return (
        <div className="companies-grid">
            {companies.map((company, i) => (
                <CompanyCard key={i} name={company.name} logo={company.logo} mark={company.mark}/>
            ))}
        </div>
    );
};

export default CompanyList;