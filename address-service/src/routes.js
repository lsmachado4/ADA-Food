const { Router } = require("express");
const CepApiController = require("./controller/api-cep-ctrl");
const routes = new Router();

routes.patch("/address/:id", CepApiController.updateAddress);

module.exports = routes;
