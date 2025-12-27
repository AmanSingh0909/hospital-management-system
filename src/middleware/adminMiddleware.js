

const adminMiddleware = (req, res, next) => {
    try {
        if (!req.user || req.user.role !== 'admin') {
            return res.status(403).json({
                message: 'Admin access required'
            })
        }
    } catch (error) {
        console.log('Admin Middleware Error:', error.message);
        res.status(500).json({
            message: 'Authorization Error'
        })
        
    }
}