///////
// Dependencies
////
const itemRouter = require('express').Router()
const Item = require('../models/item')
const mongoose = require('mongoose')
const { weaponGenerator, armorGenerator } = require('../data/itemGenerator')

///////
// Mount Middleware
////


///////
// Routes
////
itemRouter.get('/', async (req, res) => {
    res.json(await Item.find({}))
})

itemRouter.delete('/:id', async (req, res) => {
    res.json(await Item.findByIdAndDelete(req.params.id))
})


itemRouter.put('/:id', async (req, res) => {
    res.json(await Item.findByIdAndUpdate(req.params.id, req.body, { new: true }))
})

itemRouter.post('/', async (req, res) => {
    res.json(await Item.create(req.body))
})

itemRouter.post('/newrandom', async (req, res) => {
    const mongoId = mongoose.Types.ObjectId(req.body._id)
    const genArmor = armorGenerator()
    const genWeapon = weaponGenerator()
    const ownArmor = {...genArmor, owner: mongoId }
    const ownWeapon = {...genWeapon, owner: mongoId } 
    const createdArmor = await Item.create(ownArmor)
    const createdWeapon = await Item.create(ownWeapon)
    res.json([createdArmor, createdWeapon])
})

itemRouter.get('/:id', async (req, res) => {
    res.json(await Item.findById(req.params.id))
})

module.exports = itemRouter