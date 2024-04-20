const sequelize = require('../db');
const { DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Visitor = sequelize.define('visitor', {
  ID_Visitor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  first_name: DataTypes.STRING(50),
  last_name: DataTypes.STRING(50),
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  hooks: {
    beforeCreate: async (visitor) => {
      if (visitor.password) {
        const salt = await bcrypt.genSalt(10);
        visitor.password = await bcrypt.hash(visitor.password, salt);
      }
    }
  }
});

const jwtSecretKey = 'yourPrivateKey';

Visitor.prototype.generateAuthToken = function() {
  return jwt.sign({ ID_Visitor: this.ID_Visitor }, jwtSecretKey);
};

Visitor.prototype.validatePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

module.exports = Visitor;
