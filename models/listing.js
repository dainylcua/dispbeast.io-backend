///////
// Dependencies
////
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const listingSchema = Schema({
    itemId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Item' },
    itemName: { type: String, required: true },
    sellerId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    price: { type: Number, required: true },
    bids: { type: Array, default: [] },
    rarity: { type: String, default: 'common' },
    itemColor: { type: String, default: 'text-white' },
    endDate: { type: Date, required: true } 
}, { timestamps: true })

///////
// Schema to Model and Export
////
module.exports = mongoose.model('Listing', listingSchema)