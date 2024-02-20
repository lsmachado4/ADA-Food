const jwt = require('jsonwebtoken')

class SessionService {
    static create(user) {
        return jwt.sign({
            name: user.name,
            email: user.email
        }, process.env.JWT_SECRET_KEY, {
            expiresIn: '7 days'
        })
    }
}

module.exports = SessionService
