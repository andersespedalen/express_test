// app/app.js
const express = require('express');
const bodyParser = require('body-parser');
const vehicleRoutes = require('../routes/vehicles');
const { sequelize, Vehicle } = require('./db');

const app = express();
const port = 3000;

// Middleware for parsing request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Use vehicle routes
app.use('/vehicles', vehicleRoutes);

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
