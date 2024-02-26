const userDb = require('../models/user')
const orderDb = require('../models/order')

class OrderService {
    static async create({ order_id, user_id, description }) {
        const created = await orderDb.create({order_id, user_id, description})
        return created
    }
    
    
        
}
module.exports = OrderService