const express = require('express');
const AddressController = require('./controller/address-controller');

const router = express.Router();

router.get('/', AddressController.getAddress);

module.exports = router;

