///////
// Dependencies
////
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = Schema({
    name: { type: String, required: true },
    itemType: { type: String, required: true },
    rarity: { type: String, required: true },
    ac: { type: Number, default: 0 },
    damage: { type: Object, default: {} },
    effects: { type: Array, default: [] },
    weight: { type: Number, required: true, default: 1 }
}, { timestamps: true })

///////
// Schema to Model and Export
////
module.exports = mongoose.model('Item', itemSchema)