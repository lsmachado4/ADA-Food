const { Router } = require("express");
const CepApiController = require("./controller/api-cep-ctrl");
const routes = new Router();

routes.post("/viacep", CepApiController.create);

module.exports = routes;
