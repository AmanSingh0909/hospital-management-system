const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const connectDB  = require('./config/db')
const path = require('path');
const methodOverride = require('method-override');

const patientRoutes = require('./routes/patientsRoutes')
const doctorRoutes = require('./routes/doctorRoutes')
const appointmentRoutes = require('./routes/appointmentRoutes')

const expressLayouts = require('express-ejs-layouts');




// dot env configration
dotenv.config()

const PORT = process.env.PORT || 3000

// DB connection
connectDB()

const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, '..', 'public')));

// Views setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/patients', patientRoutes);
app.use('/doctors', doctorRoutes)
app.use('/appointments', appointmentRoutes)

app.get('/', (req, res) => res.render('dashboard'));


app.use(expressLayouts);
app.set('layout', 'layouts/main');



app.listen(PORT, () => {
    console.log(`Worker ${process.pid} running on ${PORT}`);
})