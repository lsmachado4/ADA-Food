const {Router} = require('express')
const SessionHandler = require('./handlers/session-handler')
const RegisterHandler = require('./handlers/register-handler')
const AuthHandler = require('./handlers/auth-handler')
const AddressHandler = require('./handlers/address-handler')
const OrderHandler = require('./handlers/order-handler')
const authMiddleware = require('./middlewares/auth')
const routes = new Router()

routes.post('/session', SessionHandler.create)
routes.post('/register', RegisterHandler.create)
// Rotas Autenticadas (Precisa de token)
routes.use(authMiddleware)
routes.post('/order', OrderHandler.order)
routes.patch('/address/:id', AddressHandler.address)
routes.get('/auth', AuthHandler.auth)



module.exports = routes