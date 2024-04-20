const Booking = require('../models/booking');

class BookingController {
  async create(req, res) {
    try {
      const { number_guests } = req.body;
      const booking = await Booking.create({ number_guests });
      return res.json(booking);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async get(req, res) {
    try {
      const bookings = await Booking.findAll(); // Получаем все бронирования из базы данных
      return res.json(bookings); // Возвращаем список бронирований в формате JSON
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new BookingController();
