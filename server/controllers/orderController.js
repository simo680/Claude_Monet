const Order = require('../models/order');

class OrderController {
    async createOrder(req, res) {
        try {
            const { comment, status_order, type_of_pay } = req.body;
            const order = await Order.create({ comment, status_order, type_of_pay });
            return res.json(order);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async getAllOrders(req, res) {
        try {
            const orders = await Order.findAll(); // Получаем все заказы из базы данных
            return res.json(orders); // Возвращаем список заказов в формате JSON
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}
module.exports = new OrderController ()