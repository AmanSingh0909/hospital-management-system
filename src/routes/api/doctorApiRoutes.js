const express = require('express')
const router = express.Router()

const authHeader = require('../../middleware/authHeaderMiddleware')
const { getDoctor, createDoctor } = require('../../controllers/api/doctorApiController')
const { createDoctorValidation } = require('../../validators/doctorValidator')
const validateApiRequest = require('../../middleware/validateApiRequest')

// GET /api/doctors
router.get('/', authHeader, getDoctor)

router.post('/', authHeader, createDoctorValidation, validateApiRequest, createDoctor)

module.exports = router