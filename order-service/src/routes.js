const { Router } = require('express')
const OrderController = require('./controller/order-controller')

const routes = new Router()

routes.post('/order', OrderController.create)

module.exports = routes