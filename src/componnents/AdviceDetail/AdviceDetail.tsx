import React from "react";
interface AdviceDetail {
    date:string;
    message: string;
    note: number;
}

const AdviceCard = ({ date, message, note}: AdviceDetail) => {
    return (
        <div className="advice-card">
            <div className="advice-header-container">
                <p>Note : {note}/5</p>
                <p>{date}</p>
            </div>
            <p>{message}</p>

        </div>
    );
};

export default AdviceCard;