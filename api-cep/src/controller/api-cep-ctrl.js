const axios = require("axios");

class CepApiController {
    static async create(req, res) {
        try {
            const { cep } = req.body;
            const responseAddress = await axios.get(
                `https://viacep.com.br/ws/${cep}/json/`
            );
            const data = responseAddress.data
            console.log(data);
            res.status(200).json({data});
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    }
}

module.exports = CepApiController;
