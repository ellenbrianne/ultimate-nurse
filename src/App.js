import './App.css';
import NavBar from './components/NavBar';
import History from './components/History';
import Certifications from './components/Certifications';
import { useState, useEffect } from "react";

// state for history & certs will live here

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



  return (
    <div className="App">
      <NavBar />
      <History history={history}/>
      <Certifications certs={certifications}/>
    </div>
  );
}

export default App;
