import { useState } from "react";

const HistoryForm = ({ addHistory }) => {
    const emptyObj = {
        facility: "",
        start: "",
        end: "",
        unit: ""
    }

    const [formObj, setFormObj] = useState(emptyObj);

    const handleSubmit = (e) => {
        e.preventDefault();
        addHistory(formObj);
        setFormObj(emptyObj);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormObj({ ...formObj, [name]: value });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="facility"
                placeholder="Facility"
                value={formObj.facility}
                onChange={handleChange}
            /> <br/>
            <input 
                type="text"
                name="start"
                placeholder="Start Date"
                value={formObj.start}
                onChange={handleChange}
            /> <br/>
            <input 
                type="text"
                name="end"
                placeholder="End Date"
                value={formObj.end}
                onChange={handleChange}
            /> <br/>
            <input 
                type="text"
                name="unit"
                placeholder="Unit"
                value={formObj.unit}
                onChange={handleChange}
            /> <br/>
            <button>Submit</button>
        </form>
    )
};

export default HistoryForm;