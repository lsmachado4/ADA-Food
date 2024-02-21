const jwt = require('jsonwebtoken')
const SessionController = require('./session-ctrl');
class AuthController {
    static auth(req, res) {
        const {authorization} = req.headers

        const token = authorization.split(' ')[1];

        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET_KEY)
            console.log(payload)

            
        } catch (error) {
            console.log(error)
        }
        
        res.status(200).json({message: 'Session created successfully!'});
    }
}

module.exports = AuthController;