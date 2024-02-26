const axios = require("axios");

class RegisterHandler {
    static async create(req,res){
        console.log("OLÀ< MUNDO")
        try {

            
            const {data} = await axios.post(`${process.env.REGISTER_SERVICE_BASE_URL}/register`, {
                name: req.body.name,
                email: req.body.email,
                cpf: req.body.cpf,
                street: req.body.street,
                number: req.body.number,
                neighborhood: req.body.neighborhood,
                city: req.body.city,
                state: req.body.state,
                country: req.body.country
            })
            return res.status(200).json(data)
        } catch (error) {
            console.log(error)
            res.status(error?.response?.status || 500).json({error: error?.responde?.data?.error || 'Server Error'})
        }
    }
}

module.exports = RegisterHandler;