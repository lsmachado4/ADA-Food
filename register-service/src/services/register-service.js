const userDb = require('../models/User')

class UserService {
    static async createUser({  name, email, cpf, street, number, neighborhood, city, state, country}) {
        const user = await userDb.create({  name, email, cpf, street, number, neighborhood, city, state, country})

        if(!user) {
            throw { status: 404, message: 'User not found'}
        }

        return user
        
    }
}

module.exports = UserService