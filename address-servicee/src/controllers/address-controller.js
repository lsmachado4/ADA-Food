const AddressService = require("../services/address-service");
const axios = require('axios');
const Address = require('../models/address'); // Esperar Thauan mergear para inserir rota correta do model 


// nao vai ter conexao com bd.
class AddressController {
    static async search(req, res) {
        try {
            const { cep } = req.params;

            // Consulta a API de consulta de CEP para obter as informações do endereço
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            const addressData = response.data;

            // Verifica se o CEP é válido
            if (addressData.erro) {
                return res.status(404).json({ error: 'CEP not found' });
            }

            // Salva as informações do endereço no banco de dados
            const address = new Address({
                number: addressData.number,
                street: addressData.logradouro,
                neighborhood: addressData.bairro,
                city: addressData.localidade,
                state: addressData.uf
            });
            await address.save();

            res.json({ message: 'Address saved successfully', address });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server Error' });
        }
    }
}

module.exports = AddressController;
