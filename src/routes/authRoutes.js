const express = require('express')
const { registerUserController, LoginUserController } = require('../controllers/authController')
const router = express.Router()

router.post('/register', registerUserController)

router.post('/login', LoginUserController)

module.exports = router