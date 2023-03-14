import {model, Schema} from 'mongoose'

const categorySchema = new Schema({
    name: String
})

export default model('category', categorySchema)
