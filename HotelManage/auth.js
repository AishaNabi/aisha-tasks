import jwt from 'jsonwebtoken'
import { JWT_SECRET } from './main.js'

function requireAuth(req, res, next) {
    const token = req.headers.authorization.split(' ')[1]
    const isAdmin = req.originalUrl.includes('/admin')
    if(token){
        jwt.verify(token, JWT_SECRET, (err, decodedToken)=>{
            if(err){
                return res.send({message: 'token is invalid!'})
            }
            if(isAdmin && decodedToken.role !== 'admin'){
                return res.send('It is not for u :)')
            }
            req.userEmail = decodedToken.email
        })
        next()
    }
}
export default requireAuth