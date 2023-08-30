

const HistoryForm = () => {
    return (
        <form>
            <input 
                type="text"
                name="facility"
                placeholder="Facility"
                value={null}
            /> <br/>
            <input 
                type="text"
                name="start"
                placeholder="Start Date"
                value={null}
            /> <br/>
            <input 
                type="text"
                name="end"
                placeholder="End Date"
                value={null}
            /> <br/>
            <input 
                type="text"
                name="unit"
                placeholder="Unit"
                value={null}
            /> <br/>
            <button>Submit</button>
        </form>
    )
};

export default HistoryForm;