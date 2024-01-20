// routes/vehicles.js
const express = require('express');
const { Vehicle } = require('../app/db'); // Adjust the path accordingly

const router = express.Router();

// Index vehicles (GET)
router.get('/', async (req, res) => {
    const vehicles = await Vehicle.findAll();
    res.json(vehicles);
});

// Show vehicle (GET)
router.get('/:id', async (req, res) => {
    const vehicle = await Vehicle.findByPk(req.params.id);
    if (vehicle) {
        res.json(vehicle);
    } else {
        res.status(404).send();
    }
});

// Store vehicle (POST)
router.post('/', async (req, res) => {
    const vehicle = await Vehicle.create(req.body);
    res.json(vehicle);
});

// Update vehicle (PUT/PATCH)
router.put('/:id', async (req, res) => {
    const vehicle = await Vehicle.findByPk(req.params.id);
    if (vehicle) {
        await vehicle.update(req.body);
        res.json(vehicle);
    } else {
        res.status(404).json({ message: 'Vehicle not found' });
    }
});

// Delete vehicle (DELETE)
router.delete('/:id', async (req, res) => {
    const vehicle = await Vehicle.findByPk(req.params.id);
    if (vehicle) {
        await vehicle.destroy();
        res.json({ message: 'Vehicle deleted' });
    } else {
        res.status(404).json({ message: 'Vehicle not found' });
    }
});

module.exports = router;
