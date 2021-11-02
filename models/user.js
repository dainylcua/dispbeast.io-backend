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
    inventory: [
        {
            item: { type: Schema.Types.ObjectId, ref: "Item" }
        }
    ],
    listings: [
        {
            listing: { type: Schema.Types.ObjectId, ref: "Listing" }
        }
    ],
}, { timestamps: true })

///////
// Schema to Model and Export
////
module.exports = mongoose.model('User', userSchema)