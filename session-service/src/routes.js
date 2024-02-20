const { Router } = require("express");
const SessionController = require("./controllers/session-ctrl");
const AuthHandler = require("../src/controllers/auth-ctrl");
const routes = new Router();

routes.post("/session", SessionController.create);
routes.get("/auth", AuthHandler.auth);

module.exports = routes;
