const {Router} = require('express')
const SessionHandler = require('./handlers/session-handler')
const routes = new Router()

routes.post('/session', SessionHandler.create)



module.exports = routes