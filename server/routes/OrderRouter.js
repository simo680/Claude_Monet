const Router = require('express')
const router = new Router()
const OrderController= require('../controllers/orderController');



router.post('/', OrderController.createOrder)
router.get('/' , OrderController.getAllOrders )


module.exports = router