const {Router} = require('express')
const SessionHandler = require('./handlers/session-handler')
const AddressHandler = require('./handlers/address-handler')
const routes = new Router()

routes.post('/session', SessionHandler.create)
routes.post('/address', AddressHandler.address)


module.exports = routes