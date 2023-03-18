import userModel from '../models/user.js'
import path from "path";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const signGet = async (req, res) => {
    res.sendFile(path.resolve("./pages/signup.html"))
}

export const signUp =  async (req, res) => {
    const { username, name, surname, job, email, password } = req.body
    const { originalname: photo } = req.file
    const isExist = await userModel.findOne({ email: email })
    if (isExist) {
        res.status(400).send({ message: "User already exists!..." })
    }

    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)

    await userModel.create({
        username, name, surname, job, email, photo,
        password: hashedPassword
    })
    return res.redirect("/user/login")
}

export const loginGet =  async (req, res) => {
    res.sendFile(path.resolve("./pages/login.html"))
}

export const logIn = async (req, res) => {
    const { email, password } = req.body
    const userExist = await userModel.findOne({ email })
    if (!userExist) {
        res.status(404).send('User not found')
    }

    const isPasswordRight = await bcrypt.compare(password, userExist.password)
    if (!isPasswordRight) {
        res.status(401).send({ message: "Invalid credentials.." })
    }

    const token = jwt.sign({ email }, 'secret')
    return res.redirect(`profile/${token}`)
}

export const profile = async (req, res) => {
    const user = await userModel.findOne({ email: req.userEmail })
    res.send(`
    <body style="background-image:url('/bc_photo/16607919_2102.i518.009_sky_cloud_evening_illustration.jpg');background-size:cover;">
    <div> <img style="object-fit:cover;width:200px;height:200px;border-radius:50%;" src="/photos/${user.photo}" alt="${user.username}"/>
    <h1>${user.username}</h1>
    <h1>${user.email}</h1>  
    <a href="/book-create/${req.params.token}">Create book</a>
    <a href="/blog/create/${req.params.token}">Create blog</a>
    </div></body>
    `)
    res.end()
}


