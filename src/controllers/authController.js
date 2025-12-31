const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Render register page
const registerPageContgroller = (req, res) => {
    res.render('auth/register')
}
// Register a new user
const registerUserController = async (req, res) => {
    try {
        const { name, email, password } = req.body

        // Check if user already exists
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.render('auth/register', { error: 'User already exists' })
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10)

        //save User
        await User.create({
            name,
            email,
            password: hashedPassword
        })

        res.redirect('/auth/login')
    } catch (error) {
        console.log('Register Error', error);
        res.render('auth/register', { error: error.message || 'Registration failed' })
    }
}

// render Login page
const loginPageController = (req, res) => {
    res.render('auth/login')
}
// Login User
const LoginUserController = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.render('auth/login', {
                error: 'Invalid credentials'
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.render('auth/login', {
                error: 'Invalid credentials'
            })
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        )

        res.cookie('token', token, { httpOnly: true })
        res.json({ token })
    } catch (error) {
        console.log('Login Error', error.message);
        res.render('auth/login', {
            error: 'Server error during Login'
        })
    }
}

//Logout User
const logout = (req, res) => {
    res.clearCookie('token')
    res.redirect('/auth/login')
}


module.exports = { registerPageContgroller, registerUserController, loginPageController, LoginUserController, logout }