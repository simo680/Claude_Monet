const sequelize = require('../db');
const { DataTypes } = require('sequelize');
const Order = require('./order')
const Menu = require('./menu')
const Visitor = require('./visitor')


const Cart = sequelize.define('cart', {
    ID_Cart: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true }
  },)

Cart.belongsTo(Visitor, { foreignKey: 'Visitor_ID' });
Cart.hasMany(Order, { foreignKey: 'Cart_ID' });
Cart.hasMany(Menu, { foreignKey: 'Cart_ID' });
module.exports = Cart;