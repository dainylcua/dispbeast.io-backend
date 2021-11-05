///////
// Dependencies
////
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const admin = require("firebase-admin")


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

//// Authorization Middleware
admin.initializeApp({
    credential: admin.credential.cert(
        {
            "type": "service_account",
            "project_id": "dispbeast",
            "private_key_id": process.env.PRIVATE_KEY_ID,
            "private_key": JSON.parse(process.env.PRIVATE_KEY).replace(/\\n/g, '\n'),
            "client_email": "firebase-adminsdk-wevqv@dispbeast.iam.gserviceaccount.com",
            "client_id": process.env.CLIENT_ID,
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-wevqv%40dispbeast.iam.gserviceaccount.com"
        }
    )
})
app.use(async function(req, res, next)  {
    const token = req.get('Authorization')
    // Checks headers for Authorization

    // If there is a header, then log in the user
    if(token) {
        const authUser = await admin.auth().verifyIdToken(token.replace('Bearer ', ''))
        req.user = authUser
    }

    next()
})

function isAuthenticated(req, res, next) {
    if(req.user) return next()
    else res.status(401).json({message: 'Unauthorized user detected'})
}

///////
// Routes
////
const itemController = require('./controllers/items')
const listingController = require('./controllers/listings')
const userController = require('./controllers/users')

app.use('/api/items', isAuthenticated, itemController)
app.use('/api/listings', isAuthenticated, listingController)
app.use('/api/users', userController)


app.get('/', (req, res) => {
    try {
        res.send('hello world')
    } catch (error) {
        res.send(`error: ${error}`)
    }
})


///////
// Listener
////

app.listen(process.env.PORT, () => console.log(`Listening on port: ${PORT}.`))