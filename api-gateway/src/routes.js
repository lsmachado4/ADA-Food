const {Router} = require('express')
const SessionHandler = require('./handlers/session-handler')
const authMiddleware = require('../src/middlewares/auth')
const AuthHandler = require('./handlers/auth-handler')
const routes = new Router()

routes.post('/session', SessionHandler.create)

// Rotas Autenticadas
routes.use(authMiddleware)
routes.get('/auth', AuthHandler.auth)


module.exports = routes