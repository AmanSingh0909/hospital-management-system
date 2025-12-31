const express = require('express')
const { registerUserController, LoginUserController, registerPageContgroller, loginPageController, logout } = require('../controllers/authController')
const router = express.Router()

router.get('/register', registerPageContgroller)
router.post('/register', registerUserController)

router.get('/login', loginPageController)
router.post('/login', LoginUserController)

router.get('/logout', logout)

module.exports = router