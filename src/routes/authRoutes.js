const express = require('express')
const { registerUserController, LoginUserController, registerPageContgroller, loginPageController, logout } = require('../controllers/authController')
const { registerValidation, loginValidation } = require('../validators/authValidator')
const validateRequest = require('../middleware/validateRequest')
const router = express.Router()

router.get('/register', registerPageContgroller)
router.post('/register', registerValidation, validateRequest, registerUserController)

router.get('/login', loginPageController)
router.post('/login', loginValidation, validateRequest, LoginUserController)

router.get('/logout', logout)

module.exports = router