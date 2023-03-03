import React, {useEffect, useState} from "react";
import "../../css/Advices.css"
interface AdviceData {
    dateOfComment: string;
    content: string;
    mark: number;
}

const AdviceCard = ({dateOfComment, mark, content}: AdviceData) => {
    return (
        <div className="advice-card">
            <div className="advice-card-header">
                <p>Note : {mark}/5</p>
                <p>{dateOfComment}</p>
            </div>
            <div className="advice-card-body">
                <p>{content}</p>
            </div>
        </div>
    );
};

const AdviceList : React.FC = () => {
    const [advices, setAdvices] = useState<AdviceData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://63.33.61.128:3000/api/comment/all');
            const data = await response.json();
            setAdvices(data);
        };
        fetchData();
    }, []);

    return (
        <div className="advices-grid">
            {advices.map((advice) => (
                <AdviceCard dateOfComment={advice.dateOfComment.substring(0,10)} mark={advice.mark} content={advice.content}/>
            ))}
        </div>
    );
};

export default AdviceList;