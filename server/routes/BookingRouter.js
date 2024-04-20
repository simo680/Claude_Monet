const express = require('express');
const router = express.Router();
const BookingController = require('../controllers/bookingController');

router.post('/', BookingController.create);
router.get('/', BookingController.get);
module.exports = router;
