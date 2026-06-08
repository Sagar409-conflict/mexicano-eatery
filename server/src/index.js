const express = require('express');
const cors = require('cors');
require('dotenv').config();

const menuRoutes = require('./routes/menu');
const reservationRoutes = require('./routes/reservations');
const contactRoutes = require('./routes/contact');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: '🌮 El Fuego API is running!' });
});

// Routes
app.use('/api/menu', menuRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/contact', contactRoutes);

// Global error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🔥 El Fuego server running on http://localhost:${PORT}`);
});
