const Tables = require('../models/tables');

class TableController {
  async addTable(req, res) {
    try {
      const { table_number, seats } = req.body;

      // Создаем новую запись о столике в базе данных
      const newTable = await Tables.create({
        table_number,
        seats
      });

      res.status(201).json({ table: newTable });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Что-то пошло не так. Попробуйте снова.' });
    }
  }

  async getAllTables(req, res) {
    try {
      // Получаем все столы из базы данных
      const tables = await Tables.findAll();

      res.json(tables); // Возвращаем список всех столов в формате JSON
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Что-то пошло не так. Попробуйте снова.' });
    }
  }
}

module.exports = new TableController();
