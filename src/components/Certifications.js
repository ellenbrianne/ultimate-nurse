import CertCard from "./CertCard";
import CertForm from "./CertForm";
import { useState } from "react";

const Certifications = ({ certs, addCert }) => {
    const [isForm, setIsForm] = useState(false);

    const certDisplay = certs.map(cert => {
        return <CertCard key={cert.id} cert={cert} />
    });

    const toggleForm = () => {
        setIsForm(!isForm);
    }
   
    return (
        <div>
            {certDisplay}
            <button onClick={toggleForm}>{isForm ? "Complete Certifications" : "Add Certification"}</button>
            {isForm ? <CertForm addCert={addCert}/> : null }
        </div>
    )
};

export default Certifications;