///////
// Dependencies
////
const listingRouter = require('express').Router()
const Listing = require('../models/listing')

///////
// Mount Middleware
////


///////
// Routes
////
listingRouter.get('/', async (req, res) => {
    res.json(await Listing.find({}))
})

listingRouter.post('/', async (req, res) => {
    res.json(await Listing.create(req.body))
})

listingRouter.delete('/:id', async (req, res) => {
    res.json(await Listing.findByIdAndDelete(req.params.id))
})

listingRouter.get('/:id', async (req, res) => {
    res.json(await Listing.findById(req.params.id))
})


module.exports = listingRouter