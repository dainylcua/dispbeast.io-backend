///////
// Dependencies
////
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')


// Config .env
require('dotenv').config()


///////
// Database Handler
////
mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection

db.on('error', (err) => console.log(`Error: ${err.message}.`))
db.on('connected', () => console.log(`Connected to MongoDB on port: ${db.port}!`))
db.on('disconnected', () => console.log(`Disconnected from MongoDB`))

///////
// Models and Controllers
////



///////
// Mount Middleware
////

const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(morgan('dev'))
app.use(cors())

///////
// Routes
////



app.get('/', (req, res) => {
    res.send('hello world')
})


///////
// Listener
////
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Listening on port: ${PORT}.`))