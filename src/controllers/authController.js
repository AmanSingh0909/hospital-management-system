const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


// Register a new user

const registerUserController = async (req, res) => {
    try {
        const { name, email, password } = req.body

        // Check if user already exists
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' })
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10)

        //save User
        await User.create({
            name,
            email,
            password: hashedPassword
        })

        res.status(201).json({
            message: 'User registered successfully'
        })
    } catch (error) {
        console.log('Register Error', error.message);
        res.status(500).json({
            message: 'Server error during registration'
        })
    }
}

// Login User
const LoginUserController = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                message: 'Invalid credentials'
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({
                message: 'Invalid credentials'
            })
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        )
        res.json({ token })
    } catch (error) {
        console.log('Login Error', error.message);
        res.status(500).json({
            message: 'Server error during Login'
        })
    }
}

module.exports = {registerUserController, LoginUserController}