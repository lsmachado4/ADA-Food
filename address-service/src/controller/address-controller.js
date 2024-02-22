// Este arquivo deve conter os controladores relacionados aos endereços.
// Aqui você irá definir os métodos que serão chamados pelas rotas para lidar com as solicitações HTTP.

const AddressService = require('../service/address-service');

// Exemplo de implementação de um controlador para lidar com a rota /address
async function getAddress(req, res) {

    try {
        const { cep } = req.params;
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
