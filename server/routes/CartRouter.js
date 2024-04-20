const express = require('express');
const router = express.Router();
const cartController= require('../controllers/cartController');

router.post('/', cartController.addToCart);
router.get('/', cartController.getAllCarts);

module.exports = router;
