///////
// Dependencies
////
const itemRouter = require('express').Router()
const Item = require('../models/item')
const User = require('../models/user')
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
    const createdItems = await Item.create(ownArmor, ownWeapon)
    res.json(createdItems)
})

itemRouter.post('/loot', async (req, res) => {
    const mongoId = mongoose.Types.ObjectId(req.body._id)
    const randNum = Math.round(Math.random())
    let ownItem = ''
    if(randNum) {
        const genItem = armorGenerator()
        ownItem = {...genItem, owner: mongoId }
    } else {
        const genItem = weaponGenerator()
        ownItem = {...genItem, owner: mongoId } 
    }
    res.json(await Item.create(ownItem))
})

itemRouter.get('/inventory/:id', async (req, res) => {
    res.json(await Item.find({owner: req.params.id}))
})

itemRouter.get('/:id', async (req, res) => {
    res.json(await Item.findById(req.params.id))
})

module.exports = itemRouter