const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


// Register a new user

const registerUserController = async (req, res) => {
    try {
        const { name, email, password} = req.body

        // Check if user already exists
        const existingUser = await User.findOne({ email})
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
const LoginUserController = async (req, res ) => {
    try {
        
    } catch (error) {
        
    }
}