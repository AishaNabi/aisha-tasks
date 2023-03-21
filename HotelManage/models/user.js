import { model, Schema } from "mongoose";

const userModel = new Schema({
    firstName: { type: String, require: true, },
    lastName: { type: String, require: true, },
    email: { type: String, require: true, unique: true },

    phoneNumber: { type: String, require: true, },
    password: { type: String, require: true, },
    role: { type: Object, required: ["user", "admin"] }
}, { versionKey: false })

export default model('user', userModel)