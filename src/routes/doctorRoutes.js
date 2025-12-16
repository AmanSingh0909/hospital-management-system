const express = require ('express')
const { getListDoctors, getShowAddForm, createAddDoctor } = require('../controllers/doctorController')
const router = express.Router()

// GET: List doctors
router.get('/', getListDoctors)

// GET: Show add doctor form
router.get('/add', getShowAddForm)

// POST: Add doctor
router.post('/add', createAddDoctor)

module.exports = router;
