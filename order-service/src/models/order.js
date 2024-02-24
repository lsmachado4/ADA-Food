const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
    user_id: String,
    description: String,
})

module.exports = mongoose.model('Order', OrderSchema)