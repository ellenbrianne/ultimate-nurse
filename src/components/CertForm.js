import { useState } from "react";

const CertForm = ({ addCert }) => {
    const emptyObj = {
        type: "",
        expiration: "",
        body: ""
    };

    const [formObj, setFormObj] = useState(emptyObj);

    const handleSubmit = (e) => {
        e.preventDefault();
        addCert(formObj);
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
                name="type"
                placeholder="Type"
                value={formObj.type}
                onChange={handleChange}
            /> <br/>
            <input 
                type="text"
                name="expiration"
                placeholder="Expires"
                value={formObj.expiration}
                onChange={handleChange}
            /> <br/>
            <input 
                type="text"
                name="body"
                placeholder="Issuing Body"
                value={formObj.body}
                onChange={handleChange}
            /> <br/>
            <button>Submit</button>
        </form>
    )
};

export default CertForm;