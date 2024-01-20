// Framework
const express = require('express');
const app = express();
const port = 3000;

//Database
const { sequelize, Vehicle } = require('./db');

// Middleware for parsing request body
app.use(express.json());

//Routing
const vehicleRoutes = require('../routes/vehicles');
app.use('/vehicles', vehicleRoutes);

// default route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// start server
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
