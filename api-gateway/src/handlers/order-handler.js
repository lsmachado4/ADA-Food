class OrderHandler {
    static async order(req, res) {
        const token = "teste@email.com"
        try {
            const {data} = await axios.get(`${process.env.ORDER_SERVICE_URL}/order`, {
                headers: {
                  Authorization: token, 
                },
              })
            return res.status(200).json(data)
        } catch (error) {
            console.log(error)
            res.status(error?.response?.status || 500).json({error: error?.responde?.data?.error || 'Server Error'})
        }
    }
}
module.exports = OrderHandler