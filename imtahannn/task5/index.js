import express from 'express'
import mongoose from 'mongoose'
import userDash from './router.js'

const app = express()
mongoose.connect('mongodb+srv://Task:zPo5znNqySpMTMMI@cluster0.sttsvse.mongodb.net/?retryWrites=true&w=majority')

app.use(express.json())

app.use('/', userDash)

app.listen(5050, ()=>{
    console.log('server is up...')
})