const validateRequest = require("./validateRequest")

const validateApiRequest = (req, res, next) => {
    const errors = validateRequest(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    next()
}

module.exports = validateApiRequest