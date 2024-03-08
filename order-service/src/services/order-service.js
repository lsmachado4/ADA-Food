const userDb = require('../models/user')
const orderDb = require('../models/order')
const mongoose = require('mongoose');
const { ObjectId } = require('mongoose').Types;
class OrderService {
    static async create({ user_id, description }) {
        try {
            const isValidObjectId = mongoose.Types.ObjectId.isValid(user_id);
            if (!isValidObjectId) {
                throw { status: 400, message: 'Invalid user_id format' };
            }

            const exists = await userDb.findById(user_id);
            if (!exists) {
                throw { status: 404, message: 'User not found' };
            }
            
            const result = await orderDb.create({user_id, description})
            return {result, exists}
        } catch (error) {
            console.log(error)
            throw { status: 400, message: 'Invalid format or user not found' };
        }
    }
    
    
        
}
module.exports = OrderService