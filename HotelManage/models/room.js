import { model, Schema } from "mongoose";

const roomModel = new Schema({
    roomNumber: { type: Number, require: true, },
    roomType: { type: String, require: true, },
    occupancy: { type: Number, require: true, },
    price: { type: Number, require: true, },
    availability: { type: Boolean, require: true, },
    isActive: { type: Boolean, required: true }
}, { versionKey: false })

export default model('room', roomModel)