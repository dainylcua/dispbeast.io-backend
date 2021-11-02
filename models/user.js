///////
// Dependencies
////
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
    firebaseId: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    stats: { type: Array, required: true, default: [1, 1, 1, 1, 1, 1] },
    money: { type: Number, required: true, default: 50000 },
    inventory: { type: Array, required: true, default: [] },
    listings: { type: Array, required: true, default: [] },
    admin: { type: Boolean, default: false }
}, { timestamps: true })

///////
// Schema to Model and Export
////
module.exports = mongoose.model('User', userSchema)