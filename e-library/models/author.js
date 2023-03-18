import { model, Schema } from "mongoose"
import bookSchema from "./book.js"

const authorSchema = new Schema({
    name: { type: String, required: true, },
    surname: { type: String, required: true, },
    books: [bookSchema],
}, { versionKey: false })

export default model('author', authorSchema)