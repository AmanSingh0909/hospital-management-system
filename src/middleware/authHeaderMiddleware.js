const jwt = require('jsonwebtoken')

const authHeaderMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                message: 'Authorization header missing or missing'
            })
        }

        const token = authHeader.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded
        next()

    } catch (error) {
        console.log('Header Auth Error:', error.message);
        res.status(401).json({ message: 'invalid or expired token' })
    }
}

module.exports = authHeaderMiddleware