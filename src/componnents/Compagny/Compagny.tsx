import React from "react";

interface Compagny {
    note: number;
    name: string;

}

const CompagnyCard = ({ name, note}: Compagny) => {
    return(
        <div className="compagny-card">
            <p className="compagny-name">{name}</p>
            <nav className="compagny-icon"></nav>
            <div className="compagny-note">
                <p>{note}/5</p>
            </div>
        </div>
    );
};

export default CompagnyCard;