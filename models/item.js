///////
// Dependencies
////
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const damageSchema = Schema ({
    quantity: { type: Number },
    dice: { type: Number },
    type: { type: String }
}, { timestamps: true })

const itemSchema = Schema({
    name: { type: String, required: true },
    itemType: { type: String, required: true },
    rarity: { type: String, required: true },
    ac: { type: Number, default: 0 },
    damage: { type: damageSchema, default: {} },
    weight: { type: Number, required: true, default: 1 },
    owner: { type: Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true })

///////
// Schema to Model and Export
////
module.exports = mongoose.model('Item', itemSchema)