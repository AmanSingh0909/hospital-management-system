const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const connectDB  = require('./config/db')

// dot env configration
dotenv.config()

const PORT = process.env.PORT || 3000

// DB connection
connectDB()

const app = express()

// middleware
app.use(express.json())
app.use(morgan('dev'))


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})