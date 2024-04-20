const sequelize = require('../db');
const { DataTypes } = require('sequelize');


const Order = sequelize.define('order', {
    ID_Order: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true },
    comment:{
      type: DataTypes.STRING,
      unique:false,
      allowNull: false
    },
    status_order: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false
    },
    type_of_pay: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false
    }
  },);
  
module.exports = Order;  