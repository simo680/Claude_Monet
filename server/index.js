require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const modules = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const path = require('path')
const errorHandler = require('./middleware/ErrorHandlngMiddleware')
const PORT = process.env.PORT || 5000;
const app = express();

const testtRouter = require('./routes/testsRouter');
const bookingRouter = require('./routes/BookingRouter');
const cartRouter = require('./routes/CartRouter')
const orderRouter = require('./routes/OrderRouter')
const menuRouter = require('./routes/MenuRouter')
const tableRouter = require('./routes/TableRouter')

const employeeRouter =require('./routes/EmployerRouter')
app.use(express.json());
app.use('/api/menu', menuRouter)
app.use('/api/testts', testtRouter);
app.use('/api/booking', bookingRouter);
app.use('/api/cart',cartRouter)
app.use('/api/order', orderRouter);
app.use('/api/employee', employeeRouter)
app.use('/api/tables', tableRouter)

app.use(cors())
app.use(express.json())

app.use('/api', router)
app.use(errorHandler)
const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`Сервер запущен на порте ${PORT}`);
        });
    } catch (error) {
        console.error('Ошибка запуска сервера:', error);
    }
};

start();
