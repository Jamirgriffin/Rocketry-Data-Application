//where we configure and start our Node.js server. It includes the server setup, middleware configuration, and the code to listen for incoming requests.//

const express = require('express');
const app = express();
const port = 3000; // Use any port number you prefer

app.post('/data', (req, res) => {
  // Handle the incoming data from ESP32 here
  console.log('Received data:', req.body);
  res.sendStatus(200); // Send a response back to the ESP32
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
