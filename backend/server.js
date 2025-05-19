const paymentRoutes = require('./routes/paymentRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api/payments', paymentRoutes);
app.use('/api/auth', authRoutes);

const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const authRoutes = require('./routes/authRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/payments', paymentRoutes);

module.exports = app;

const paymentRoutes = require('./routes/paymentRoutes');
app.use('/api/payment', paymentRoutes);
