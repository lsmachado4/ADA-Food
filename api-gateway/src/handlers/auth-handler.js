const axios = require('axios')


class AuthHandler {
static async auth(req, res) {
  try {
    const token = req.headers.authorization;
    
    const {data} = await axios.get(`${process.env.AUTH_SERVICE_URL}/auth`, {
      headers: {
        Authorization: token, // Incluindo o token no header da requisição
      },
    })
    res.status(200).send(data);
    return true
  } catch (error) {
    console.log(error)
  }
  
  }
}

module.exports = AuthHandler