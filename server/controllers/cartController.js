const Cart = require('../models/cart'); // Подключаем модель Cart

class CartController {
    async addToCart(req, res, next) {
        const { visitorId, menuId } = req.body; // Получаем данные из запроса
        try {
            const cart = await Cart.create({ Visitor_ID: visitorId, Menu_ID: menuId }); // Создаем запись в таблице Cart
            return res.json(cart); // Возвращаем созданную запись в формате JSON
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async getAllCarts(req, res, next) {
        try {
            const carts = await Cart.findAll(); // Получаем все записи корзины из базы данных
            return res.json(carts); // Возвращаем список корзин в формате JSON
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new CartController();
