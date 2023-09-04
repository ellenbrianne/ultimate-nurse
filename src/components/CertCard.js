const CertCard = ({ cert }) => {

    const { id, type, expiration, body } = cert;

    return (
        <div className="card">
            <h4>{type}</h4>
            Expires: {expiration} <br/>
            Isssuing Body: {body} <br/>
        </div>
    )
};

export default CertCard;