import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RocketTest from './components/RocketTest';
import FlightTelemetry from './components/FlightTelemetry';
import GroundTestData from './components/GroundTestData';
import mainLogo from './Files/Images/Satellite.png';


const App = () => {
  return (
    <Router>
      <div style={{ backgroundColor: 'black', height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 className="jumbotron-title" style={{ color: 'white', marginTop: '30px' }}>Babarian Rocketry</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rocketTest" element={<RocketTest />} />
          <Route path="/flightTelemetry" element={<FlightTelemetry />} />
          <Route path="/GroundTestData" element={<GroundTestData />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div style={{ backgroundColor: 'black', height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2 style={{ color: 'white' }}>Ground Testing</h2>
      <Link to="/rocketTest" style={{ textDecoration: 'none' }}>
        <button style={{ outline: '2px solid white', backgroundColor: 'black', color: 'white', padding: '10px 20px', fontSize: '16px', borderRadius: '5px', marginTop: '20px', marginBottom: '20px' }}>Begin Thrust Testing</button>
      </Link>
      <h2 style={{ color: 'white' }}>In-Flight Telemetry</h2>
      <Link to="/flightTelemetry" style={{ textDecoration: 'none' }}>
        <button style={{ outline: '2px solid white', backgroundColor: 'black', color: 'white', padding: '10px 20px', fontSize: '16px', borderRadius: '5px', marginTop: '20px' }}>View Live Telemetry</button>
      </Link>
    </div>
  );
};

export default App;
