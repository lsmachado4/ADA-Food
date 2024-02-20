const {Router} = require('express')
const SessionHandler = require('./handlers/session-handler')
const routes = new Router()

routes.post('/session', SessionHandler.create)
routes.post("/register", RegisterHandler.create)


module.exports = routes


// const {Router} = require('express')
// const SessionHandler = require('./handlers/session-handler')
// const AuthHandler = require('./handlers/auth-handler')
// const routes = new Router()

// routes.post('/session', SessionHandler.create)
// routes.get('/auth', AuthHandler.auth)
