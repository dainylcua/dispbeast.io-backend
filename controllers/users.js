///////
// Dependencies
////
const userRouter = require('express').Router()
const User = require('../models/user')
const mongoose = require('mongoose')
const statGenerator = require('../data/statGenerator')


///////
// Mount Middleware
////


///////
// Routes
////
userRouter.post('/', async (req, res) => {
    const isUser = await User.findOne({ firebaseId: req.body.firebaseId })
    if(!isUser) {
        const statArray = statGenerator()
        req.body.stats = statArray
        res.json(await User.create(req.body))
    }
})

userRouter.put('/purchase', async (req, res) => {
    const price = req.body.price
    const buyer = mongoose.Types.ObjectId(req.body.buyer)
    const seller = mongoose.Types.ObjectId(req.body.seller)
    const newInfo = await User.findByIdAndUpdate(buyer, {'$inc': { 'money': -price }})
    await User.findByIdAndUpdate(seller, {'$inc': { 'money': price }})
    res.json(newInfo)
})

userRouter.get('/:uid', async (req, res) => {
    res.json(await User.findOne({firebaseId: req.params.uid}))
})


module.exports = userRouter