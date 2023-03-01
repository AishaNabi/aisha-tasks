import { model } from "mongoose";
import { authorSchema, bookSchema } from "./schema.js";

export const bookModel = model('book', bookSchema)

export const authorModel = model('author', authorSchema)
