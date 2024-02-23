const jwt = require('jsonwebtoken');
const SessionController = require('./session-ctrl');

class AuthController {
    static auth(req, res) {
        const {authorization} = req.headers;
        console.log("Autorização ", authorization);
        if (!authorization) {
            return res.status(401).json({ error: 'Authorization header missing' });
          }
          const [, token] = authorization.split(' ')

        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
            console.log("payload", payload);
            const name = payload.name;
            res.status(200).json({message: `Usuário ${name} autorizado`});
        } catch (error) {
            console.log(error)
        return res.status(error.status || 401).json({ error: error.message || 'Unauthorized'})
        }
    }
}

module.exports = AuthController;

