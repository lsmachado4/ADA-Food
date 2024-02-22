const axios = require('axios')


class AddressHandler {
    static async address(req, res) {
        try {
            const {data} = await axios.post(`${process.env.AUTH_SERVICE_URL}/address`, req.body)
            return res.status(200).json(data)
        } catch (error) {
            console.log(error)
            res.status(error?.response?.status || 500).json({error: error?.responde?.data?.error || 'Server Error'})
        }
    }
}

module.exports = AddressHandler