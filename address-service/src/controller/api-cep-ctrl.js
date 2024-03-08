const axios = require("axios");
const AddressService = require("../service/api-cep-service");

class CepApiController {
    static async updateAddress(req, res) {
        try {
            const { id } = req.params;
            const { cep } = req.body;
            const cepInfomations = await axios.get(
                `https://viacep.com.br/ws/${cep}/json/`
            );

            const { data } = cepInfomations;
            console.log('data: ', data)
            
            const addressInformations = {
                neighborhood: data.bairro,
                city: data.localidade,
                state: data.uf,
            };

            const updateduser = await AddressService.update(id, addressInformations);
            console.log(updateduser);

            res.status(200).json(updateduser);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal server error" });
        }
    }
}

module.exports = CepApiController;

// data: 
// 		"data": {
// 			"cep": "59633-200",
// 			"logradouro": "Avenida Pedro Paraguai",
// 			"complemento": "",
// 			"bairro": "Planalto Treze de Maio",
// 			"localidade": "Mossoró",
// 			"uf": "RN",
// 			"ibge": "2408003",
// 			"gia": "",
// 			"ddd": "84",
// 			"siafi": "1759"
// 		}
// 	

// name: String,
// email: String,
// cpf: String,
// street: String,
// number: Number,
// neighborhood: String,
// city: String,
// state: String,
// country: String
