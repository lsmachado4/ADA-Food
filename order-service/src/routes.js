const { Router } = require('express')
const OrderController = require('./controllers/order-controller')

const routes = new Router()

routes.post('/order', OrderController.create)
module.exports = routes