const express = require('express')
const router = express.Router()

const authHeader = require('../../middleware/authHeaderMiddleware')
const { getDoctor, createDoctor } = require('../../controllers/api/doctorApiController')

// GET /api/doctors
router.get('/', authHeader, getDoctor)

router.post('/', authHeader, createDoctor)

module.exports = router