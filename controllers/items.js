///////
// Dependencies
////
const itemRouter = require('express').Router()
const Item = require('../models/item')

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

itemRouter.get('/:id', async (req, res) => {
    res.json(await Item.findById(req.params.id))
})

module.exports = itemRouter