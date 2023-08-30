import HistoryCard from "./HistoryCard";

const History = ({ history }) => {

    const historyDisplay = history.map(hx => {
        return <HistoryCard key={hx.id} hx={hx} />
    });

    return (
        <div>
            {historyDisplay}
            <button>Add History</button>
        </div>
    )
};

export default History;