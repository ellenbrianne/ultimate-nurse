import './App.css';
import Bio from './components/Bio';
import NavBar from './components/NavBar';
import History from './components/History';
import Certifications from './components/Certifications';
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {

  const [history, setHistory] = useState([]);
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/history")
      .then(r => r.json())
      .then(historyData => setHistory(historyData))

    fetch("http://localhost:3000/certifications")
      .then(r => r.json())
      .then(certData => setCertifications(certData))
  }, []);

  const addHistory = (newHistory) => {
    fetch("http://localhost:3000/history", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newHistory)
    })
      .then(r => r.json())
      .then(newHistoryObj => setHistory(prevList => [ ...prevList, newHistoryObj ]))
  };

  const addCert = (newCert) => {
    fetch("http://localhost:3000/certifications", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newCert)
    })
      .then(r => r.json())
      .then(newCertObj => setCertifications(prevList => [ ...prevList, newCertObj ]))
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Bio />} />
        <Route 
          path="/work-history"
          element={
            <History 
              history={history} 
              addHistory={addHistory}
            />
          }
        />
        <Route  
          path="/certifications"
          element={
            <Certifications 
              certs={certifications}
              addCert={addCert}
            />
          }
        />
      </Routes>
      
    </div>
  );
}

export default App;
