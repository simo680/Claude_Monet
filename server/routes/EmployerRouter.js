// Импортируем необходимые модули
const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employerController');

// Роут для создания нового сотрудника
router.post('/', employeeController.createEmployee);
router.get('/',employeeController.getAllEmployees )

module.exports = router;
