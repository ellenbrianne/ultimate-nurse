const HistoryCard = ({ hx }) => {
    const { facility, unit, start, end } = hx;

    return (
        <div>
           <h4>{facility}</h4>
            Start Date: {start}
            End Date: {end}
            Unit: {unit}
        </div>
    )
};

export default HistoryCard;