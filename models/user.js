///////
// Dependencies
////
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
    email: { type: String, unique: true, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    stats: { type: Array, required: true },
    money: { type: Number, required: true },
    inventory: { type: Array, required: true, default: [] },
    equipment: { type: Array, required: true, default: [] },
    listings: { type: Array, required: true, default: [] },
    admin: { type: Boolean, default: false }
}, { timestamps: true })

///////
// Schema to Model and Export
////
module.exports = mongoose.model('User', userSchema)