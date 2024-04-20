const { DataTypes } = require('sequelize');
const sequelize = require('../db');
//const Cart = require('./cart'); // Подключаем модель Cart

const Menu = sequelize.define('menu', {
    ID_Menu: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name_dish: {
        type: DataTypes.STRING(100),
        allowNull: false // Разрешаем сохранять только непустые значения
    },
    description_dish: {
      type: DataTypes.STRING(100),
      allowNull: false // Разрешаем сохранять только непустые значения
    },
    cost_dish: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false // Разрешаем сохранять только непустые значения
    },
    gram_dish: {
      type: DataTypes.STRING(100),
      allowNull: false // Разрешаем сохранять только непустые значения
    }
});

//Menu.belongsTo(Cart, { foreignKey: 'Cart_ID' }); // Добавляем отношение

module.exports = Menu;
