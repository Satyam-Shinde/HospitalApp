const express = require('express');
const app = express();

// Middleware (for parsing request bodies, logging, etc.)
app.use(express.json()); // For parsing JSON request bodies

// Add CORS support (if needed)
const cors = require('cors');
app.use(cors({ origin: true }));

// Sample logging middleware
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

// Firestore reference
const db = admin.firestore();
