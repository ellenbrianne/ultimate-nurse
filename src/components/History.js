import HistoryCard from "./HistoryCard";
import HistoryForm from "./HistoryForm";
import { useState } from "react";

const History = ({ history, addHistory }) => {
    const [isForm, setIsForm] = useState(false);

    const toggleForm = () => {
        setIsForm(!isForm);
    };

    const historyDisplay = history.map(hx => {
        return <HistoryCard key={hx.id} hx={hx} />
    });

    return (
        <div>
            <div className="container">
                {historyDisplay}
            </div>
            <div>
                <button onClick={toggleForm}>{isForm ? "Complete History" : "Add History"}</button>
                {isForm ? <HistoryForm addHistory={addHistory} /> : null }
            </div>
        </div>
    )
};

export default History;