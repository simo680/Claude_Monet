const Router = require('express')
const router = new Router()

const billRoute = require('./BillRouter')
const cartRouter = require('./CartRouter')
const employerRouter = require('./EmployerRouter')
const menuRouter = require('./MenuRouter')
const orderRouter = require('./OrderRouter')
const tableRouter = require('./TableRouter')
const visitorRouter = require('./VisitorRouter');
const testsRouter = require('./testsRouter')

router.use('/visitor',visitorRouter)
router.use('/table',tableRouter)
router.use('/order',orderRouter)
router.use('/menu',menuRouter)
router.use('/cart',cartRouter)
router.use('/employer',employerRouter)
router.use('/bill',billRoute)
router.use('/Testt',testsRouter)
module.exports = router