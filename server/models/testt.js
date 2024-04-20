// models/Testt.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Testt = sequelize.define('testt', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  }
});

module.exports = Testt;
