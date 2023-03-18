import express from "express";
import mongoose from "mongoose";
import path from "path";
import bookRouter from './router/book.js'
import userRouter from './router/user.js'
import blogRouter from './router/blog.js'
import categoryModel from './models/category.js'

const app = express()
app.use(express.urlencoded())
app.use(express.json())

const JWT_SECRET = 'secret'
mongoose.connect("mongodb+srv://Task:17may2004@cluster0.sttsvse.mongodb.net/?retryWrites=true&w=majority")

app.use(express.static(path.resolve('public')))

app.use('/', bookRouter)
app.use('/user', userRouter)
app.use('/blog', blogRouter)


app.listen(4040, () => {
    console.log('Server is up...')
    console.log('4040')
})
