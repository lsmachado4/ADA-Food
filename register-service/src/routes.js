const { Router } = require("express");
const RegisterController = require("./controllers/register-controller");

const routes = new Router();

routes.post("/register", RegisterController.registerUser);

module.exports = routes;