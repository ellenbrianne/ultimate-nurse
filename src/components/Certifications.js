import CertCard from "./CertCard";

const Certifications = ({ certs }) => {

    const certDisplay = certs.map(cert => {
        return <CertCard key={cert.id} cert={cert} />
    });
   
    return (
        <div>
            {certDisplay}
        </div>
    )
};

export default Certifications;