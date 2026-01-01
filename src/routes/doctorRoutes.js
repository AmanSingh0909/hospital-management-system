const express = require('express')
const auth = require('../middleware/authCookiesMiddleware')
const admin = require('../middleware/adminMiddleware')
const { getListDoctors, getShowAddForm, createAddDoctor } = require('../controllers/doctorController')
const router = express.Router()

// GET: List doctors
router.get('/',auth, getListDoctors)

// GET: Show add doctor form
router.get('/add', getShowAddForm)

// POST: Add doctor
router.post('/add', auth, admin, createAddDoctor)

module.exports = router;
