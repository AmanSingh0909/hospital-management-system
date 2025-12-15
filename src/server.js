const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const connectDB  = require('./config/db')
const path = require('path');
const patientRoutes = require('./routes/patientsRoutes')

// dot env configration
dotenv.config()

const PORT = process.env.PORT || 3000

// DB connection
connectDB()

const app = express()

// middleware
app.use(express.json())
app.use(morgan('dev'))

// Views setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => res.render('dashboard'));

// Routes
app.use('/patients', patientRoutes);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})