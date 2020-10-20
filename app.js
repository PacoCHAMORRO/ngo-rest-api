const express = require('express');
const bodyParser = require('body-parser');

const collabsRoutes = require('./routes/collabs');

const app = express();

app.use(bodyParser.json()); // apdplication/json

// CORS headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(collabsRoutes);
  
app.listen(8080, () => console.log('Server running on port 8080'));

