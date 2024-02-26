const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    cpf: String,
    street: String,
    number: Number,
    neighborhood: String,
    city: String,
    state: String,
    country: String
})

module.exports = mongoose.model('User', UserSchema)