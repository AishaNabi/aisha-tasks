import mongoose, { model, Schema } from "mongoose"

const bookSchema = new Schema({
    bookName: { type: String, required: true, },
    bookFile: { type: String, required: true, },
    authorName: { type: String, required: true, },
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'users', 
    },
    categoryId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'categories', 
    },
}, { versionKey: false})

export default model('book', bookSchema)
