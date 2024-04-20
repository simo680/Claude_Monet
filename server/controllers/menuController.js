const Menu = require('../models/menu');

class MenuController {
    async createMenu(req, res) {
        try {
            const { name_dish, description_dish, cost_dish, gram_dish } = req.body;
            const menu = await Menu.create({ name_dish, description_dish, cost_dish, gram_dish });
            return res.json(menu);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new MenuController();
