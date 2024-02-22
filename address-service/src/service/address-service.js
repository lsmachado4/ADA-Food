const axios = require('axios');

async function getAddressByCep(cep) {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching address');
    }
}

module.exports = {
    getAddressByCep
};
