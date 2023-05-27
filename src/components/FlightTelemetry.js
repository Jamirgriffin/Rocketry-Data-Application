import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBatteryFull, FaTemperatureHigh, FaSignal } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';

const FlightTelemetry = () => {
  const [batteryLevel, setBatteryLevel] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [signalStrength, setSignalStrength] = useState(0);
  const chartData = {
    labels: ['1', '2', '3', '4', '5', '6','7', '8', '9', '10', '11', '12', '13', '14', '15'],
    datasets: [
      {
        label: 'Altitude (M))',
        data: [0, 10, 20, 30, 40, 50, 60, 70, 60, 50, 40, 30, 20, 10, 0],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  };

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      const response = await fetch('https://api.spacexdata.com/v4/rockets/falcon9');
      const data = await response.json();
      // Update state with the fetched data
      setBatteryLevel(data.batteryLevel);
      setTemperature(data.temperature);
      setSignalStrength(data.signalStrength);
    };
    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: 'black', height: '80vh', width: '80vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 className="jumbotron-title" style={{ color: 'white', fontSize: '24px', margintop: '0px', marginBottom: '20px' }}>Altitude</h3>
      <div style={{ width: '20', height: '20%', margin: '0', flexGrow: .5 }}>
        <Line data={chartData} options={{ maintainAspectRatio: false }} />
      </div>
      <h3 className="jumbotron-title" style={{ color: 'white', fontSize: '24px', margintop: '0px', marginBottom: '20px' }}>Speed</h3>
      <div style={{ width: '20', height: '20%', margin: '0', flexGrow: .5 }}>
        <Line data={chartData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};
export default FlightTelemetry;
