import CertCard from "./CertCard";

const Certifications = ({ certs }) => {

    const certDisplay = certs.map(cert => {
        return <CertCard key={cert.id} cert={cert} />
    });
   
    return (
        <div>
            {certDisplay}
            <button>Add Certification</button>
        </div>
    )
};

export default Certifications;