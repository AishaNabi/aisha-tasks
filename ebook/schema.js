import mongoose, { Schema } from "mongoose"

export const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    pageCount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    authorId: {
        type: mongoose.ObjectId,
        required: true,
    },
    genre: {
        type: String,
        required: true
    }
}, {
    versionKey: false
})

export const authorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    bookIds: [mongoose.ObjectId]
}, {
    versionKey: false
})