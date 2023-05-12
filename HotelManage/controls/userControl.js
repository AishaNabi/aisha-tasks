import userModel from '../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../main.js'

export const signUp = async (req, res) => {
    const { firstName, lastName, email, phoneNumber, password, role } = req.body
    const isExist = await userModel.findOne({ email })
    if (isExist) {
        res.send({ message: "User already exist.." })
    }
    const salt = await bcrypt.genSalt()
    const hashedPass = await bcrypt.hash(password, salt)
    if(validate(phoneNumber)){
        const obj = await userModel.create({
            firstName, lastName, email, phoneNumber,
            password: hashedPass, role
        })
        res.send(obj)
    }
    function validate(phoneNumber) {
        const regex = /^\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/;
        if (!regex.test(phoneNumber)) {
            res.send(' Invalid international phone number')
            return false
        }else{
            return true
        }
    }
}

export const signIn = async (req, res) => {
    const { email, password } = req.body
    const userExist = await userModel.findOne({ email })
    if (!userExist) {
        res.send({ message: "User not found!" })
    }
    const isPassRight = await bcrypt.compare(password, userExist.password)
    if (!isPassRight) {
        res.send({ message: "Invalid credentials.." })
    }
    const token = jwt.sign({ email, role: userExist.role }, JWT_SECRET)
    res.send(token)
}