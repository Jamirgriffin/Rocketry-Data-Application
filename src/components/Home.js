import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100">
      <h1>Welcome to Rocket Telemetry System</h1>
      <Link to="/rocket" className="btn btn-primary btn-lg mt-3">Go to Rocket Telemetry</Link>
    </div>
  );
};

export default Home;
