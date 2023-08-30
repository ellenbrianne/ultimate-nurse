import './App.css';
import NavBar from './components/NavBar';
import History from './components/History';
import Certifications from './components/Certifications';
import { useState, useEffect } from "react";

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

  return (
    <div className="App">
      <h2>Ultimate Nurse: Ellen Bennett</h2>
      <NavBar />
      <History 
        history={history} 
        addHistory={addHistory}
      />
      <Certifications certs={certifications}/>
    </div>
  );
}

export default App;
