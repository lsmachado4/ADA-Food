// Este arquivo deve conter a definição das rotas da sua aplicação, incluindo a rota /address.

const express = require('express');
const AddressController = require('./controller/address-controller');

const router = express.Router();

// Define a rota /address e associa-a ao controlador AddressController.getAddress
router.get('/', AddressController.getAddress);

module.exports = router;

