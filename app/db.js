const { Sequelize, Model, DataTypes } = require('sequelize');

// Create Sequelize instance
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/db.sqlite'
});

class Vehicle extends Model {}
Vehicle.init({
    // PRIMARY KEY
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    make: DataTypes.STRING,
    model: DataTypes.STRING
}, { sequelize, modelName: 'vehicle' });

// Sync models with the database
sequelize.sync();

module.exports = { sequelize, Vehicle };
