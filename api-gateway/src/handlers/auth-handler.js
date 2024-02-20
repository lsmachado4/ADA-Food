const axios = require('axios')


class AuthHandler {
static async auth(req, res) {
    const {data} = await axios.get(`${process.env.AUTH_SERVICE_URL}/auth`)
    res.status(200).send(data);
  }
}

module.exports = AuthHandler