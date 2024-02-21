const axios = require('axios')


class AuthHandler {
static async auth(req, res) {
  try {
    const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({error: 'Token not provided'});
  }
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