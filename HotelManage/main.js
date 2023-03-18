import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routers/user.js'


const app = express()
app.use(express.json())
mongoose.connect("mongodb+srv://Task:17may2004@cluster0.sttsvse.mongodb.net/?retryWrites=true&w=majority")

const JWT_SECRET = 'idk'
app.use('/api', userRouter)


app.listen(5050, ()=>{
    console.log("Server is up...")
})