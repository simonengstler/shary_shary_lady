const express = require('express');
const cors = require('cors'); // For handling cross-origin requests
const bodyParser = require('body-parser'); // For parsing request bodies
require('dotenv').config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies

// List of route modules
const routeModules = [
  { path: '/api/users', module: require('./routes/userRoutes') },
  { path: '/api/groups', module: require('./routes/groupRoutes') },
  { path: '/api/register', module: require('./routes/registerRoutes') },
  { path: '/api/login', module: require('./routes/loginRoutes') },
  // Add more route modules as needed
];

// Loop through and add routes
routeModules.forEach(routeModule => {
  app.use(routeModule.path, routeModule.module);
});

// Server
const { server } = require('./config/config');
app.listen(server.port, () => {
  console.log(`Server is running on port ${server.port}`);
});