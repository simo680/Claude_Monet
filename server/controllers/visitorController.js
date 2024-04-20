const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Visitor = require('../models/visitor');

class VisitorController {
  async createVisitor(req, res) {
    try {
      const { first_name, last_name, email, password, age } = req.body;

      const existingVisitor = await Visitor.findOne({ where: { email } });
      if (existingVisitor) {
        return res.status(400).json({ message: 'Посетитель с таким email уже существует' });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newVisitor = await Visitor.create({
        first_name,
        last_name,
        email,
        password: hashedPassword,
        age
      });

      const token = jwt.sign({ ID_Visitor: newVisitor.ID_Visitor }, 'your_secret_key');

      res.status(201).json({ visitor: newVisitor, token });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Что-то пошло не так. Попробуйте снова.' });
    }
  }

  async getAllVisitors(req, res) {
    try {
      const visitors = await Visitor.findAll(); // Получаем всех посетителей из базы данных
      return res.json(visitors); // Возвращаем список посетителей в формате JSON
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Что-то пошло не так. Попробуйте снова.' });
    }
  }
}

module.exports = new VisitorController();
