

const CertForm = () => {
    return (
        <form>
            <input 
                type="text"
                name="type"
                placeholder="Type"
                value={null}
            /> <br/>
            <input 
                type="text"
                name="expiration"
                placeholder="Expires"
                value={null}
            /> <br/>
            <input 
                type="text"
                name="body"
                placeholder="Issuing Body"
                value={null}
            /> <br/>
            <button>Submit</button>
        </form>
    )
};

export default CertForm;