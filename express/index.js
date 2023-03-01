import express from "express"
import mongoose from "mongoose"
import productRouter from "./api/products.js"
import {connectionString} from "./utils.js"
 
const app = express()
app.use(express.json())
mongoose.connect(connectionString)

app.use('/products', productRouter)


app.listen(5000, () => {
    console.log("runing in 5000")
})
