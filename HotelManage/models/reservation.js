import { model, Schema } from "mongoose";

const reservModel = new Schema({
    userId: { type: Schema.Types.ObjectId, require: true, },
    roomNumber: { type: Number, require: true, },
    checkInDate: { type: String, require: true, },
    checkOutDate: { type: String, require: true, },
    totalAmount: { type: Number, require: true, },
    isActive: { type: Boolean, required: true }
}, { versionKey: false })

export default model('reservation', reservModel)