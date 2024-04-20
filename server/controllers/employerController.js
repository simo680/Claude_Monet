const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const  Employee  = require('../models/employee');

class EmployeeController {
    async createEmployee(req, res) {
      try {
        const { first_name, last_name, role_employee, login_employee, password_employee } = req.body;
  
        const existingEmployee = await Employee.findOne({ where: { login_employee } });
        if (existingEmployee) {
          return res.status(400).json({ message: 'Сотрудник с таким логином уже существует' });
        }
  
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password_employee, salt);
  
        const newEmployee = await Employee.create({
          first_name,
          last_name,
          role_employee,
          login_employee,
          password_employee: hashedPassword
        });
  
        const token = jwt.sign({ ID_Employee: newEmployee.ID_Employee }, 'your_secret_key');
  
        res.status(201).json({ employee: newEmployee, token });
      } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Что-то пошло не так. Попробуйте снова.' });
      }
    }
  
    async getAllEmployees(req, res) {
      try {
        const employees = await Employee.findAll(); // Получаем всех сотрудников из базы данных
        return res.json(employees); // Возвращаем список сотрудников в формате JSON
      } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Что-то пошло не так. Попробуйте снова.' });
      }
    }
  }

module.exports = new EmployeeController();
