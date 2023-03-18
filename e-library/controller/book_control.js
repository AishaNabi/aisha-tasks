import bookModel from '../models/book.js'
import userModel from '../models/user.js'
import path from 'path'

export const home_p = async (req, res) => {
    res.sendFile(path.resolve("./pages/index.html"))
}

export const getAll = async (req, res) => {
    res.set({ 'Content-Type': 'text/html; charset=utf-8' })
    const books = await bookModel.find()
    const { id } = req.params
    const book_id = await bookModel.findById(id)
    const user = await userModel.findById(book_id.userId)
    res.write(`<body style="background-image:url('../public/bc_photo/16607919_2102.i518.009_sky_cloud_evening_illustration.jpg');background-size:cover;background-attachment: fixed;overflow: auto;font-family: 'Ubuntu', sans-serif;margin: 0; padding: 0;">
    <style>nav{display: flex;justify-content: space-between;align-items: center;padding: 20px 1%;}
    .p{font-size: 1.4em;font-weight: bold;margin-right: 30px;}
    .main{display: flex;justify-content: flex-start;align-items: center;}
    svg {height: 50px;width: 50px;}
    a {text-decoration: none;background-color: transparent;color: #083858;padding: 2px;}</style>
    <nav><div class="main">
            <a href="/" class="p"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg> 
            </a>
            <a href="/books" class="p">Books</a>
            <a href="/blog" class="p">Blogs</a>
        </div></nav>`)
    books.forEach((book) => {
        res.write(`<div style="font-size:20px;margin:20px 1%;background-color:transparent;width:95%;height:170px;border-radius:20px;padding: 5px 15px;border: whitesmoke 2px solid;">
        <h5>Book's name: ${book.bookName} </h5>
        <h5>Author's name: ${book.authorName}</h5>
        <a href = "${book.bookFile}">${book.bookFile}</a>
        </div> 
        <div style="display: flex; align-items: center; justify-content: flex-start;">
            <img style="margin-right:8px;object-fit:cover;width:30px;height:30px;border-radius:50%;" src="/photos/${user.photo}" alt="${user.username}"/>
            <p>${user.username}</p>
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
    <body style="background-image:url('/bc_photo/16607919_2102.i518.009_sky_cloud_evening_illustration.jpg');background-size:cover;">
    <a href="/books">All books</a>
    <div style="font-size:20px;margin-top:50px;font-family:'Ubuntu', sans-serif;padding: 0px 15px;">
        <div style="display: flex; align-items: center; justify-content: flex-start;">
            <img style="margin-right:8px;object-fit:cover;width:50px;height:50px;border-radius:50%;" src="/photos/${user.photo}" alt="${user.username}"/>
            <p>${user.username}</p>
        </div>
        <h5>Book's name: ${book.bookName} </h5>
        <h5>Author's name: ${book.authorName}</h5>
        <a href = "${book.bookFile}">${book.bookFile}</a>
    </div></body>`)
}
export const created = (req, res) => {
    res.sendFile(path.resolve('./pages/bookCreate.html'))
}
export const createData = async (req, res) => {
    const user = await userModel.findOne({ email: req.userEmail })
    const { _id } = await bookModel.create({
        bookName: req.body.bookName,
        authorName: req.body.author,
        bookFile: req.file.originalname,
        userId: user._id,
        categoryId: req.body.categoryId
    })
    return res.redirect(`/books/${_id}`)
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