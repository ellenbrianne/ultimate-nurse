import './App.css';
import NavBar from './components/NavBar';
import History from './components/History';
import Certifications from './components/Certifications';
import { useState, useEffect } from "react";

// state for history & certs will live here

function App() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/history")
      .then(r => r.json())
      .then(historyData => setHistory(historyData))
  }, []);

  return (
    <div className="App">
      <NavBar />
      <History history={history}/>
      <Certifications />
    </div>
  );
}

export default App;
