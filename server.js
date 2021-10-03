//load all envirement varaible from .env
require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const port = process.env.PORT || 3000
console.log(DATABASE_NEWURL)
app.use(
    cors({
        origin:'https://rydz99.github.io',
        credentials: true    
    })
)

//connection with mongodb
mongoose.connect(process.env.DATABASE_NEWURL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', (error) => console.log('connected to database'))

app.use(express.json())

const iceRouter = require('./routes/ice')
app.use('/ice', iceRouter)

app.listen(port, () => {
    console.log('server started')
})