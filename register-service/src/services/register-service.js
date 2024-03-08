
const userDb = require('../models/User')

class UserService {
    static async createUser(req) {
        const user = await userDb.create(req)

        if(!user) {
            throw { status: 404, message: 'User not found'}
        }

        return user
        
    }

    static async update() {
        const user = await userDb.update
    }
}

module.exports = UserService