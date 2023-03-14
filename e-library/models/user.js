import { model, Schema } from "mongoose"

const userSchema = new Schema({
    name: { type: String, required: true, },
    username: { type: String, required: true, },
    surname: { type: String, required: true, },
    job: { type: String, required: true, },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, },
    photo: { type: String, required: true, },
}, { versionKey: false, timestamps: true })

export default model('user', userSchema)
