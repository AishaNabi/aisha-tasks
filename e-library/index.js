import express  from "express";
import mongoose from "mongoose";
import path from "path";
import multer from './multer.js'
import bookModel from './model.js'

const app = express()
app.use(express.urlencoded())
const connectionUrl = "mongodb+srv://Task:17may2004@cluster0.sttsvse.mongodb.net/?retryWrites=true&w=majority"
app.use(express.static(path.resolve('public')))

mongoose.connect(connectionUrl)

app.get('/', async (req, res)=>{
    res.sendFile(path.resolve("./index.html"))
})
app.get('/books', async (req, res)=>{
    res.setHeader('content-type', 'text/html')
    const books = await bookModel.find()
    books.forEach((book)=>{
        res.write(`
        <h5>Book's name: ${book.bookName} </h5>
        <h5>Author's name: ${book.author}</h5>
        <a href = "${book.bookFile}">${book.bookFile}</a>
        `)
    })
    res.send()
})
app.post('/upload', multer.single('bookFile'), async (req, res)=>{
    await bookModel.create({
        bookName: req.body.bookName,
        author: req.body.author,
        bookFile: req.file.originalname
    })
    res.redirect('/books')
})
app.listen(4040, ()=>{
    console.log('Server is up...')
})
