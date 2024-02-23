const AddressService = require('../service/address-service');

async function getAddress(req, res) {

    try {
        const { cep } = req.body;
        if (!cep) {
            throw new Error('CEP is required');
        }
        const address = await AddressService.getAddressByCep(cep);
        res.json(address);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    getAddress
};
