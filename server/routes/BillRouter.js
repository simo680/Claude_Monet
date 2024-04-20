const express = require('express');
const router = express.Router();
const BillController = require('../controllers/billController');

// Создание записи
router.post('/', BillController.create);
router.get('/', BillController.getAll);
module.exports = router;