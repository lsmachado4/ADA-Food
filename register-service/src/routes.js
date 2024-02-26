const { Router } = require('express');
const RegisterController = require('./controllers/register-ctlr');

const routes = new Router();

routes.post('/register', RegisterController.create)

module.exports = routes;
