// apps/backend/index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Use CORS and JSON body parsing middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

// Set the port from environment variable or default to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
