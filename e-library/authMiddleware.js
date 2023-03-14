import jwt from "jsonwebtoken"

function requireAuth(req, res, next) {
    const { token } = req.params
    if (token) {
        jwt.verify(token, 'secret', (err, decodedToken) => {
            if (err) {
                return res.send('token is invalid!')
            } 
            req.userEmail = decodedToken.email
        })
        next()
    } 
}

export default requireAuth;
