const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const challengesRoutes = require('./routes/challenges');
const dashboardRoutes = require('./routes/dashboard');
const webhookRoutes = require('./routes/webhook');

app.use('/api/challenges', challengesRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/webhook', webhookRoutes);

// Basic Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!', details: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
