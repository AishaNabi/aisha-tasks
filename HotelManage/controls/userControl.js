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
    const obj = await userModel.create({
        firstName, lastName, email, phoneNumber,
        password: hashedPass, role
    })
    res.send(obj)
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