///////
// Dependencies
////
const userRouter = require('express').Router()
const User = require('../models/user')

///////
// Mount Middleware
////


///////
// Routes
////
userRouter.post('/', async (req, res) => {
    const isUser = await User.findOne({ firebaseId: req.body.firebaseId })
    if(!isUser) {
        let statArray = [1, 1, 1, 1, 1, 1]
        statArray.forEach((stat, idx) => {
            let statCalc = [1, 1, 1]
            statCalc.forEach((roll, idx) => {
                statCalc[idx] = Math.floor(Math.random() * (6 - 1 + 1) + 1)
            })
            statArray[idx] = statCalc.reduce((pv, cv) => pv + cv, 0)
        })
        req.body.stats = statArray
        res.json(await User.create(req.body))
    }
})

userRouter.get('/:id', async (req, res) => {
    res.json(await User.findById(req.params.id))
})

module.exports = userRouter