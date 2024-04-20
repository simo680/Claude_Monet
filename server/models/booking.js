const { DataTypes } = require('sequelize');
const sequelize = require('../db');


const Booking = sequelize.define('booking', {
    ID_Booking: {
       type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    number_guests:{ 
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false
    }
  },);
  

module.exports = Booking