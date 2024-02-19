const jwt = require("jsonwebtoken");

class SessionService {
    static create(user) {
        return jwt.sign(
            {
                id: user.id,
                isAdmin: user.isAdmin,
                roles: user.roles,
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: 30,
            }
        );
    }
}

module.exports = SessionService;
