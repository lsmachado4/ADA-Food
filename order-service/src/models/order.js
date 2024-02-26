const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
    order_id: String,
    user_id: String,
    description: String,
})
module.exports = mongoose.model('Order', OrderSchema)