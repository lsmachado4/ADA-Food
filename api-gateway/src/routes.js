const {Router} = require('express')
const SessionHandler = require('./handlers/session-handler')
const authMiddleware = require('./middlewares/auth')
const AuthHandler = require('./handlers/auth-handler')
const AddressHandler = require('./handlers/address-handler')
const routes = new Router()

routes.post('/session', SessionHandler.create)

// Rotas Autenticadas (Precisa de token)
routes.use(authMiddleware)
routes.get('/auth', AuthHandler.auth)
routes.post('/address', AddressHandler.address)


module.exports = routes