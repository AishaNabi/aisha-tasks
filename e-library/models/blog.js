import mongoose, { model, Schema } from "mongoose"

const blogSchema = new Schema({
    blogName: { type: String, required: true, },
    description: { type: String, required: true, },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'users', 
    },
    book: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'books', 
    },
}, { versionKey: false})

export default model('blog', blogSchema)