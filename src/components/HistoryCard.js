const HistoryCard = ({ hx }) => {
    
    const { id, facility, unit, start, end } = hx;

    return (
        <div>
            <div className="hx card">
                <h4>{facility}</h4>
                Start Date: {start} <br/>
                End Date: {end} <br/>
                Unit: {unit}
            </div>
        </div>
    )
};

export default HistoryCard;