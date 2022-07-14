const Sequelize = require('sequelize');
require('dotenv').config()

const db = new Sequelize('postgres', 'postgres', `${process.env.password}`, {
    host: 'localhost',
    dialect: 'postgres',
    operatprsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
    })

module.exports = db;