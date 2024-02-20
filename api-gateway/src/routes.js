const {Router} = require('express')
const SessionHandler = require('./handlers/session-handler')
const AuthHandler = require('./handlers/auth-handler')
const routes = new Router()

routes.post('/session', SessionHandler.create)
routes.get('/auth', AuthHandler.auth)


module.exports = routes