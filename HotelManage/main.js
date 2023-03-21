import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routers/log_signup.js'
import roomAdminRouter from './routers/roomAdmin.js'
import roomRouter from './routers/room.js'
import reserveRouter from './routers/reserve.js'
import userRouter from './routers/user.js'

const app = express()
app.use(express.json())
mongoose.connect("mongodb+srv://Task:17may2004@cluster0.sttsvse.mongodb.net/?retryWrites=true&w=majority")

export const JWT_SECRET = 'idk'
app.use('/api', userRouter)
app.use('/api/admin', roomAdminRouter)
app.use('/api', roomRouter)
app.use('/api', reserveRouter)




app.listen(5050, ()=>{
    console.log("Server is up...")
})