import { model, Schema } from "mongoose"

export const bookSchema = new Schema({
    bookName: String,
    author: String,
    bookFile: String,
}, { versionKey: false })

export default model('book', bookSchema)