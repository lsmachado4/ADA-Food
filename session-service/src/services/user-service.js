const userDb = require('../models/User')

class UserService {
    static async userExistsByEmail(email) {
        const user = await userDb.findOne({ email })

        if(!user) {
            throw { status: 404, message: 'User not found'}
        }

        return user
        
    }
}

module.exports = UserService