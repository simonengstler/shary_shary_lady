const express = require('express');
const cors = require('cors'); // For handling cross-origin requests
const bodyParser = require('body-parser'); // For parsing request bodies
require('dotenv').config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);
const groupRoutes = require('./routes/groupRoutes')
app.use('/api/groups', groupRoutes);

// Server
const { server } = require('./config/config');
app.listen(server.port, () => {
  console.log(`Server is running on port ${server.port}`);
});