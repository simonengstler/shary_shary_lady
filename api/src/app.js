const express = require('express');
const cors = require('cors'); // For handling cross-origin requests
const https = require('https');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser'); // For parsing request bodies
require('dotenv').config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies

// Certificate
const options = {
  key: fs.readFileSync(path.join(__dirname, '../ssl/localhost.key')),
  cert: fs.readFileSync(path.join(__dirname, '../ssl/localhost.crt')),
};

// List of route modules
const routeModules = [
  { path: '/api/users', module: require('./routes/userRoutes') },
  { path: '/api/groups', module: require('./routes/groupRoutes') },
  { path: '/api/auth', module: require('./routes/authRoutes') },
];

// Loop through and add routes
routeModules.forEach(routeModule => {
  app.use(routeModule.path, routeModule.module);
});

// HTTPS Server
const { server } = require('./config/config');
const serverInstance = https.createServer(options, app);

serverInstance.listen(server.port, () => {
  console.log(`Server is running on port ${server.port}`);
});