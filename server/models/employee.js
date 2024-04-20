const sequelize = require('../db');
const { DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Employee = sequelize.define('employee', {
  ID_Employee: { 
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
  first_name: DataTypes.STRING(50),
  last_name: DataTypes.STRING(50),
  role_employee: DataTypes.STRING(50),
  login_employee: DataTypes.STRING(50),
  password_employee: DataTypes.STRING(60) // Увеличил размер для хранения хеша пароля
}, {
  hooks: {
    beforeCreate: async (employee) => {
      if (employee.password_employee) {
        const salt = await bcrypt.genSalt(10);
        employee.password_employee = await bcrypt.hash(employee.password_employee, salt);
      }
    }
  }
});
const jwtSecretKey = 'yourPrivateKey';

// Для использования ключа:
Employee.prototype.generateAuthToken = function() {
  return jwt.sign({ ID_Employee: this.ID_Employee }, jwtSecretKey);
};

Employee.prototype.generateAuthToken = function() {
  return jwt.sign({ ID_Employee: this.ID_Employee }, 'yourPrivateKey'); // Здесь должен быть ваш секретный ключ для подписи токена
};

// Для проверки пароля
Employee.prototype.validatePassword = function(password) {
  return bcrypt.compare(password, this.password_employee);
};

  module.exports = Employee; 
