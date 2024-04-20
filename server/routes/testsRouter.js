// routes/testtRouter.js
const express = require('express');
const router = express.Router();
const TesttController = require('../controllers/testscontroller');

// Создание записи
router.post('/', TesttController.create);

// Получение всех записей
router.get('/', TesttController.getAll);

// Другие маршруты, такие как обновление и удаление, могут быть добавлены по аналогии с созданием и получением

module.exports = router;
