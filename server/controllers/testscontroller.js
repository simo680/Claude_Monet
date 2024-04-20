// controllers/TesttController.js
const Testt = require('../models/testt');

class TesttController {
  async create(req, res) {
    try {
      const { name } = req.body;
      const testt = await Testt.create({ name });
      return res.json(testt);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const testts = await Testt.findAll();
      return res.json(testts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  // Другие методы, такие как update и delete, могут быть добавлены по аналогии с create и getAll
}

module.exports = new TesttController();
