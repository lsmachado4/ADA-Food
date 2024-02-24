const userDb = require('../models/user')

class OrderService {
    static async userExistsByEmail(email) {
        const user = await userDb.findOne({ email })

        if(!user) {
            throw { status: 404, message: 'User not found'}
        }

        return user
        
    }
}

module.exports = OrderService