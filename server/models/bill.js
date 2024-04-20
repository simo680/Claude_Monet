const sequelize = require('../db');
const { DataTypes } = require('sequelize');
const Booking = require('./booking')

const Bill = sequelize.define('bill', {
    ID_Bill: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
     },
    full_price: {
    type: DataTypes.DECIMAL(10, 2)
  },
    number_bill: {
      type: DataTypes.STRING(30),
      validate: {
        startsWithNoSign(value) {
          if (!value.startsWith('№')) {
            throw new Error('Номер счета должен начинаться с символа "№"');
          }
        }
      }
    },
    type_of_pay: {
      type: DataTypes.STRING(50),
      validate: {
        isIn: [['Наличные', 'Банковской картой']]
      }
    }
  },);
  Bill.belongsTo(Booking, { foreignKey: 'Booking_ID' });

  module.exports = Bill;