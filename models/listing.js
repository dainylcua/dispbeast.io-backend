///////
// Dependencies
////
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const listingSchema = Schema({
    itemId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Item' },
    sellerId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    price: { type: Number, required: true },
    bids: { type: Array, default: [] },
    endDate: { type: Date, required: true } 
}, { timestamps: true })

///////
// Schema to Model and Export
////
module.exports = mongoose.model('Listing', listingSchema)