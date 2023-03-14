import bookModel from '../models/book.js'
import userModel from '../models/user.js'
import path from 'path'

export const home_p = async (req, res) => {
    res.sendFile(path.resolve("./pages/index.html"))
}

export const getAll = async (req, res) => {
    res.set({ 'Content-Type': 'text/html; charset=utf-8' })
    const books = await bookModel.find()
    res.write(`
    <a href="/book-create/${req.params.token}">Create Book</a>
    <body style="background-color:#D0D3D4;">`)
    books.forEach((book) => {
        res.write(`<div style="margin-top: 8px;background-color: white;font-family: 'Lucida Sans', sans-serif;width: 95%;height: 150px;border-radius: 8px;padding: 0px 5px 0px 5px;border: #164f75 3px solid;">
        <h5>Book's name: ${book.bookName} </h5>
        <h5>Author's name: ${book.author}</h5>
        <a href = "${book.bookFile}">${book.bookFile}</a>
        </div>        
        `)
    })
    res.write(`</body>`)
    res.end()
}
export const viewBook = async (req, res) => {
    const { id } = req.params
    const book = await bookModel.findById(id)
    const user = await userModel.findById(book.userId)
    return res.send(`
        <a href="/books">All books</a>
        <h5>Book's name: ${book.bookName} </h5>
        <h5>Author's name: ${book.authorName}</h5>
        <a href = "${book.bookFile}">${book.bookFile}</a>
        <h1>${user.username}</h1>
        <img style="object-fit:cover;width:200px;height:200px;border-radius:50%;" src="/photos/${user.photo}" alt="${user.username}"/>
    `)
}
export const created = (req, res) => {
    res.sendFile(path.resolve('./pages/bookCreate.html'))
}
export const createData = async (req, res) => {
    const user = await userModel.findOne({ email: req.userEmail })
    const {_id} = await bookModel.create({
        bookName: req.body.bookName,
        authorName: req.body.author,
        bookFile: req.file.originalname,
        userId: user._id,
        categoryId : req.body.categoryId
    })
    res.redirect(`/books/${_id}`)
}

// export const updateById = async (req, res) => {
//     const _id = req.params._id
//     const newObj = req.body
//     const updateById = await bookModel.findByIdAndUpdate({ _id }, {
//         $set: newObj
//     }, { new: true })
//     res.redirect('/books')
// }

// export const deleteById = async (req, res) => {
//     const _id = req.params._id
//     const deleteById = await bookModel.findOneAndDelete({ _id })
//     res.redirect('/books')
// }