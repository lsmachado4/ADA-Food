const axios = require('axios')

class OrderHandler {
    static async order(req, res) {
        try {
            const { data } = await axios.post(`${process.env.ORDER_SERVICE_URL}/order`, req.body)
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
            res.status(error?.response?.status || 500).json({error: error?.response?.data?.error || 'Server Errorrrr'})
        }
    }
}
module.exports = OrderHandler