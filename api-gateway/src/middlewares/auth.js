const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    const {authorization} = req.headers

    if(!authorization) {
        return res.status(401).json({ error: 'Unauthorized'})
    }

    const token = authorization.replace('Bearer', '').trim()
    
    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY)
        
    } catch (error) {
        console.log(error)
        return res.status(error.status || 401).json({ error: error.message || 'Unauthorizd'})
    }
    
    next()

}