const { Router } = require("express");
const AddressController = require("./controllers/address-controller");
const routes = new Router();

routes.post("/address", AddressController.search);

module.exports = routes;
