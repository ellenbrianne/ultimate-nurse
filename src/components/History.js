import HistoryCard from "./HistoryCard";

const History = ({ history }) => {

    const historyDisplay = history.map(hx => {
        return <HistoryCard key={hx.id} hx={hx} />
    });

    return (
        <div>
            {historyDisplay}
            Work History Component - Will also render HistoryForm after onClick to add more hx
        </div>
    )
};

export default History;