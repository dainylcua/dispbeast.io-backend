///////
// Dependencies
////
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
    firebaseId: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    stats: { type: Array, required: true, default: [1, 1, 1, 1, 1, 1] },
    money: { type: Number, required: true, default: 50000 }
}, { timestamps: true })

///////
// Schema to Model and Export
////
module.exports = mongoose.model('User', userSchema)