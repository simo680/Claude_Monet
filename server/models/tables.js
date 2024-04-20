const sequelize = require('../db');
const { DataTypes } = require('sequelize');


const Tables = sequelize.define('tables', {
    ID_Table: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },
    table_number:{ 
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false
    },
    seats:{
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false
    }
  },);

module.exports = Tables; 