///////
// Dependencies
////
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const damageSchema = Schema ({
    quantity: { type: Array },
    dice: { type: Array },
    type: { type: Array }
}, { timestamps: true })

const itemSchema = Schema({
    name: { type: String, required: true },
    itemType: { type: String, required: true },
    rarity: { type: String, required: true },
    ac: { type: Number, default: 0 },
    damage: { type: damageSchema, default: {} },
    effects: { type: String },
    weight: { type: Number, required: true, default: 1 },
    owner: { type: String, required: true }
}, { timestamps: true })

///////
// Schema to Model and Export
////
module.exports = mongoose.model('Item', itemSchema)