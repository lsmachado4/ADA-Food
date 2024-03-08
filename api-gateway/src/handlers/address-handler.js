const axios = require('axios')


class AddressHandler {
    static async address(req, res) {
        const id = req.params.id
        console.log('id user:', id)
        try {
            const {data} = await axios.patch(`${process.env.ADDRES_SERVICE_URL}/address/${id}`, req.body)
            return res.status(200).json({data})
        } catch (error) {
            console.log(error)
            res.status(error?.response?.status || 500).json({error: error?.responde?.data?.error || 'Server Error'})
        }
    }
}

module.exports = AddressHandler