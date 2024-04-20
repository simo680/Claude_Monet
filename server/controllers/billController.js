const Bill = require('../models/bill');

class BillController {
  async create(req, res) {
    try {
      const { full_price, number_bill, type_of_pay, Booking_ID } = req.body;
      const bill = await Bill.create({ full_price, number_bill, type_of_pay, Booking_ID });
      return res.status(201).json(bill);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const bills = await Bill.findAll();
      return res.json(bills);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}



module.exports = new BillController();
