///////
// Dependencies
////
const userRouter = require('express').Router()
const User = require('../models/user')
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

userRouter.get('/:id', async (req, res) => {
    res.json(await User.findById(req.params.id))
})

module.exports = userRouter