const express = require('express');
const router = express.Router();
const tableController = require('../controllers/tableController');

// Роут для создания нового столика
router.post('/', tableController.addTable);
router.get('/',tableController.getAllTables )

module.exports = router;
