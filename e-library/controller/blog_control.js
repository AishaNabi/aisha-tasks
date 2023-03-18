import blogModel from '../models/blog.js'
import userModel from '../models/user.js'
import bookModel from '../models/book.js'
import path from "path";

export const allBlog = async (req, res) => {
    res.set({ 'Content-Type': 'text/html; charset=utf-8' })
    const blogs = await blogModel.find()
    const user = await userModel.findOne()
    const book = await bookModel.findOne()
    res.write(`<body style="background-image:url('../public/bc_photo/16607919_2102.i518.009_sky_cloud_evening_illustration.jpg');background-size:cover;background-attachment: fixed;overflow: auto;font-family: 'Ubuntu', sans-serif;margin: 0; padding: 0;">
    <style>nav{display: flex;justify-content: space-between;align-items: center;padding: 20px 1%;}
    .p{font-size: 1.4em;font-weight: bold;margin-right: 30px;}
    .main{display: flex;justify-content: flex-start;align-items: center;}
    svg {height: 50px;width: 50px;}
    a {text-decoration: none;background-color: transparent;color: #083858;padding: 2px;}</style>
    <nav><div class="main">
        <a href="/" class="p"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg> </a>
        <a href="/books" class="p">Books</a>
        <a href="/blog" class="p">Blogs</a>
    </div></nav>`)
    blogs.forEach((blog) => {
        res.write(`
        <div style="margin-top: 8px;background-color: transparent;font-family: 'Ubuntu', sans-serif;width: 95%;min-height: 150px; overflow: auto;border-radius: 8px;padding: 0px 15px;border: white 3px solid;">
        <div style="display: flex; align-items: center; justify-content: flex-start;">
            <img style="margin-right:8px;object-fit:cover;width:30px;height:30px;border-radius:50%;" src="/photos/${user.photo}" alt="${user.username}"/>
            <p>${user.username}</p>
        </div>
            <h3>Blog's name: ${blog.blogName} </h3>
            <p>Description: ${blog.description}</p>
            <a href='/books/${book.id}'>Book:${book.bookName}<a/>
        </div>        
        `)
    })
    res.write(`</body>`)
    res.end()
}
export const create = (req, res) => {
    res.sendFile(path.resolve('./pages/blogCreate.html'))
}

export const createBlog = async (req, res) => {
    const body = req.body
    const user = await userModel.findOne({ email: req.userEmail })
    // console.log(body); console.log(user)
    await blogModel.create({
        blogName: req.body.blogName,
        description: req.body.description,
        userId: user._id,
    })
}