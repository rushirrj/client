
import './App.css';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Screens/Home';
import Navbar from './Screens/Navbar';
import Share from './Screens/Share';
import Download from './Screens/Download';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/share" element={<Share />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
