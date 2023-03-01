import express from "express";
import mongoose from "mongoose";
import { connectionString } from "./utils.js";
import bookRouter from './routers/book.js'
import authorRouter from './routers/author.js'


const app = express()
mongoose.connect(connectionString)

app.use(express.json())
app.use('/book', bookRouter)
app.use('/author', authorRouter)


app.listen(5050, () => {
    console.log('server is up...')
})