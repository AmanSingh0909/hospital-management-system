const jwt = require('jsonwebtoken')

const authCookiesMiddleware = (req, res, next) => {
    try {
        const token = req.cookies.token

        if (!token) {
            return res.redirect('/auth/login')
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded

        next()

    } catch (error) {
        res.render('/auth/login')
    }
}

module.exports = authCookiesMiddleware


//Server-rendered app with EJS + browser forms

//Browser reality:

// HTML forms cannot set Authorization headers

// Users don’t manually attach JWT headers

// Best practice is cookies