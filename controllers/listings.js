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


module.exports = listingRouter