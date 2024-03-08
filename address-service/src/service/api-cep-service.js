const userDb = require('../models/User')

class AddressService {
    static async update(id, addressInformations) {
        try {
            
            const { neighborhood, city, state } = addressInformations
            const user = await userDb.findByIdAndUpdate(id, { neighborhood, city, state }, { new: true })
            return user
        } catch (error) {
            console.log(error)
            throw new Error('User not found')
        }
    }

}

module.exports = AddressService