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
    damage: { 
            quantity: { type: Number, default: 0 },
            dice: { type: Number, default: 0 },
            type: { type: String, default: '' }
        },
    weight: { type: Number, required: true, default: 1 },
    owner: { type: Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true })

///////
// Schema to Model and Export
////
module.exports = mongoose.model('Item', itemSchema)