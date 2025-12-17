const express = require('express')
const { getListOfAppointment, getShowAddFormOfAppointment, createAppointment } = require('../controllers/appointmentController')

const router = express.Router()

// GET: List all appointments
router.get('/', getListOfAppointment)

// GET: Show add appointment form
router.get('/add', getShowAddFormOfAppointment)

// POST: Create new appointment
router.post('/add', createAppointment)

module.exports = router;
